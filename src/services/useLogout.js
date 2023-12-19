import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from './apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      console.log(isPending);
      queryClient.removeQueries();
      navigate('/login', { replace: true });
    },
  });

  return { logout, isPending };
}
