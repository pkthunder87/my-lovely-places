import Header from '../ui/Header';
import Footer from './welcome/Footer';

function PageNotFound() {
  return (
    <div className="relative  sm:block">
      <Header
        noLogin={false}
        outlineText="&larr; Back"
        solidText="Home"
        linkToOutline={-1}
        linkToSolid="/welcome"
      />
      <picture className="relative">
        <source
          media="(max-width:441px)"
          srcSet="/not-found-mobile.webp"
          type="image/webp"
        />
        <source
          media="(min-width:442px)"
          srcSet="/not-found-desktop.webp"
          type="image/webp"
        />
        <img
          className="mt-[calc(100dvh/3)] scale-150 sm:mt-12 sm:scale-100"
          src="/not-found-outdated.jpg"
          alt="Pastel doodle of a man and women with magnifying glasses"
          type="image/jpg"
        />
      </picture>
      <h1 className="absolute left-[49%] top-[60%] -translate-x-1/2 -translate-y-1/2 transform text-xl font-bold text-periwinkle firefox:top-[66%] firefox:text-2xl sm:top-[40%] sm:text-4xl firefox:sm:top-[40%]   lg:text-4xl xl:text-5xl">
        Page not Found
      </h1>
      <Footer />
    </div>
  );
}

export default PageNotFound;
