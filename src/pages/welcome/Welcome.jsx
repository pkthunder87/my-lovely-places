import ButtonSolid from '../../ui/ButtonSolid';
import ButtonOutline from '../../ui/ButtonOutline';
import Hero from './Hero';
import Step from './Step';
import Cta from './Cta';
import Footer from './Footer';

function Welcome() {
  return (
    <>
      <header className=" relative h-10 w-full bg-pale-blue sm:h-16">
        <nav>
          <ButtonOutline>Login</ButtonOutline>
          <ButtonSolid>Create Account</ButtonSolid>
        </nav>
      </header>
      <main className="grid grid-cols-2">
        <Hero />

        <Step
          ariaLabel="step-1"
          imgAlt="Pastel doodle of women camping under a starry night"
          imgDesk="./travel-desktop.webp"
          stepNum={1}
          stepText="Have an Adventure"
          textColor="text-pale-blue"
          bgColor="bg-pale-blue"
        />

        <Step
          ariaLabel="step-2"
          imgAlt="Pastel doodle of phone with GPS marker and women sitting nearby"
          imgDesk="./gps-desktop.webp"
          stepNum={2}
          imgZPattern="-order-1"
          stepText="Mark the Location"
          textColor="text-saira-red"
          bgColor="bg-saira-red"
        />

        <Step
          ariaLabel="step-3"
          imgAlt="Pastel doodle of man with pencil in front of browser window"
          imgDesk="./entry-desktop.webp"
          stepNum={3}
          stepText="Create an Entry"
          textColor="text-periwinkle"
          bgColor="bg-periwinkle"
        />

        <Cta />
      </main>

      <Footer />
    </>
  );
}

export default Welcome;
