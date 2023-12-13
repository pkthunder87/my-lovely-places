import ButtonSolid from '../../ui/ButtonSolid';

function Cta() {
  return (
    <section className="relative col-span-2 w-full" aria-label="call-to-action">
      <img
        className="relative h-[calc(100dvh-4rem)] w-full"
        src="./cta-desktop.webp"
        alt="Pastel doodle of a smiling walking women with a happy"
      />
      <ButtonSolid
        height="h-16"
        position="absolute top-[42%] -translate-y-1/2 left-[48%] -translate-x-1/2 transform"
      >
        Create Account
      </ButtonSolid>
      <p className="absolute left-[48%] top-[48%] -translate-x-1/2 -translate-y-1/2 transform text-xl font-bold tracking-wider text-sunshine">
        It&apos;s <span className="text-3xl">100</span>% Free
      </p>
    </section>
  );
}

export default Cta;
