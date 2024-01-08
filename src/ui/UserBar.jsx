import PuffLoader from 'react-spinners/PuffLoader';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useState } from 'react';
import AvatarModal from './AvatarModal';

function UserBar({ showUser, isPendingLogout, logout }) {
  const [showAvatarOptions, setShowAvatarOptions] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState(() => {
    const avatar = localStorage.getItem('localAvatar')
      ? localStorage.getItem('localAvatar')
      : '';
    return avatar;
  });

  return (
    <div className="button-general absolute right-8 top-4 z-[1000] flex h-16 w-72  justify-around rounded-full bg-accent-teal hover:brightness-100">
      <div className="relative">
        <picture
          onClick={() => setShowAvatarOptions((cur) => !cur)}
          className=" flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-periwinkle"
        >
          <source srcSet={`/${currentAvatar}.webp`} type="image/webp" />
          <img
            className=""
            src={`/${currentAvatar}.png`}
            alt={
              !currentAvatar ? 'Click Me!' : "Pastel doodle of user's avatar"
            }
            type="image/png"
          />
        </picture>
        {showAvatarOptions && (
          <AvatarModal
            setCurrentAvatar={setCurrentAvatar}
            setShowAvatarOptions={setShowAvatarOptions}
          />
        )}
      </div>
      <div className="flex flex-col">
        <p>Hi {showUser[0].toUpperCase() + showUser.slice(1)}.</p>
        <p>How was your day?</p>
      </div>
      <button
        disabled={isPendingLogout}
        onClick={logout}
        className="text-[2.5rem] hover:text-sign-blue"
      >
        {!isPendingLogout ? (
          <RiLogoutCircleRLine />
        ) : (
          <PuffLoader color={'#fff'} size={50} />
        )}
      </button>
    </div>
  );
}

export default UserBar;
