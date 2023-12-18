import { useNavigate } from 'react-router-dom';
import { useUser } from '../services/useUser';
import MoonLoader from 'react-spinners/MoonLoader';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading)
    return (
      <div className="flex h-[100dvh] items-center justify-center bg-flash-white">
        <MoonLoader color={'#13AEAE'} size={100} />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
