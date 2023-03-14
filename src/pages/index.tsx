import { type NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";

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
        <div className="pt-12 pl-12">
          <Button>Continue</Button>
        </div>
      </main>
    </>
  );
};

export default Home;
