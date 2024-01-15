import { NavLink } from 'react-router-dom';

function ButtonOutline({
  children,
  height,
  width,
  linkTo,
}) {
  {
    return (
      <div className="absolute  left-2 top-1/2 -translate-y-1/2 transform sm:left-6">
        <NavLink to={linkTo}>
          <button
            className={`flex ${height} ${width} firefox:text-base items-center justify-center rounded-3xl border bg-pale-blue text-sm tracking-wide text-white hover:brightness-110  sm:text-2xl`}
          >
            {children}
          </button>
        </NavLink>
      </div>
    );
  }
}

export default ButtonOutline;
