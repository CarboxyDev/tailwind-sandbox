import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <>
      <div className="flex h-32 flex-row items-center px-4 sm:px-8 lg:px-28">
        <div className="flex flex-row items-center gap-x-5">
          <img src="/generic-logo-1.png" className="h-12 w-12" alt="logo" />
          <h2 className="text-lg font-semibold text-primary">CharityLake</h2>
        </div>
        <div className="ml-16 hidden list-none flex-row items-center gap-x-9 lg:flex">
          <li className="text-sm text-slate-600">Browse</li>
          <li className="text-sm text-slate-600">Features</li>
          <li className="text-sm text-slate-600">Testimonials</li>
          <li className="text-sm text-slate-600">About us</li>
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
