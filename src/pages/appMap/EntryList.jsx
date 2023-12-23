import fakeEntries from '../../data/fakeEntries';
import EntryItem from './EntryItem';

function EntryList() {
  return (
    <ul className="list-none">
      {fakeEntries.map((entry) => (
        <EntryItem entry={entry} key={entry.id} />
      ))}
    </ul>
  );
}

export default EntryList;
