import Header from '../../ui/Header';
import Footer from '../welcome/Footer';

function Signup() {
  return (
    <div className=" sm:grid sm:grid-cols-[56%_44%] sm:grid-rows-[7dvh_88dvh] sm:items-center">
      <div className="col-span-2 self-start">
        <Header
          linkToSolid="/welcome"
          solidText="Home"
          textSize="text-lg sm:text-2xl"
        />
      </div>

      <picture className="">
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
          className="mt-20 scale-[1.1] sm:mt-8 sm:scale-[2.2] md:scale-[1.5]"
          src="./hero-outdated.jpg"
          alt="Pastel doodle of women on typing on laptop"
          type="image/jpg"
        />
      </picture>
      <form className="mt-24 flex flex-col items-center gap-8 self-start sm:mt-16">
        <input
          className="input-login h-10 w-[84dvw] rounded-2xl text-lg sm:h-11 sm:w-[40dvw]"
          type="text"
          id="email"
          name="email"
          placeholder="Email Address"
        />
        <input
          className="input-login h-10 w-[84dvw] rounded-2xl text-lg sm:h-11 sm:w-[40dvw]"
          type="text"
          id="confirm_email"
          name="confirm_email"
          placeholder="Confirm Email"
        />
        <input
          className="input-login h-10 w-[84dvw] rounded-2xl text-lg sm:h-11 sm:w-[40dvw]"
          type="text"
          id="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="input-login h-10 w-[84dvw] rounded-2xl text-lg sm:h-11 sm:w-[40dvw]"
          type="text"
          id="confirm_password"
          name="confirm_password"
          placeholder="Confirm Password"
        />
        <button className="button-general h-10 w-[35dvw] bg-tint-teal text-lg sm:h-11 sm:w-[20dvw] sm:text-xl">
          Create Account
        </button>
      </form>
      <Footer
        position="absolute bottom-1 right-2 sm:bottom-2 sm:right-4"
        textSize="text-lg md:text-2xl"
      />
    </div>
  );
}

export default Signup;
