import { useParams } from 'react-router-dom';

import { MdFastfood } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa6';

import fakeEntries from '../../data/fakeEntries';
import SecondaryMoods from './SecondaryMoods';
import { moodColor } from '../../data/moods';

const moodsColor = moodColor;

function Entry() {
  const { id } = useParams();
  const entry = fakeEntries.filter((entry) => +id === entry.id)[0];

  const entryShorten =
    entry.entry_text.length < 34
      ? entry.entry_text
      : entry.entry_text.slice(0, 34) + '...';

  return (
    <>
      <div className="mt-6 grid h-[7%] w-[90%] grid-cols-[24%_42%_34%] rounded-3xl bg-accent-teal text-white drop-shadow-lg">
        <div className="flex  items-center justify-center ">
          <div className="flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-violet">
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
              moodsColor[`${entry.primary_mood}`]
            } pl-2 pr-2`}
          >
            {entry.primary_mood}
          </div>
        </div>
      </div>

      <div className="self-start px-6">
        <SecondaryMoods moods={entry.secondary_moods.flat()} />
      </div>

      <div className="flex h-[74%] w-[90%] flex-col items-center gap-5 rounded-lg bg-accent-teal drop-shadow-lg">
        <div className="mt-6 h-[82%] w-[90%] rounded-lg bg-white drop-shadow-lg">
          <p className="ml-2 mt-1 text-lg text-periwinkle">
            {entry.entry_text}
          </p>
        </div>

        <div className="flex gap-6 text-xl text-white">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="text-2xl">
              <FaChevronLeft />
            </div>
            <p>Prev</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="text-2xl">
              <FaRegEdit />
            </div>
            <p>Edit</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="text-2xl">
              <FaTrash />
            </div>
            <p>Delete</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="text-2xl">
              <FaChevronRight />
            </div>
            <p>Next</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Entry;
