import { Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/FakeAuthContext';

import NavApp from '../../ui/NavApp';
import Map from './Map';

function AppMap() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);

  return (
    <div className="h-[100dvh] w-[100-dvw] sm:grid sm:grid-cols-[35%_65%] md:grid-cols-[27%_73%]">
      <div className="flex flex-col items-center justify-between bg-tint-teal">
        <Outlet />
        <NavApp />
      </div>
      <Map />
    </div>
  );
}

export default AppMap;
