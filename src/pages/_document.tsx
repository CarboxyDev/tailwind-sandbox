import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html className="font-sans">
      <Head>
        <meta
          name="description"
          content="Tailwind sandbox for experiments using tailwind."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className="font-inter">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
