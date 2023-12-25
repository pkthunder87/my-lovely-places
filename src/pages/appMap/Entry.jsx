import { useParams } from 'react-router-dom';
import fakeEntries from '../../data/fakeEntries';
import { MdFastfood } from 'react-icons/md';

function Entry() {
  const { id } = useParams();
  const entry = fakeEntries.filter((entry) => +id === entry.id)[0];
  console.log(entry);
  const entryShorten = entry.entry_text.slice(0, 30) + '...';

  return (
    <>
      <div className="mt-8 grid h-[7%] w-[90%] grid-cols-[24%_42%_34%] rounded-3xl bg-accent-teal text-white drop-shadow-lg">
        <div className="flex  items-center justify-center ">
          <div className="bg-violet flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full">
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
          <div className="bg-violet rounded-full pl-2 pr-2">
            {entry.primary_mood}
          </div>
        </div>
      </div>
      <div className="flex h-[70%] w-[90%] flex-col items-center  rounded-xl bg-accent-teal drop-shadow-lg">
        Entry
      </div>
    </>
  );
}

export default Entry;
