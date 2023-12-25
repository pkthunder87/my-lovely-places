import { NavLink } from 'react-router-dom';

function NavApp() {
  return (
    <div className="mb-2 flex gap-4 text-white">
      <NavLink to="entries">
        <button className="button-general w-20 bg-tint-teal">Entries</button>
      </NavLink>
      <p>Entry Form</p>
      <p>Recent Entries</p>
    </div>
  );
}

export default NavApp;
