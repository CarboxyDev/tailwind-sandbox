//import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

import { ArrowSmallRightIcon } from "../utils/icons";

// NOTE: This is a section and not a component so it'll probably have very little modularity

const HeroSection = () => {
  return (
    <>
      <div className="grid grid-rows-2 gap-x-8 gap-y-6 px-4 pt-32 sm:px-8 lg:grid-cols-2 lg:px-28">
        <div className="mx-3 mt-6 flex flex-col sm:mx-0">
          <div className="mx-auto max-w-lg">
            <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl xl:text-5xl">
              This is a great headline in two lines
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This will be some secondary text which will convey a lengthy yet
              brief message and assure the visitor of what the product's pros
              are as well as its qualities.
            </p>
            <div className="mt-15 flex flex-row">
              <button className="text-md rounded-lg bg-primary px-7 py-4 font-semibold text-white shadow hover:bg-primary-400">
                Get started
              </button>
              <button className="text-md ml-8 flex flex-row items-center font-semibold text-gray-700 hover:text-primary">
                Learn more <ArrowSmallRightIcon className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="order-first lg:order-last">
          <div className="">
            <img
              src="/generic-hero-image-1.png"
              alt="hero-image"
              className="mx-auto w-[456px] lg:ml-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
