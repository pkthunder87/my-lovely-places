import { useEffect, useState } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

import locations from '../../data/locations';
import { moods } from '../../data/moods';
import { useUrlPosition } from '../../hooks/useUrlPosition';

const BASE_URL = 'https://us1.locationiq.com/v1/reverse';

const locationIqKey = import.meta.env.VITE_LOCATION_IQ_KEY;

function EntryForm() {
  const [lat, lng] = useUrlPosition();
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');

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

  if (isLoadingGeocoding)
    return (
      <div className="flex h-[90%] w-[90%] flex-col items-center justify-center rounded-xl bg-accent-teal text-base text-white drop-shadow-lg">
        <MoonLoader color={'#fff'} size={125} />
      </div>
    );

  if (geoCodingError)
    return (
      <div className="flex h-[90%] w-[90%] flex-col items-center justify-center rounded-xl bg-accent-teal text-base text-white drop-shadow-lg">
        <p>{geoCodingError}</p>
        <p>Please click on a valid location on the map.</p>
      </div>
    );

  return (
    <div className="mt-8 flex h-[90%] w-[90%] flex-col items-center justify-center rounded-xl bg-accent-teal drop-shadow-lg">
      <form className=" -ml-2 mt-8 flex h-full w-[90%] flex-col items-center gap-6">
        <input
          className="input-login h-10 w-full rounded-xl text-lg "
          disabled={false}
          type="text"
          id="current_location"
          name="current_location"
          placeholder="Current Location"
        />
        <input
          className="input-login h-10 w-full rounded-xl text-lg "
          disabled={false}
          type="text"
          id="date"
          name="date"
          placeholder="Date"
        />

        <select
          className="input-login h-10 w-full rounded-xl text-lg "
          id="location_type"
          name="location_type"
          defaultValue="none"
          required
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
          id="primary_mood"
          name="primary_mood"
          defaultValue="none"
          required
        >
          <option value="none" disabled hidden>
            Select 1 Primary Mood
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
                <input className="" type="checkbox" id={mood} name={mood} />
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
          id="current_location"
          name="current_location"
          placeholder="Current Location"
        ></textarea>
        <div className=" flex gap-8">
          <button className="button-general h-10 w-32 border-2 bg-accent-teal ">
            Save Draft
          </button>
          <button className="button-general h-10 w-32 bg-tint-teal drop-shadow-md">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default EntryForm;
