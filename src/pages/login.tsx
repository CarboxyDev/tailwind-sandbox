import { type NextPage } from "next";
import Head from "next/head";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <main>
        <div className="grid h-screen grid-cols-2">
          <div className="bg-black"></div>
          <div></div>
        </div>
      </main>
    </>
  );
};

export default Login;
