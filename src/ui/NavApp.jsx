import { NavLink } from 'react-router-dom';
import EntryForm from '../pages/appMap/EntryForm';

function NavApp() {
  return (
    <div className="flex gap-4 text-white">
      <NavLink to="entries">
        <button className="button-general w-24 bg-tint-teal">Entries</button>
      </NavLink>
      <p>Filters</p>
      <p>Recent</p>
      <p>Settings</p>
    </div>
  );
}

export default NavApp;
