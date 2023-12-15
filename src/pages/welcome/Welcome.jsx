import Hero from './Hero';
import Step from './Step';
import Cta from './Cta';
import Footer from './Footer';
import Header from '../../ui/Header';

function Welcome() {
  return (
    <>
      <Header noLogin={false} />
      <main className="grid grid-cols-2">
        <Hero />

        <Step
          ariaLabel="step-1"
          imgAlt="Pastel doodle of women camping under a starry night"
          imgDesk="./travel-desktop.webp"
          imgMobi="./travel-mobile.webp"
          imgOut="./travel-outdated.jpg"
          stepNum={1}
          stepText="Have an Adventure"
          textColor="text-pale-blue"
          bgColor="bg-pale-blue"
        />

        <Step
          ariaLabel="step-2"
          imgAlt="Pastel doodle of phone with GPS marker and women sitting nearby"
          imgDesk="./gps-desktop.webp"
          imgMobi="./gps-mobile.webp"
          imgOut="./gps-outdated.jpg"
          stepNum={2}
          imgZPattern="sm:-order-1 order-1"
          stepText="Mark the Location"
          textColor="text-saira-red"
          bgColor="bg-saira-red"
        />

        <Step
          ariaLabel="step-3"
          imgAlt="Pastel doodle of man with pencil in front of browser window"
          imgDesk="./entry-desktop.webp"
          imgMobi="./entry-mobile.webp"
          imgOut="./entry-outdated.jpg"
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
