import { useNavigate } from 'react-router-dom';
import { useUser } from '../services/useUser';
import PuffLoader from 'react-spinners/PuffLoader';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const { isPending, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate('/login');
    },
    [isAuthenticated, isPending, navigate],
  );

  if (isPending)
    return (
      <div className="flex h-[100dvh] items-center justify-center bg-flash-white">
        <PuffLoader color={'#13AEAE'} size={400} />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
