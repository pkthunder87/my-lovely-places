import BounceLoader from 'react-spinners/BounceLoader';

function LoaderFullPage() {
  return (
    <div className="flex h-[100dvh] w-[100dvw] items-center justify-center bg-flash-white text-center text-periwinkle ">
      <BounceLoader size={300} color="#13AEAE" />
    </div>
  );
}

export default LoaderFullPage;
