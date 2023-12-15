import ButtonSolid from '../../ui/ButtonSolid';

function Cta() {
  return (
    <section className="relative col-span-2 w-full" aria-label="call-to-action">
      <picture className="relative h-[calc(100dvh-4rem)] w-full">
        <source
          media="(max-width:441px)"
          srcSet="./cta-mobile.webp"
          type="image/webp"
        />
        <source
          media="(min-width:442px)"
          srcSet="./cta-desktop.webp"
          type="image/webp"
        />
        <img
          src="./cta-outdated.jpg"
          alt="Pastel doodle of a smiling walking women with a happy"
          type="image/jpg"
        />
      </picture>
      <ButtonSolid
        height="h-8 sm:h-14"
        width="w-32 firefox:w-36 sm:w-56"
        position="absolute top-[42%] -translate-y-1/2 left-[48%] -translate-x-1/2 transform"
      >
        Create Account
      </ButtonSolid>
      <p className="firefox:text-sm absolute left-[48%] top-[48%] -translate-x-1/2 -translate-y-1/2 transform text-xs font-semibold tracking-wider text-sunshine sm:text-xl sm:font-bold">
        It&apos;s{' '}
        <span className="firefox:text-lg text-base sm:text-3xl">100</span>% Free
      </p>
    </section>
  );
}

export default Cta;
