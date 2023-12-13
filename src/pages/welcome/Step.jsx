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
        className={` relative bg-cream text-[1.7rem]  leading-[1.3em] sm:text-[5rem] ${textColor}`}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ">
          <p>
            Step <span className="text-3xl sm:text-[6rem]">{stepNum}</span>
          </p>
          <p>{stepText}</p>
        </div>
      </div>

      <picture className={` h-[50dvw] w-[50dvw] ${bgColor} ${imgZPattern}`}>
        <source media="(max-width:441px)" srcSet={imgMobi} type="image/webp" />
        <source media="(min-width:442px)" srcSet={imgDesk} type="image/webp" />
        <img src={imgOut} alt={imgAlt} type="image/jpg" />
      </picture>
    </section>
  );
}

export default Step;
