const LoginFormChiron = () => {
  return (
    <>
      <div className="w-120">
        <form action="/api/form" method="post" className="flex flex-col">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginFormChiron;
