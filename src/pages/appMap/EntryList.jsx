import fakeEntries from '../../data/fakeEntries';
import { moods } from '../../data/moods';
import EntryItem from './EntryItem';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa6';

import { useEffect } from 'react';
import { getEntries } from '../../services/apiEntries';
import { useQuery } from '@tanstack/react-query';
import MoonLoader from 'react-spinners/MoonLoader';
import { getLocations } from '../../services/apiLocations';

function EntryList() {
  const {
    isPending: isPendingEntries,
    data: entries,
    errorEntries,
  } = useQuery({
    queryKey: ['entries'],
    queryFn: getEntries,
  });

  const {
    isPending: isPendingLocations,
    data: locations,
    errorLocations,
  } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
  });

  // Converts string coords into geolocation array positions
  // console.log(
  //   locations[entries[1].locationId - 1].coords
  //     .split(', ')
  //     .map((coord) => +coord),
  // );

  if (isPendingEntries || isPendingLocations) return <MoonLoader />;

  return (
    <>
      <form className=" w-[80%]">
        <div className="">
          <input
            className="input-login ml-0 mt-4 h-8 w-full rounded-full bg-white pl-5 focus:ring-4	 focus:ring-sign-blue"
            type="search"
            id="mySearch"
            name="q"
            placeholder="Enter entry search term"
          />

          <div className="flex justify-between">
            <select
              className="input-login ml-0 mt-4 h-8 w-[60%] rounded-full text-lg "
              id="primary_mood"
              name="primary_mood"
              defaultValue="none"
              required
            >
              <option value="none" disabled hidden>
                Filter by:
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

            <button className=" mt-4 h-8 w-[30%] rounded-full bg-accent-teal text-white">
              Search
            </button>
          </div>
        </div>
      </form>

      <div className="mt-6 flex h-[81%] w-[80%] flex-col items-center justify-between">
        <ul className="w-full list-none">
          {entries?.map((entry, index) => (
            <EntryItem entry={entry} index={index} key={entry.id} />
          ))}
        </ul>
        <div className="mb-2 flex w-full justify-between text-xl text-white">
          <div className="flex  items-center justify-center gap-1">
            <div className="text-2xl">
              <FaChevronLeft />
            </div>
            <p>Page 1</p>
          </div>
          <div className="flex  items-center justify-center gap-1">
            <p>Page 2</p>
          </div>
          <div className="flex  items-center justify-center gap-1">
            <p>Page 3</p>
            <div className="text-2xl">
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EntryList;
