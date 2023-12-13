function ButtonOutline({ children, height, width, textColor, bgColor }) {
  {
    return (
      <div className="absolute  left-2 top-1/2 -translate-y-1/2 transform sm:left-6">
        <button className="flex h-8 w-24 items-center justify-center rounded-3xl border bg-pale-blue text-sm tracking-wide text-white hover:brightness-110 sm:h-12 sm:w-56 sm:text-2xl">
          {children}
        </button>
      </div>
    );
  }
}

export default ButtonOutline;
