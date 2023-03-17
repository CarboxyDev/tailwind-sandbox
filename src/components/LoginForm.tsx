import { GithubIcon, GoogleIcon, TwitterIcon } from "../utils/icons";

const LoginForm = () => {
  return (
    <>
      <div className="box-border min-w-[520px] rounded-2xl px-12 py-9 shadow">
        <div className="flex flex-col">
          <p className="font-medium text-gray-600">Email address</p>
          <input
            type="email"
            className="mt-3 h-10 rounded-lg border border-gray-300 px-2"
          />
        </div>
        <div className="mt-8 flex flex-col">
          <p className="font-medium text-gray-600">Password</p>
          <input
            type="password"
            className="mt-3 h-10 rounded-lg border border-gray-300 px-2"
          />
        </div>
        <div className="mt-6 flex justify-end">
          <span className="text-gray-500">Forgot your password?</span>
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
          <div className="flex h-10 items-center justify-center rounded-lg border border-gray-300">
            <GoogleIcon className="h-7 w-7" />
          </div>
          <div className="flex h-10 items-center justify-center rounded-lg border border-gray-300">
            <GithubIcon className="h-7 w-7" />
          </div>
          <div className="flex h-10 items-center justify-center rounded-lg border border-gray-300">
            <TwitterIcon className="h-7 w-7" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
