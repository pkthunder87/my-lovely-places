import AvatarOptions from './AvatarOptions';

const avatarImages = [
  'user-avatar-1',
  'user-avatar-2',
  'user-avatar-3',
  'user-avatar-4',
  'user-avatar-5',
  'user-avatar-6',
  'user-avatar-7',
  'user-avatar-8',
];

function AvatarModal({ setCurrentAvatar, setShowAvatarOptions }) {
  return (
    <div
      onClick={() => setShowAvatarOptions(false)}
      className="absolute  -ml-2 mt-4 flex w-72 rounded-xl bg-white p-4 "
    >
      <div
        className=" absolute -top-4 left-3 -z-10 h-0 w-0 border-b-[24px] border-l-[14px]
      border-r-[14px] border-b-white
      border-l-transparent
      border-r-transparent
      bg-transparent
"
      ></div>
      <ul className="flex flex-wrap justify-center gap-4">
        {avatarImages.map((avatarImg) => {
          return (
            <li key={avatarImg}>
              <AvatarOptions
                avatarImg={avatarImg}
                setCurrentAvatar={setCurrentAvatar}
                setShowAvatarOptions={setShowAvatarOptions}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AvatarModal;
