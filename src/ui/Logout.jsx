import { IoIosLogOut } from 'react-icons/io';
import { useLogout } from '../services/useLogout';
import PuffLoader from 'react-spinners/PuffLoader';

function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <button
      disabled={isPending}
      onClick={logout}
      className="ml-4 text-6xl text-tint-teal hover:brightness-125"
    >
      {!isPending ? (
        <IoIosLogOut />
      ) : (
        <PuffLoader size={45} color={'#13AEAE'} />
      )}
    </button>
  );
}

export default Logout;
