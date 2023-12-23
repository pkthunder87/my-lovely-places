import { useEffect, useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { MdFastfood } from 'react-icons/md';
import { useNavigate, useSearchParams } from 'react-router-dom';

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

function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const [searchParams] = useSearchParams();

  const mapLat = searchParams.get('lat');
  const mapLng = searchParams.get('lng');

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng],
  );

  return (
    <div className="h-full w-full bg-white">
      <MapContainer
        center={mapPosition}
        zoom={6}
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
                <p className=" text-[16px] font-bold text-white">Location</p>
              </div>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
