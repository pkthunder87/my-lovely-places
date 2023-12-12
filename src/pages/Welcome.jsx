import { BsFillHouseHeartFill } from 'react-icons/bs';

function Welcome() {
  return (
    <>
      <header className="bg-pale-blue h-8 w-full">
        <nav></nav>
      </header>
      <main className="grid grid-cols-2">
        <section className="col-span-2 w-full" aria-label="hero">
          <h1 className="  absolute mt-8 flex gap-8 text-6xl text-periwinkle">
            <BsFillHouseHeartFill />
            My Lovely Places <span>❤</span>
          </h1>
          <img
            className="relative h-[calc(100dvh-2rem)] w-full"
            src="./cozy-header.png"
            alt="Pastel doodle of women on typing on laptop"
          />
        </section>

        <section aria-label="step-1"></section>
        <section aria-label="step-2"></section>
        <section aria-label="step-3"></section>

        <section aria-label="call-to-action"></section>
      </main>

      <footer></footer>
    </>
  );
}

export default Welcome;
