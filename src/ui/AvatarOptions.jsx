function AvatarOptions({ avatarImg, setCurrentAvatar, setShowAvatarOptions }) {
  function onClickAvatarImg() {
    setCurrentAvatar(`${avatarImg}`);
    localStorage.setItem('localAvatar', `${avatarImg}`);
    setShowAvatarOptions(false);
  }

  return (
    <div className=" flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-periwinkle">
      <picture
        onClick={onClickAvatarImg}
        className=" flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white"
      >
        <source srcSet={`/${avatarImg}.webp`} type="image/webp" />
        <img
          className=" bg-periwinkle"
          src={`/${avatarImg}.png`}
          alt="Pastel doodle of user's avatar"
          type="image/png"
        />
      </picture>
    </div>
  );
}

export default AvatarOptions;
