import { MdFastfood } from 'react-icons/md';
import { IoRestaurant } from 'react-icons/io5';
import { FaShopify } from 'react-icons/fa';
import { MdOutlineHealthAndSafety } from 'react-icons/md';

import { NavLink } from 'react-router-dom';
import fakeEntries from '../../data/fakeEntries';
import { moods, moodColor } from '../../data/moods';
import { useQuery } from '@tanstack/react-query';
import { getEntries } from '../../services/apiEntries';
import { getLocations } from '../../services/apiLocations';

const moodsColor = moodColor;

function EntryItem({ entry, index }) {
  const { id, date, location, user, position } = entry;

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

  const entryId = entries.filter((entry) => +id === entry.id)[0];
  console.log(entryId);

  const entryShorten =
    entryId.entry.length < 34
      ? entryId.entry
      : entryId.entry.slice(0, 20) + '...';

  // console.log(entryShorten);

  if (isPendingEntries || isPendingLocations) return <MoonLoader />;

  console.log(locations[entries[index].locationId - 1].icon);
  return (
    <li className="">
      <NavLink
        className="mt-4 flex h-14 w-full rounded-2xl bg-accent-teal "
        to={`${id}?lat=${
          locations[entries[index].locationId - 1].coords
            .split(', ')
            .map((coord) => +coord)[0]
        }&lng=${
          locations[entries[index].locationId - 1].coords
            .split(', ')
            .map((coord) => +coord)[1]
        }`}
      >
        <div className="mt-[2px] grid h-[7%] w-full grid-cols-[24%_42%_34%] rounded-3xl bg-transparent text-white drop-shadow-lg">
          <div className="flex  items-center justify-center ">
            <div
              className={`flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full ${
                moodsColor[`${entry.primaryMood}`]
              } `}
            >
              <div className="text-[2rem] ">
                <MdFastfood />
              </div>
            </div>
          </div>

          <div className="text-balance flex items-center justify-center">
            {entryShorten}
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <div>{entry.date}</div>
            <div
              className={`rounded-full ${
                moodsColor[`${entry.primaryMood}`]
              } pl-2 pr-2`}
            >
              {entry.primaryMood}
            </div>
          </div>
        </div>
      </NavLink>
    </li>
  );
}

export default EntryItem;
