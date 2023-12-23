import { MdFastfood } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function EntryItem({ entry }) {
  const { id, date, location, user, position } = entry;

  return (
    <li className="">
      <NavLink
        className="bg-accent-teal mt-4 flex h-14 w-72 items-center justify-evenly rounded-2xl "
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sign-blue text-2xl">
          <MdFastfood />
        </div>

        <p className=" text-[16px] font-bold text-white">{id}</p>

        <p className=" text-[16px] font-bold text-white">{user}</p>
      </NavLink>
    </li>
  );
}

export default EntryItem;
