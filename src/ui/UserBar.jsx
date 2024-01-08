import PuffLoader from 'react-spinners/PuffLoader';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useState } from 'react';
import AvatarModal from './AvatarModal';

function UserBar({ showUser, isPendingLogout, logout }) {
  const [showAvatarOptions, setShowAvatarOptions] = useState(true);
  const [currentAvatar, setCurrentAvatar] = useState('');

  return (
    <div className="button-general absolute right-8 top-4 z-[1000] flex h-16 w-72  justify-around rounded-full bg-accent-teal hover:brightness-100">
      <div className="relative">
        <picture
          onClick={() => console.log('CLICKED AVATAR!')}
          className=" flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white"
        >
          <source srcSet="/user-avatar-1.webp" type="image/webp" />
          <img
            className=""
            src="/user-avatar-1.png"
            alt="Pastel doodle of user's avatar"
            type="image/png"
          />
        </picture>
        {showAvatarOptions && (
          <AvatarModal setCurrentAvatar={setCurrentAvatar} />
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
