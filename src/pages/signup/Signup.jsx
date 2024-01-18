import { useForm } from 'react-hook-form';

import Header from '../../ui/Header';
import Footer from '../welcome/Footer';
import { useSignup } from '../../services/useSignup';

function Signup() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const { signup, isPending } = useSignup();

  function onSubmit({ username, email, password }) {
    signup(
      { username, email, password },
      {
        onSettled: reset,
      },
    );
  }

  return (
    <div className=" overflow-hidden sm:grid sm:grid-cols-[56%_44%] sm:grid-rows-[7dvh_88dvh] sm:items-center">
      <div className="col-span-2 self-start">
        <Header
          linkToSolid="/welcome"
          solidText="Home"
          textSize="text-lg sm:text-2xl"
        />
      </div>

      <picture className="">
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
          className=" relative -z-10 mt-12 scale-[1.1] firefox:mt-20 sm:mt-8 sm:scale-[2.2] md:scale-[1.5]"
          src="./hero-outdated.jpg"
          alt="Pastel doodle of women on typing on laptop"
          type="image/jpg"
        />
      </picture>

      <form
        className=" mt-16 flex flex-col items-center gap-8 self-start firefox:mt-24 sm:mt-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="input-login h-10 w-[84dvw] rounded-2xl text-lg sm:h-11 sm:w-[40dvw]"
          disabled={isPending}
          type="text"
          id="username"
          name="username"
          autoComplete="username"
          placeholder="Username"
          {...register('username', {
            required: 'Field input required',
          })}
        />
        {errors?.username?.message && (
          <small className=" -mt-6 mb-4 h-2  text-center text-base  font-normal text-red-400">
            {errors?.username.message}
          </small>
        )}

        <input
          className="input-login h-10 w-[84dvw] rounded-2xl text-lg sm:h-11 sm:w-[40dvw]"
          disabled={isPending}
          type="text"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="Email Address"
          {...register('email', {
            required: 'Field input required',
            validate: {
              // Email validation from https://catalins.tech/react-forms-with-react-hook-form/
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                'Valid email required',
            },
          })}
        />
        {errors?.email?.message && (
          <small className=" -mt-6 mb-4 h-2  text-center text-base  font-normal text-red-400">
            {errors?.email.message}
          </small>
        )}

        <input
          className="input-login h-10 w-[84dvw] rounded-2xl text-lg sm:h-11 sm:w-[40dvw]"
          disabled={isPending}
          type="password"
          id="password"
          name="password"
          autoComplete="new-password"
          placeholder="Password"
          {...register('password', {
            required: 'Field input required',
            minLength: {
              value: 8,
              message: 'Password must be a minimum of 8 characters',
            },
          })}
        />
        {errors?.password?.message && (
          <small className=" -mt-6 mb-4 h-2  text-center text-base  font-normal text-red-400">
            {errors?.password.message}
          </small>
        )}

        <input
          className="input-login h-10 w-[84dvw] rounded-2xl text-lg sm:h-11 sm:w-[40dvw]"
          disabled={isPending}
          type="password"
          id="confirm_password"
          name="confirm_password"
          autoComplete="new-password"
          placeholder="Confirm Password"
          {...register('confirmPassword', {
            required: 'Field input required',
            validate: (value) =>
              value === getValues().password || 'Must have matching passwords',
          })}
        />
        {errors?.confirmPassword?.message && (
          <small className=" -mt-6 mb-4 h-2  text-center text-base  font-normal text-red-400">
            {errors?.confirmPassword.message}
          </small>
        )}

        <button
          className="button-general h-10 w-[35dvw] bg-tint-teal text-lg sm:h-11 sm:w-[20dvw] sm:text-xl"
          disabled={isPending}
        >
          Create Account
        </button>
      </form>
      <Footer
        position="absolute 
        bottom-1 firefox:bottom-1 firefox:right-2 sm:bottom-2 sm:right-4"
        textSize="text-sm firefox:text-lg sm:text-xl"
      />
    </div>
  );
}

export default Signup;
