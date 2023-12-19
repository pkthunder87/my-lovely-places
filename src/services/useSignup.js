import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from './apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        'Account successfully created. \nA verification email was sent.',
      );
      navigate('/app/map');
    },
  });

  return { signup, isPending };
}
