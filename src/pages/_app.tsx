import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import { cn } from "../utils/misc";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <main className={cn(inter.variable, "font-inter")}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
