import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/FakeAuthContext';
import Header from '../../ui/Header';

function AppMap() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate('/');
  }

  return (
    <div>
      <Header
        noLogin={false}
        linkToSolid="/welcome"
        solidText="Home"
        outlineText="Logout"
      />
      <button
        onClick={handleClick}
        className="button-general w-32 bg-periwinkle"
      >
        Logout
      </button>
    </div>
  );
}

export default AppMap;
