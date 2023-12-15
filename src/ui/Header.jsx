import ButtonSolid from './ButtonSolid';
import ButtonOutline from './ButtonOutline';
import { NavLink } from 'react-router-dom';

function Header({ noLogin = true, noCreate = false }) {
  return (
    <header className=" relative h-10 w-full bg-pale-blue sm:h-16">
      <nav>
        {noLogin || (
          <NavLink to="/login">
            <ButtonOutline>Login</ButtonOutline>
          </NavLink>
        )}
        {noCreate || (
          <NavLink to="/signup">
            <ButtonSolid height="h-8 sm:h-12" width="w-28 sm:w-56">
              Create Account
            </ButtonSolid>
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
