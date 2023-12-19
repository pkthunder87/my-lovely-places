function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex h-[100dvh] w-[100dvw] items-center justify-center bg-flash-white text-center text-periwinkle ">
      <div className="flex h-[40dvh] w-[80dvw] flex-col items-center justify-center gap-4 rounded-xl bg-white shadow-md shadow-periwinkle sm:h-[20dvh]">
        <h1 className="text-3xl sm:text-4xl">Something went wrong 💥</h1>
        <p className="text-2xl text-red-400">{error.message}</p>
        <button
          className="flex  h-10 w-32 items-center  justify-center rounded-3xl bg-periwinkle text-lg font-bold tracking-wide text-white hover:brightness-110"
          onClick={resetErrorBoundary}
        >
          Home
        </button>
      </div>
    </div>
  );
}

export default ErrorFallback;
