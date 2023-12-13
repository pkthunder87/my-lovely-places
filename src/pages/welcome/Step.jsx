function Step({
  imgAlt,
  imgDesk,
  imgMobi,
  imgOut,
  imgZPattern,
  ariaLabel,
  stepNum,
  stepText,
  textColor,
  bgColor,
}) {
  return (
    <section className=" col-span-2 grid grid-cols-2" aria-label={ariaLabel}>
      <div
        className={`relative col-span-2 h-[50dvw] w-full bg-cream text-[2.4rem] leading-[1.3em]  sm:col-span-1 sm:h-[50dvw] sm:w-[50dvw] sm:text-[4.5rem] ${textColor}`}
      >
        <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2  transform text-center sm:top-1/2 sm:text-left">
          <p>
            Step <span className="text-5xl sm:text-[6rem]">{stepNum}</span>
          </p>
          <p className="w-[100dvw] sm:w-full">{stepText}</p>
        </div>
      </div>

      <picture
        className={` h-[84dvw] w-[100dvw] sm:h-[50dvw] sm:w-[50dvw] ${bgColor} ${imgZPattern}`}
      >
        <source media="(max-width:441px)" srcSet={imgMobi} type="image/webp" />
        <source media="(min-width:442px)" srcSet={imgDesk} type="image/webp" />
        <img src={imgOut} alt={imgAlt} type="image/jpg" />
      </picture>
    </section>
  );
}

export default Step;
