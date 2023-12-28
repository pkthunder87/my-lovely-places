import { MdFastfood } from 'react-icons/md';
import { IoRestaurant } from 'react-icons/io5';
import { FaShopify } from 'react-icons/fa';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import MoonLoader from 'react-spinners/MoonLoader';

import { NavLink } from 'react-router-dom';
import { moodColor } from '../../data/moods';
import { useQuery } from '@tanstack/react-query';
import { getEntries } from '../../services/apiEntries';
import { getLocations } from '../../services/apiLocations';
import LocationIcon from '../../ui/LocationIcon';

const moodsColor = moodColor;

function EntryItem({ entry, index }) {
  const { id, user } = entry;

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

  const entryShorten =
    entryId.entry.length < 34
      ? entryId.entry
      : entryId.entry.slice(0, 20) + '...';

  if (isPendingEntries || isPendingLocations)
    return (
      <div className="flex h-[90%] w-[90%] flex-col items-center justify-center rounded-xl bg-accent-teal text-base text-white drop-shadow-lg">
        <MoonLoader color={'#fff'} size={125} />
      </div>
    );

  const entryIcon = locations.filter(
    (location) => entry.locationId === location.id,
  )[0].locationType;

  const entryCoords = locations.filter(
    (location) => entry.locationId === location.id,
  )[0].coords;

  const dateArray = entry.created_at.slice(0, 10).split('-');

  const date = `${dateArray[1]} ${dateArray[2]} ${dateArray[0]}`;

  return (
    <li className="">
      <NavLink
        className="mt-4 flex h-14 w-full rounded-2xl bg-accent-teal "
        to={`${id}?lat=${
          entryCoords.split(', ').map((coord) => +coord)[0]
        }&lng=${entryCoords.split(', ').map((coord) => +coord)[1]}`}
      >
        <div className="mt-[2px] grid h-[7%] w-full grid-cols-[24%_42%_34%] rounded-3xl bg-transparent text-white drop-shadow-lg">
          <div className="flex  items-center justify-center ">
            <div
              className={`flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full ${
                moodsColor[`${entry.primaryMood}`]
              } `}
            >
              <LocationIcon entryIcon={entryIcon} />
            </div>
          </div>

          <div className="text-balance flex items-center justify-center">
            {entryShorten}
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <div>{date}</div>
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
