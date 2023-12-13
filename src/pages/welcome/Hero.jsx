import { BsFillHouseHeartFill } from 'react-icons/bs';

function Hero() {
  return (
    <section className="col-span-2 w-full " aria-label="hero">
      <div className="absolute left-20 top-24 mt-8 flex flex-col items-center justify-center gap-2 text-periwinkle">
        <div className="text-[10rem]">
          <BsFillHouseHeartFill />
        </div>
        <h1 className="w-44 text-center text-3xl font-semibold">
          My Lovely Places <span>❤</span>
        </h1>
      </div>
      <img
        className="relative h-[calc(100dvh-4rem)] w-full"
        src="./hero-desktop.webp"
        alt="Pastel doodle of women on typing on laptop"
      />
    </section>
  );
}

export default Hero;
