import { MdFastfood } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import fakeEntries from '../../data/fakeEntries';
import { moods, moodColor } from '../../data/moods';

const moodsColor = moodColor;

function EntryItem({ entry }) {
  const { id, date, location, user, position } = entry;

  const entryId = fakeEntries.filter((entry) => +id === entry.id)[0];

  const entryShorten =
    entryId.entry_text.length < 34
      ? entryId.entry_text
      : entryId.entry_text.slice(0, 20) + '...';

  return (
    <li className="">
      <NavLink
        className="mt-4 flex h-14 w-full rounded-2xl bg-accent-teal "
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <div className="mt-[2px] grid h-[7%] w-full grid-cols-[24%_42%_34%] rounded-3xl bg-transparent text-white drop-shadow-lg">
          <div className="flex  items-center justify-center ">
            <div
              className={`flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full ${
                moodsColor[`${entry.primary_mood}`]
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
                moodsColor[`${entry.primary_mood}`]
              } pl-2 pr-2`}
            >
              {entry.primary_mood}
            </div>
          </div>
        </div>
      </NavLink>
    </li>
  );
}

export default EntryItem;
