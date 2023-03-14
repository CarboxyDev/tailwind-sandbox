import { type NextPage } from "next";
import Head from "next/head";
import Sandbox from "./sandbox";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tailwind Sandbox</title>
        <meta
          name="description"
          content="Tailwind sandbox for experiments using tailwind."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Sandbox />
      </main>
    </>
  );
};

export default Home;
