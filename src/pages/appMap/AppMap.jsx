import { NavLink, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/FakeAuthContext';
import Header from '../../ui/Header';
import { getCabins } from '../../services/apiCabins';
import { useQuery } from '@tanstack/react-query';

function AppMap() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate('/');
  }

  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);

  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ['cabin'],
    queryFn: getCabins,
  });

  return (
    <div>
      <Header
        noLogin={false}
        linkToSolid="/welcome"
        solidText="Home"
        outlineText="Logout"
      />
      <div className="flex flex-col gap-4">
        <button
          onClick={handleClick}
          className="button-general w-32 bg-periwinkle"
        >
          Logout
        </button>

        <NavLink to="/app/entries">
          <button className="button-general w-32 bg-periwinkle">
            AppEntries
          </button>
        </NavLink>

        <NavLink to="/app/filter">
          <button className="button-general w-32 bg-periwinkle">
            AppFilter
          </button>
        </NavLink>

        <NavLink to="/app/form">
          <button className="button-general w-32 bg-periwinkle">AppForm</button>
        </NavLink>
      </div>
    </div>
  );
}

export default AppMap;
