import { BsFillHouseHeartFill } from 'react-icons/bs';

function Welcome() {
  return (
    <div>
      <h1 className="  mt-8 flex gap-8 text-6xl text-periwinkle">
        <BsFillHouseHeartFill />
        My Lovely Places <span>❤</span>
      </h1>
      <img
        src="./cozy-header.png"
        alt="Pastel doodle of women on typing on laptop"
      />
    </div>
  );
}

export default Welcome;
