import { NavLink } from 'react-router-dom';

function ButtonSolid({
  children,
  height,
  width,
  linkTo,
  position = 'absolute right-2  sm:right-6 top-1/2 -translate-y-1/2 transform',
}) {
  return (
    <div className={` ${position}`}>
      <NavLink to={linkTo}>
        <button
          className={`flex ${width} ${height} firefox:text-sm items-center justify-center rounded-3xl bg-tint-teal text-xs tracking-wide text-white hover:brightness-110   sm:text-2xl`}
        >
          {children}
        </button>
      </NavLink>
    </div>
  );
}

export default ButtonSolid;
