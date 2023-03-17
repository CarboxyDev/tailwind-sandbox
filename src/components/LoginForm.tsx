const LoginForm = () => {
  return (
    <>
      <div className="box-border min-w-[560px] rounded-2xl px-14 py-9 shadow">
        <div className="flex flex-col">
          <p className="font-semibold text-gray-600">Email Address</p>
          <input
            type="email"
            className="mt-3 h-11 rounded-lg border border-gray-300 px-2"
          />
        </div>
        <div className="mt-8 flex flex-col">
          <p className="font-semibold text-gray-600">Password</p>
          <input
            type="password"
            className="mt-3 h-11 rounded-lg border border-gray-300 px-2"
          />
        </div>
        <div className="mt-6 flex justify-end">
          <span className="text-gray-500">Forgot your password?</span>
        </div>
        <div className="mt-10 h-11 w-full">
          <button className="flex h-full w-full items-center justify-center rounded-lg bg-primary text-white transition-colors delay-100 ease-in hover:bg-primary-600">
            Sign in
          </button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default LoginForm;
