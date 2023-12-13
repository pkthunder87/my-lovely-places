function ButtonSolid({
  children,
  position = 'absolute right-2  sm:right-6 top-1/2 -translate-y-1/2 transform',
}) {
  return (
    <div className={` ${position}`}>
      <button
        className={`flex h-8 w-24 items-center justify-center rounded-3xl bg-tint-teal text-xs tracking-wide text-white hover:brightness-110 sm:h-12 sm:w-56 sm:text-2xl`}
      >
        {children}
      </button>
    </div>
  );
}

export default ButtonSolid;
