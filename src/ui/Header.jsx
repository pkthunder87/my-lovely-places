import ButtonSolid from './ButtonSolid';
import ButtonOutline from './ButtonOutline';

function Header({
  noLogin = true,
  noCreate = false,
  outlineText = 'Login',
  solidText = 'Create Account',
  linkToOutline = '/login',
  linkToSolid = '/signup',
}) {
  return (
    <header className=" relative h-10 w-full bg-pale-blue sm:h-16">
      <nav>
        {noLogin || (
          <ButtonOutline
            height="h-8 sm:h-12"
            width="w-24 firefox:w-28 sm:w-56"
            linkTo={linkToOutline}
          >
            {outlineText}
          </ButtonOutline>
        )}
        {noCreate || (
          <ButtonSolid
            height="h-8 sm:h-12"
            width="w-28 firefox:w-32 sm:w-56"
            linkTo={linkToSolid}
          >
            {solidText}
          </ButtonSolid>
        )}
      </nav>
    </header>
  );
}

export default Header;
