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
        className={` relative bg-cream  text-[5rem] leading-[1.2em] ${textColor}`}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ">
          <p>
            Step <span className="text-[6rem]">{stepNum}</span>
          </p>
          <p>{stepText}</p>
        </div>
      </div>
      <img
        className={` h-[50dvw] w-[50dvw] ${bgColor} ${imgZPattern}`}
        src={imgDesk}
        alt={imgAlt}
      />
    </section>
  );
}

export default Step;
