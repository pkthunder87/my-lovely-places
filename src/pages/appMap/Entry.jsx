import { useNavigate, useParams } from 'react-router-dom';

import { MdFastfood } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa6';
import MoonLoader from 'react-spinners/MoonLoader';

import fakeEntries from '../../data/fakeEntries';
import SecondaryMoods from './SecondaryMoods';
import { moodColor } from '../../data/moods';
import { getLocations } from '../../services/apiLocations';
import { deleteEntry, getEntries } from '../../services/apiEntries';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import LocationIcon from '../../ui/LocationIcon';
import toast from 'react-hot-toast';
import { useCurrentUser } from '../../contexts/UserContext';

const moodsColor = moodColor;

function Entry() {
  const { id } = useParams();
  const {
    isPending: isPendingEntries,
    data: entries,
    errorEntries,
  } = useQuery({
    queryKey: ['entries'],
    queryFn: getEntries,
  });
  const navigate = useNavigate();

  const {
    isPending: isPendingLocations,
    data: locations,
    errorLocations,
  } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
  });

  const entry = entries.filter((entry) => +id === entry.id)[0];

  const dateArray = entry.created_at.slice(0, 10).split('-');

  const date = `${dateArray[1]} ${dateArray[2]} ${dateArray[0]}`;

  const entryShorten =
    entry.entry.length < 34 ? entry.entry : entry.entry.slice(0, 20) + '...';

  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: deleteEntry,
    onSuccess: () => {
      toast.success('Entry successfully deleted');
      queryClient.invalidateQueries({
        queryKey: ['entries'],
      });
      navigate('/app/map/entries/');
    },
    onError: (err) => toast.error(err.message),
  });

  const { currentUser } = useCurrentUser();

  if (isPendingEntries || isPendingLocations)
    return (
      <div className="flex h-[90%] w-[90%] flex-col items-center justify-center rounded-xl bg-accent-teal text-base text-white drop-shadow-lg">
        <MoonLoader color={'#fff'} size={125} />
      </div>
    );

  const secondaryMoodList = entry.secondaryMood
    ? entry.secondaryMood.split(' ')
    : [];

  const entryIcon = locations.filter(
    (location) => entry.locationId === location.id,
  )[0].locationType;

  const entryLocationName = locations.filter(
    (location) => entry.locationId === location.id,
  )[0].locationName;

  return (
    <>
      <div className="mt-6 grid h-[7%] w-[90%] grid-cols-[24%_42%_34%] rounded-3xl bg-accent-teal text-white drop-shadow-lg">
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

      <div className="mt-3 h-[3%] w-[90%] rounded-xl bg-accent-teal text-white drop-shadow-lg">
        <div className="  truncate text-center">
          {entryLocationName.split(', ').slice(0, 3).join(', ')}
        </div>
      </div>

      <div className="self-start px-6">
        <SecondaryMoods moods={secondaryMoodList} />
      </div>

      <div className="flex h-[70%] w-[90%] flex-col items-center gap-5 rounded-lg bg-accent-teal drop-shadow-lg">
        <div className="mt-6 h-[82%] w-[90%] rounded-lg bg-white drop-shadow-lg">
          <p className="ml-2 mt-1 text-lg text-periwinkle">{entry.entry}</p>
        </div>

        <div className="flex gap-6 text-xl text-white">
          <button className="flex flex-col items-center justify-center gap-1">
            <div className="text-2xl">
              <FaChevronLeft />
            </div>
            <p>Prev</p>
          </button>
          <button className="flex flex-col items-center justify-center gap-1">
            <div className="text-2xl">
              <FaRegEdit />
            </div>
            <p>Edit</p>
          </button>
          <button
            onClick={() => mutate(entry.id)}
            disabled={isDeleting}
            className="flex  flex-col items-center justify-center gap-1"
          >
            <div className="text-2xl">
              <FaTrash />
            </div>
            <p>Delete</p>
          </button>
          <button className="flex flex-col items-center justify-center gap-1">
            <div className="text-2xl">
              <FaChevronRight />
            </div>
            <p>Next</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Entry;
