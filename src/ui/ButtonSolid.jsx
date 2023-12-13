function ButtonSolid({
  children,
  height = 'h-12',
  position = 'absolute  right-6 top-1/2 -translate-y-1/2 transform',
}) {
  return (
    <div className={` ${position}`}>
      <button
        className={`flex ${height} w-56 items-center justify-center rounded-3xl bg-tint-teal text-2xl tracking-wide text-white hover:brightness-110`}
      >
        {children}
      </button>
    </div>
  );
}

export default ButtonSolid;
