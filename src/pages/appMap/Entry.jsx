import { useParams, useSearchParams } from 'react-router-dom';

function Entry() {
  const { id } = useParams();

  const [searchParams] = useSearchParams();

  const mapLat = searchParams?.get('lat') ? searchParams.get('lat') : 0;
  const mapLng = searchParams?.get('lng') ? searchParams.get('lng') : 0;

  return (
    <div>
      <h2>{id}</h2>
      <p>
        Position: {mapLat}, {mapLng}
      </p>
    </div>
  );
}

export default Entry;
