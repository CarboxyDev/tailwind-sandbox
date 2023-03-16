import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Browse", link: "/browse" },
    { name: "Features", link: "/features" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "About us", link: "#about-us" },
  ];
  return (
    <>
      <div className="flex h-24 flex-row items-center px-4 sm:h-32 sm:px-8 lg:px-28">
        <div className="flex flex-row items-center gap-x-5">
          <img src="/generic-logo-1.png" className="h-12 w-12" alt="logo" />
          <h2 className="text-lg font-semibold text-primary">CharityLake</h2>
        </div>
        <div className="ml-16 hidden list-none flex-row items-center gap-x-9 lg:flex">
          {navItems.map((item) => {
            return (
              <li className="rounded-md px-2 py-1 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-700">
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </div>
        <div className="ml-auto flex flex-row gap-x-8">
          <button className="hidden h-12 w-32 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-white sm:flex">
            Sign up
          </button>
          <Bars3Icon className="h-12 w-12 text-[#545454] lg:hidden" />
        </div>
      </div>
    </>
  );
};

export default Navbar;