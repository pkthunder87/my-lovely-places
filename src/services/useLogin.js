import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from './apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      navigate('/app/map', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Invalid email and/or password');
    },
  });

  return { login, isPending };
}
