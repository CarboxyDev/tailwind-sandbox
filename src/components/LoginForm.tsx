import Link from "next/link";
import { GithubIcon, GoogleIcon, TwitterIcon } from "../utils/icons";

const LoginForm = () => {
  return (
    <>
      <div className="box-border min-w-[360px] rounded-2xl  px-8 py-9 sm:min-w-[440px] sm:px-12 sm:shadow xl:min-w-[480px]">
        <div className="flex flex-col">
          <p className="font-medium text-gray-600">Email address</p>
          <input
            type="email"
            className="mt-3 h-10 rounded-lg border border-gray-300 px-2 text-gray-700 focus:outline-primary"
            required
            autoComplete="on"
          />
        </div>
        <div className="mt-8 flex flex-col">
          <p className="font-medium text-gray-600">Password</p>
          <input
            type="password"
            className="mt-3 h-10 rounded-lg border border-gray-300 px-2 text-gray-700 focus:outline-primary"
            required
          />
        </div>
        <div className="mt-6 flex justify-end">
          <Link href="/" className="text-sm text-gray-500 hover:underline">
            Forgot your password?
          </Link>
        </div>
        <div className="mt-8 h-11 w-full">
          <button className="flex h-full w-full items-center justify-center rounded-lg bg-primary text-white transition-colors delay-100 ease-in hover:bg-primary-600">
            Sign in
          </button>
        </div>
        <div className="mt-8 flex flex-row items-center justify-center">
          <div className="mr-auto h-px flex-1 bg-gray-200"></div>
          <div className="px-3 text-sm text-gray-400">or continue with</div>
          <div className="ml-auto h-px flex-1 bg-gray-200"></div>
        </div>
        <div className="mt-9 grid grid-cols-3 gap-x-5 text-gray-500">
          <div className="flex h-10 items-center justify-center rounded-lg border border-gray-300 transition delay-100 ease-out hover:border-primary-200 hover:text-primary-400 hover:shadow hover:shadow-primary-300">
            <GoogleIcon className="h-7 w-7" />
          </div>
          <div className="flex h-10 items-center justify-center rounded-lg border border-gray-300 transition delay-100 ease-out hover:border-primary-200 hover:text-primary-400 hover:shadow hover:shadow-primary-300">
            <GithubIcon className="h-7 w-7" />
          </div>
          <div className="flex h-10 items-center justify-center rounded-lg border border-gray-300 transition delay-100 ease-out hover:border-primary-200 hover:text-primary-400 hover:shadow hover:shadow-primary-300">
            <TwitterIcon className="h-7 w-7" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
