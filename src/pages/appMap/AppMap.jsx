import { NavLink, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/FakeAuthContext';
import Header from '../../ui/Header';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useState } from 'react';

function AppMap() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate('/');
  }
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);

  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);

  return (
    <div className="h-[100dvh] w-[100-dvw] sm:grid sm:grid-cols-[35%_65%] md:grid-cols-[27%_73%]">
      <div className="bg-tint-teal">Left Side</div>
      <div className="h-full w-full bg-white">
        <MapContainer
          center={mapPosition}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={mapPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default AppMap;
