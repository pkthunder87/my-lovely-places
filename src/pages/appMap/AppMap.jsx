import { NavLink, useNavigate } from 'react-router-dom';
import { MdFastfood } from 'react-icons/md';

import { useAuth } from '../../contexts/FakeAuthContext';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useState } from 'react';

const cities = [
  {
    cityName: 'Lisbon',
    country: 'Portugal',
    emoji: '🇵🇹',
    date: '2027-10-31T15:59:59.138Z',
    notes: 'My favorite city so far!',
    position: {
      lat: 38.727881642324164,
      lng: -9.140900099907554,
    },
    id: 73930385,
  },
  {
    cityName: 'Madrid',
    country: 'Spain',
    emoji: '🇪🇸',
    date: '2027-07-15T08:22:53.976Z',
    notes: '',
    position: {
      lat: 40.46635901755316,
      lng: -3.7133789062500004,
    },
    id: 17806751,
  },
  {
    cityName: 'Berlin',
    country: 'Germany',
    emoji: '🇩🇪',
    date: '2027-02-12T09:24:11.863Z',
    notes: 'Amazing 😃',
    position: {
      lat: 52.53586782505711,
      lng: 13.376933665713324,
    },
    id: 98443197,
  },
];

function AppMap() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate('/');
  }
  const [mapPosition, setMapPosition] = useState([
    40.46635901755316, -3.7133789062500004,
  ]);

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
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          {cities.map((city) => (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={city.id}
            >
              <Popup>
                <div className="-ml-2 mr-4 flex items-center justify-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sign-blue">
                    <div className="text-2xl">
                      <MdFastfood />
                    </div>
                  </div>
                  <p className=" text-[16px] font-bold text-tint-teal">
                    Location
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default AppMap;
