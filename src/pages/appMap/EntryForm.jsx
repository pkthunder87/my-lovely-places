import { useEffect, useState } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import { LuTimerReset } from 'react-icons/lu';

import { useForm } from 'react-hook-form';

import locations from '../../data/locations';
import { moods } from '../../data/moods';
import { useUrlPosition } from '../../hooks/useUrlPosition';

const BASE_URL = 'https://us1.locationiq.com/v1/reverse';

const locationIqKey = import.meta.env.VITE_LOCATION_IQ_KEY;

function EntryForm() {
  const [lat, lng] = useUrlPosition();
  const { register, handleSubmit } = useForm();

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [cityName, setCityName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [geoCodingError, setGeocodingError] = useState('');

  useEffect(() => {
    if (!lat && !lng) return;

    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError('');
        const res = await fetch(
          `${BASE_URL}?key=${locationIqKey}&lat=${lat}&lon=${lng}&format=json`,
        );
        const data = await res.json();

        if (data.error) throw new Error('That is not a valid a location.');

        const address = data.address;

        setDisplayName(data.display_name);

        setCityName(address.city || address.village || address.town || '');

        setCountryName(address.country);
      } catch (err) {
        setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);

  function onSubmit(data) {
    console.log(data);

    // Extract secondaryMoods from checkboxes
    const secondaryMoodsList = [];
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'boolean' && value === true)
        secondaryMoodsList.push(key);
      else console.log(key, value);
    }

    console.log(secondaryMoodsList);
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
          <button className="button-general mr-4 h-10 w-32 border-2 bg-accent-teal">
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
