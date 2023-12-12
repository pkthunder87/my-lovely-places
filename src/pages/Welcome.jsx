import { BsFillHouseHeartFill } from 'react-icons/bs';

function Welcome() {
  return (
    <>
      <header className="bg-pale-blue h-16 w-full">
        <nav></nav>
      </header>
      <main className="grid grid-cols-2">
        <section className="col-span-2 w-full " aria-label="hero">
          <div className="absolute left-20 top-16 mt-8 flex flex-col items-center justify-center gap-2 text-periwinkle">
            <div className="text-[10rem]">
              <BsFillHouseHeartFill />
            </div>
            <h1 className="w-44 text-center text-3xl font-semibold">
              My Lovely Places <span>❤</span>
            </h1>
          </div>
          <img
            className="relative h-[calc(100dvh-4rem)] w-full"
            src="./cozy-header.png"
            alt="Pastel doodle of women on typing on laptop"
          />
        </section>

        <section className=" col-span-2 grid grid-cols-2" aria-label="step-1">
          <div className="  text-pale-blue relative  bg-cream text-[5rem] leading-[1.2em] ">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ">
              <p>
                Step <span className="text-[6rem]">1</span>
              </p>
              <p>Have an Adventure</p>
            </div>
          </div>
          <img
            className=" bg-pale-blue h-[50dvw] w-[50dvw]"
            src="./travel.png"
            alt="Pastel doodle of women on typing on laptop"
          />
        </section>
        <section aria-label="step-2"></section>
        <section aria-label="step-3"></section>

        <section aria-label="call-to-action"></section>
      </main>

      <footer></footer>
    </>
  );
}

export default Welcome;
