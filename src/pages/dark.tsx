import { type NextPage } from "next";
import Head from "next/head";

const Dark: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tailwind Dark Sandbox</title>
      </Head>
      <main className="min-h-screen bg-gray-900">
        <div className="flex flex-col pl-20 pt-20">
          <div className="h-100 w-100 rounded-2xl bg-gray-800 shadow-md"></div>
          <div className="mt-10 h-100 w-100 rounded-2xl bg-slate-800 shadow-md"></div>
        </div>
      </main>
    </>
  );
};

export default Dark;
