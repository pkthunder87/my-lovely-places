import Header from '../ui/Header';
import Footer from './welcome/Footer';

function PageNotFound() {
  return (
    <div>
      <Header solidText="Home" linkToSolid="/welcome" />
      <picture className="relative">
        <source
          media="(max-width:441px)"
          srcSet="./not-found-mobile.webp"
          type="image/webp"
        />
        <source
          media="(min-width:442px)"
          srcSet="./not-found-desktop.webp"
          type="image/webp"
        />
        <img
          className="mt-12"
          src="./not-found-outdated.jpg"
          alt="Pastel doodle of a man and women with magnifying glasses"
          type="image/jpg"
        />
        <h1 className="absolute left-[49%] top-[30%] -translate-x-1/2 -translate-y-1/2 transform font-bold text-periwinkle lg:text-4xl xl:text-5xl">
          Page not Found
        </h1>
      </picture>
      <Footer />
    </div>
  );
}

export default PageNotFound;
