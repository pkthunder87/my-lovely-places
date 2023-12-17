import ButtonSolid from '../../ui/ButtonSolid';
import Header from '../../ui/Header';

function Login() {
  return (
    <div className="relative">
      <Header linkToSolid="/welcome" solidText="Home" />
      <form
        className="absolute 
      left-[66.5%] top-[66%] z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-2 firefox:left-[66%] firefox:top-[63%] sm:left-[72%] sm:top-[47%] sm:gap-4 md:left-[71.5%] md:top-[43%]"
      >
        <input
          className="input-login"
          type="text"
          id="email"
          name="email"
          placeholder="Email Address"
        />
        <input
          className="input-login"
          type="text"
          id="password"
          name="password"
          placeholder="Password"
        />
        <div className="flex flex-col gap-2 md:mt-8 md:gap-4">
          <button className="button-general h-6 w-14 bg-tint-teal text-xs font-bold firefox:h-7 firefox:w-20 firefox:text-sm sm:h-9 sm:w-28 sm:text-base md:h-10 md:w-36 md:text-xl">
            Login
          </button>
          <ButtonSolid
            height="h-6 firefox:h-7 sm:h-9 md:h-10"
            width="firefox:w-20 w-14 sm:w-28 md:w-36"
            textSize="firefox:text-sm text-xs sm:text-base md:text-xl"
            bgColor="bg-periwinkle"
            fontWeight="font-bold"
            linkTo="/signup"
            position=""
          >
            Signup
          </ButtonSolid>
        </div>
      </form>
      <picture className="relative">
        <source
          media="(max-width:441px)"
          srcSet="./hero-mobile.webp"
          type="image/webp"
        />
        <source
          media="(min-width:442px)"
          srcSet="./hero-desktop.webp"
          type="image/webp"
        />
        <img
          className="z-[-1] mt-[calc(100dvh/4)] transform sm:mt-12 sm:translate-x-[10%] sm:scale-[1.2]"
          src="./hero-outdated.jpg"
          alt="Pastel doodle of women on typing on laptop"
          type="image/jpg"
        />
      </picture>
    </div>
  );
}

export default Login;
