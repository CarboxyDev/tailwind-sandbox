import { type NextPage } from "next";
import Head from "next/head";
import Sandbox from "./sandbox";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tailwind Sandbox</title>
      </Head>
      <main>
        <Sandbox />
      </main>
    </>
  );
};

export default Home;
