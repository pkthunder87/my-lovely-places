import { useQuery } from '@tanstack/react-query';
import { getEntries } from '../services/apiEntries';
import MoonLoader from 'react-spinners/MoonLoader';

function EntriesTable() {
  const { isPending } = useQuery({
    queryKey: ['entries'],
    queryFn: getEntries,
  });

  if (isPending) return <MoonLoader />;

  return <div>Table</div>;
}

export default EntriesTable;
