import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { BellIcon } from "@heroicons/react/24/outline";
import HamburgerDropdown from "./HamburgerDropdown";

const Navbar2 = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Browse", link: "/browse" },
    { name: "Features", link: "/features" },
    { name: "Testimonials", link: "/#testimonials" },
  ];
  return (
    <>
      <div className="flex h-24 flex-row items-center sm:h-32">
        <div className="hidden flex-row items-center gap-x-3 lg:flex">
          <Link href="/">
            <Image
              src="/generic-logo-1.png"
              width={48}
              height={48}
              className="h-12 w-12"
              alt="logo"
            />
          </Link>
          <h2 className="text-lg font-semibold text-slate-700">sandbox</h2>
        </div>
        <div className="ml-16 hidden list-none flex-row items-center gap-x-9 lg:flex">
          {navItems.map((item) => {
            return (
              <li
                key={uuidv4()}
                className="rounded-md px-2 py-1 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-700"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </div>
        <div className="lg:hidden">
          <HamburgerDropdown navItems={navItems} />
        </div>
        <div className="ml-auto flex flex-row gap-x-8">
          <div className="flex flex-row items-center gap-x-6">
            <BellIcon className="h-8 w-8 text-gray-400" />
            <Link href="/">
              <Image
                src="/generic-man-1.png"
                width={48}
                height={48}
                className=""
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
