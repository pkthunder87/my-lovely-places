import { BsFillHouseHeartFill } from 'react-icons/bs';

function Hero() {
  return (
    <section className="col-span-2 w-full " aria-label="hero">
      <div className="absolute left-4 top-14 flex flex-col items-center justify-center text-periwinkle sm:left-20 sm:top-24 sm:mt-8 sm:gap-2">
        <div className="firefox:text-[4rem] text-[3rem] sm:text-[10rem]">
          <BsFillHouseHeartFill />
        </div>
        <h1 className="firefox:text-base w-20 text-center text-sm font-semibold sm:w-44 sm:text-3xl">
          My Lovely Places <span>❤</span>
        </h1>
      </div>
      <picture>
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
          src="./hero-outdated.jpg"
          alt="Pastel doodle of women on typing on laptop"
          type="image/jpg"
        />
      </picture>
    </section>
  );
}

export default Hero;
