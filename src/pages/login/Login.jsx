import ButtonSolid from '../../ui/ButtonSolid';
import Header from '../../ui/Header';

function Login() {
  return (
    <div className="relative">
      <Header linkToSolid="/welcome" solidText="Home" />
      <form className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-4 sm:left-[72%] sm:top-[47%] md:left-[71.5%] md:top-[43%]">
        <input
          className="ml-2 cursor-pointer rounded-2xl bg-white pl-4 text-lg text-heavy-blue focus:outline-none focus:ring focus:ring-tint-teal focus:ring-offset-[-1px]
          sm:h-10 sm:w-56
          md:h-12
          md:w-80
          md:text-2xl"
          type="text"
          id="email"
          name="email"
          placeholder="Email Address"
        />
        <input
          className="ml-2 cursor-pointer rounded-2xl bg-white pl-4 text-lg text-heavy-blue focus:outline-none focus:ring focus:ring-tint-teal focus:ring-offset-[-1px] sm:h-10 sm:w-56
          md:h-12
          md:w-80
          md:text-2xl"
          type="text"
          id="email"
          name="email"
          placeholder="Password"
        />
        <div className="flex flex-col gap-2 md:mt-8 md:gap-4">
          <ButtonSolid
            height="h-8 sm:h-9 md:h-10"
            width="w-24 sm:w-28 md:w-36"
            textSize="text-lg"
            fontWeight="font-bold"
            position=""
          >
            Login
          </ButtonSolid>
          <ButtonSolid
            height="h-8 sm:h-9 md:h-10"
            width="w-24 sm:w-28 md:w-36"
            textSize="text-lg"
            bgColor="bg-periwinkle"
            fontWeight="font-bold"
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
