import { NavLink } from 'react-router-dom';

function ButtonSolid({
  children,
  height,
  width,
  linkTo,
  bgColor = 'bg-tint-teal',
  textSize = 'text-xs firefox:text-sm sm:text-2xl',
  fontWeight = 'font-normal',
  position = 'absolute right-2  sm:right-6 top-1/2 -translate-y-1/2 transform',
}) {
  return (
    <div className={` ${position}`}>
      <NavLink to={linkTo}>
        <button
          className={`button-general ${textSize} ${width} ${height} ${fontWeight} ${bgColor}`}
        >
          {children}
        </button>
      </NavLink>
    </div>
  );
}

export default ButtonSolid;
