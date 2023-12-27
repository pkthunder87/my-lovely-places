import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MdFastfood } from 'react-icons/md';

import { useGeolocation } from '../../hooks/useGeolocation';
import { useUrlPosition } from '../../hooks/useUrlPosition';
import { useQuery } from '@tanstack/react-query';
import { getEntries } from '../../services/apiEntries';
import { getLocations } from '../../services/apiLocations';
import MoonLoader from 'react-spinners/MoonLoader';

const BASE_URL =
  'https://{s}-tiles.locationiq.com/v3/streets/r/{z}/{x}/{y}.png?key=';

const locationIqKey = import.meta.env.VITE_LOCATION_IQ_KEY;

function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const navigate = useNavigate();

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const [mapLat, mapLng] = useUrlPosition();

  const {
    isPending: isPendingEntries,
    data: entries,
    errorEntries,
  } = useQuery({
    queryKey: ['entries'],
    queryFn: getEntries,
  });

  const {
    isPending: isPendingLocations,
    data: locations,
    errorLocations,
  } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
  });

  useEffect(
    function () {
      if (mapLat && mapLng) {
        setMapPosition([mapLat, mapLng]);
      }
    },
    [mapLat, mapLng],
  );

  useEffect(function () {
    getPosition();
  }, []);

  useEffect(
    function () {
      if (geolocationPosition) {
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
        navigate(
          `form?lat=${geolocationPosition.lat}&lng=${geolocationPosition.lng}`,
        );
      }
    },
    [geolocationPosition],
  );

  if (isPendingEntries || isPendingLocations)
    return (
      <div className="bg-seamap-blue flex h-[100%] w-[100%] items-center justify-center ">
        <MoonLoader color={'#fff'} size={125} />
      </div>
    );

  return (
    <div className="relative h-full w-full bg-white">
      {
        <button
          className="button-general absolute bottom-8 z-[1000] h-10 w-56 translate-x-[125%] transform bg-accent-teal"
          onClick={getPosition}
        >
          {isLoadingPosition ? 'Loading...' : 'Move to current location'}
        </button>
      }
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className=" h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://locationiq.com/?ref=maps" target="_blank">© LocationIQ</a> contributors'
          url={`${BASE_URL}${locationIqKey}`}
        />
        {locations.map((location) => (
          <Marker
            position={[
              location.coords.split(', ')[0],
              location.coords.split(', ')[1],
            ]}
            key={location.id}
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
        <DetectClick position={mapPosition} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);

  return null;
}

function DetectClick({ position }) {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });

  return (
    <Marker position={position}>
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
  );
}

export default Map;
