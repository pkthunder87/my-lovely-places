import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import supabase from '../../services/supabase';
import { useNavigate } from 'react-router-dom';

import MoonLoader from 'react-spinners/MoonLoader';
import { LuTimerReset } from 'react-icons/lu';

import locations from '../../data/locations';
import { moods } from '../../data/moods';

import { createLocation, getLocations } from '../../services/apiLocations';
import { createEntry, getEntries } from '../../services/apiEntries';
import { useUrlPosition } from '../../hooks/useUrlPosition';
import { useCurrentUser } from '../../contexts/UserContext';
import { useEntryLocalStorage } from '../../hooks/useEntryLocalStorage';

const BASE_URL = 'https://us1.locationiq.com/v1/reverse';

const locationIqKey = import.meta.env.VITE_LOCATION_IQ_KEY;

function EntryForm() {
  const navigate = useNavigate();

  const { register, handleSubmit, setValue, getValues, reset } = useForm({
    mode: 'onBlur',
  });

  const [entryDraft, setEntryDraft] = useEntryLocalStorage([], 'localEntry');

  const queryClient = useQueryClient();

  const { currentUser } = useCurrentUser();

  const [lat, lng] = useUrlPosition();

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);

  const [geoCodingError, setGeocodingError] = useState('');

  const {
    isPending: isPendingLocationsAPI,
    data: locationsRemoteData,
    errorLocations,
  } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
  });

  const {
    isPending: isPendingEntriesAPI,
    data: entries,
    errorEntries,
  } = useQuery({
    queryKey: ['entries'],
    queryFn: getEntries,
  });

  const { mutate: mutateLocation, isPending: isPendingCreateLocation } =
    useMutation({
      mutationFn: createLocation,
      onSuccess: async () => {
        toast.success('New location successfully created');
        queryClient.invalidateQueries({ queryKey: ['locations'] });
        reset();
      },
      onError: (err) => toast.error(err.message),
    });

  const { mutate: mutateEntry, isPending: isPendingCreateEntry } = useMutation({
    mutationFn: createEntry,
    onSuccess: () => {
      toast.success('New entry successfully created');
      queryClient.invalidateQueries({ queryKey: ['entries'] });
      navigate('/app/map/entries');
      // reset();
    },
    onError: (err) => toast.error(err.message),
  });

  useEffect(() => {
    if (!lat && !lng) return;

    async function fetchCityData() {
      reset();
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError('');
        const res = await fetch(
          `${BASE_URL}?key=${locationIqKey}&lat=${lat}&lon=${lng}&format=json`,
        );
        const data = await res.json();

        const currentVSLocalEntry = entryDraft.filter(
          (localDraft) => localDraft.clickPlaceId === data.place_id,
        );

        if (data.error) throw new Error('That is not a valid a location.');

        const address = data.address;

        const allLocationsId = locationsRemoteData.map(
          (location) => location.placeId,
        );

        if (allLocationsId.includes(data.place_id)) {
          setValue('locationAlreadyExists', true);
        } else {
          setValue('locationAlreadyExists', false);
        }

        setValue('currentLocation', data.display_name);

        setValue('clickPlaceId', data.place_id);

        setValue('coords', `${data.lat}, ${data.lon}`);

        // Code from https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/
        const currentDate = new Date().toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });

        setValue('date', currentVSLocalEntry[0]?.date || currentDate);

        setValue('country', address.country);

        if (currentVSLocalEntry[0]) {
          setValue('entry', currentVSLocalEntry[0]?.entry || '');

          setValue('locationType', currentVSLocalEntry[0]?.locationType || '');

          setValue('primaryMood', currentVSLocalEntry[0]?.primaryMood || '');

          for (const [key, value] of Object.entries(currentVSLocalEntry[0])) {
            if (typeof value === 'boolean' && value === true) {
              if (key === 'locationAlreadyExists') continue;
              setValue(key, true);
            }
          }
        }

        setValue(
          'city',
          address.city ||
            address.village ||
            address.town ||
            address.county ||
            '',
        );
      } catch (err) {
        setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);

  useEffect(() => {
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'locations',
        },
        (payload) => {
          const userId = currentUser.id;

          const data = getValues();

          // Extract secondaryMoods from checkboxes in data object
          const secondaryMoodsList = [];
          for (const [key, value] of Object.entries(data)) {
            if (typeof value === 'boolean' && value === true) {
              if (key === 'locationAlreadyExists') continue;
              secondaryMoodsList.push(key);
            }
          }

          const secondaryMood = secondaryMoodsList.join(' ');

          const newEntry = {
            primaryMood: data.primaryMood,
            secondaryMood,
            entry: data.entry,
            userId,
            locationId: payload.new.id,
          };

          mutateEntry(newEntry);
        },
      )
      .subscribe();
  }, []);

  async function onClickDraft(data) {
    setEntryDraft((localEntry) => [...localEntry, data]);
  }

  async function onSubmit(data) {
    const userId = await currentUser.id;

    if (data.locationAlreadyExists) {
      const locationId = await locationsRemoteData?.filter(
        (item) => item.placeId === data?.clickPlaceId,
      )[0]?.id;

      // Extract secondaryMoods from checkboxes in data object
      const secondaryMoodsList = [];
      for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'boolean' && value === true) {
          if (key === 'locationAlreadyExists') continue;
          secondaryMoodsList.push(key);
        }
      }

      const secondaryMood = secondaryMoodsList.join(' ');

      const newEntry = {
        primaryMood: data.primaryMood,
        secondaryMood,
        entry: data.entry,
        userId,
        locationId,
      };

      mutateEntry(newEntry);
    } else {
      const newLocationItem = {
        locationName: data.currentLocation,
        placeId: data.clickPlaceId,
        locationType: data.locationType,
        country: data.country,
        city: data.city,
        coords: data.coords,
      };

      mutateLocation(newLocationItem);
    }
  }

  if (isLoadingGeocoding)
    return (
      <div className="mt-8 flex h-[90%] w-[90%] flex-col items-center justify-center rounded-xl bg-accent-teal text-base text-white drop-shadow-lg">
        <MoonLoader color={'#fff'} size={125} />
      </div>
    );

  if (geoCodingError)
    return (
      <div className="mt-8 flex h-[90%] w-[90%] flex-col items-center justify-center rounded-xl bg-accent-teal text-base text-white drop-shadow-lg">
        <p>{geoCodingError}</p>
        <p>Please click on a valid location on the map.</p>
      </div>
    );

  if (isPendingLocationsAPI)
    return (
      <div className="flex h-[90%] w-[90%] flex-col items-center justify-center rounded-xl bg-accent-teal text-base text-white drop-shadow-lg">
        <MoonLoader color={'#fff'} size={125} />
      </div>
    );

  return (
    <div className="mt-8 flex h-[90%] w-[90%] flex-col items-center justify-center rounded-xl bg-accent-teal drop-shadow-lg">
      <form
        className=" -ml-2 mt-8 flex h-full w-[90%] flex-col items-center gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="input-login h-10 w-full rounded-xl text-lg "
          disabled={false}
          type="text"
          id="currentLocation"
          name="currentLocation"
          placeholder="Current Location"
          required
          {...register('currentLocation')}
        />

        <input
          hidden={true}
          disabled={true}
          type="text"
          id="country"
          name="country"
          placeholder="Country"
          required
          {...register('country')}
        />

        <input
          hidden={true}
          disabled={true}
          type="text"
          id="city"
          name="city"
          placeholder="City"
          required
          {...register('city')}
        />

        <input
          hidden={true}
          disabled={true}
          type="text"
          id="coords"
          name="coords"
          placeholder="Coords"
          required
          {...register('coords')}
        />

        <input
          hidden
          disabled={true}
          type="checkbox"
          id="locationAlreadyExists"
          name="locationAlreadyExists"
          placeholder="locationAlreadyExists"
          required
          {...register('locationAlreadyExists')}
        />

        <input
          className="input-login h-10 w-full rounded-xl text-lg "
          disabled={false}
          type="text"
          id="date"
          name="date"
          placeholder="Date"
          required
          {...register('date')}
        />

        <select
          className="input-login h-10 w-full rounded-xl text-lg "
          id="locationType"
          name="locationType"
          defaultValue="none"
          required
          {...register('locationType')}
        >
          <option value="none" disabled hidden>
            Select Location Type
          </option>
          {locations.toSorted().map((location) => {
            return (
              <option value={location} key={location}>
                {location.charAt(0).toUpperCase() + location.slice(1)}
              </option>
            );
          })}
          <option value="others...">Others...</option>
        </select>

        <select
          className="input-login h-10 w-full rounded-xl text-lg "
          id="primaryMood"
          name="primaryMood"
          defaultValue="none"
          required
          {...register('primaryMood')}
        >
          <option value="none" disabled hidden>
            Select Primary Mood
          </option>
          {moods.toSorted().map((mood) => {
            return (
              <option value={mood} key={mood}>
                {mood.charAt(0).toUpperCase() + mood.slice(1)}
              </option>
            );
          })}
          <option value="others...">Others...</option>
        </select>

        <p className="-m-4 ml-2 mt-0 self-start text-white">
          Select 0 or more secondary moods :
        </p>
        <div className="ml-4 grid grid-cols-3 text-white">
          {moods.toSorted().map((mood) => {
            return (
              <div key={mood}>
                <input
                  className=""
                  type="checkbox"
                  id={mood}
                  name={mood}
                  {...register(mood)}
                />
                <label className="ml-2 mr-2" htmlFor={mood}>
                  {mood.charAt(0).toUpperCase() + mood.slice(1)}
                </label>
              </div>
            );
          })}
        </div>

        <textarea
          className="input-login flex h-64 w-full rounded-xl text-lg  "
          disabled={false}
          id="entry"
          name="entry"
          placeholder="Entry"
          required
          {...register('entry')}
        ></textarea>
        <div className=" flex">
          <button
            onClick={handleSubmit(onClickDraft)}
            className="button-general mr-4 h-10 w-32 border-2 bg-accent-teal"
          >
            Save Draft
          </button>
          <button className="button-general mr-4 h-10 w-32 bg-tint-teal drop-shadow-md">
            Create Entry
          </button>
          <button
            type="reset"
            className="button-general h-10 w-11 bg-tint-teal text-2xl drop-shadow-md"
          >
            <LuTimerReset />
          </button>
        </div>
      </form>
    </div>
  );
}

export default EntryForm;
