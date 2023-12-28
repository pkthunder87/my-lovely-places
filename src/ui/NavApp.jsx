import { NavLink } from 'react-router-dom';

function NavApp() {
  return (
    <div className="absolute bottom-1 left-8 mb-2 flex gap-4 text-xl text-white">
      <NavLink to="entries">
        <button className="button-general w-20 bg-tint-teal">Entries</button>
      </NavLink>
      <p>Locations</p>
      <p>Recent Entries</p>
    </div>
  );
}

export default NavApp;
