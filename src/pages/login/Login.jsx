import { useState } from 'react';

import ButtonSolid from '../../ui/ButtonSolid';
import Header from '../../ui/Header';
import Footer from '../welcome/Footer';
import { useLogin } from '../../services/useLogin';
import PuffLoader from 'react-spinners/PuffLoader';

function Login() {
  const [email, setEmail] = useState('paul@example.com');
  const [password, setPassword] = useState('pass1234');

  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email && !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      },
    );
  }

  // useEffect(
  //   function () {
  //     if (isAuthenticated) navigate('/app/map', { replace: true });
  //   },
  //   [isAuthenticated, navigate],
  // );

  return (
    <div>
      <div className="relative overflow-x-hidden">
        <Header
          linkToSolid="/welcome"
          solidText="Home"
          textSize="firefox:text-lg sm:text-2xl"
        />
        <form
          className="absolute left-[69.5%] top-[63%]
      z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-3  firefox:left-[69%] firefox:top-[62%]
       sm:left-[71.5%]  sm:top-[47%] sm:gap-4 firefox:sm:left-[71.5%] firefox:sm:mt-2 md:left-[71.5%] md:top-[43%]"
          onSubmit={handleSubmit}
        >
          <input
            className="input-login w-36 firefox:w-52 sm:w-56 firefox:sm:w-56 md:w-80"
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isPending}
          />
          <input
            className="input-login  w-36 firefox:w-52 sm:w-56 firefox:sm:w-56 md:w-80"
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isPending}
          />
          <div className="flex flex-col gap-2 firefox:mt-4 md:mt-8 md:gap-4">
            <button className="button-general h-6 w-16 bg-tint-teal text-xs font-bold firefox:h-7 firefox:w-20 firefox:text-sm sm:h-9 sm:w-28 sm:text-base md:h-10 md:w-36 md:text-xl">
              {!isPending ? 'Login' : <PuffLoader size={35} color={'#FFF'} />}
            </button>
            <ButtonSolid
              height="h-6 firefox:h-7 sm:h-9 md:h-10"
              width="firefox:w-20 w-16 sm:w-28 md:w-36"
              textSize="firefox:text-sm text-xs sm:text-base md:text-xl"
              bgColor="bg-periwinkle"
              fontWeight="font-bold"
              linkTo="/signup"
              position=""
            >
              Signup
            </ButtonSolid>
          </div>
        </form>
        <picture className="relative">
          <source
            media="(max-width:441px)"
            srcSet="./hero-mobile.webp"
            type="image/webp"
          />
          <source
            media="(min-width:442px)"
            srcSet="./hero-desktop.webp"
            type="image/webp"
          />
          <img
            className="z-[-1] mt-[calc(100dvh/4)] scale-125 transform sm:mt-12 sm:translate-x-[10%] sm:scale-[1.2]"
            src="./hero-outdated.jpg"
            alt="Pastel doodle of women on typing on laptop"
            type="image/jpg"
          />
        </picture>
      </div>
      <Footer position="" textSize="text-sm firefox:text-lg" />
    </div>
  );
}

export default Login;
