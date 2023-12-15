import { NavLink, useNavigate } from 'react-router-dom';

function ButtonSolid({
  children,
  height,
  width,
  linkTo,
  position = 'absolute right-2  sm:right-6 top-1/2 -translate-y-1/2 transform',
}) {
  const navigate = useNavigate();

  return (
    <div className={` ${position}`}>
      <NavLink to={linkTo}>
        <button
          className={`flex ${width} ${height} items-center justify-center rounded-3xl bg-tint-teal text-xs tracking-wide text-white hover:brightness-110 firefox:text-sm   sm:text-2xl`}
          onClick={navigate({ linkTo })}
        >
          {children}
        </button>
      </NavLink>
    </div>
  );
}

export default ButtonSolid;
