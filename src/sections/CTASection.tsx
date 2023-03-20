import clsx from "clsx";
import { CTASectionProps } from "../types/props";

const CTASection = (props: CTASectionProps) => {
  const { heading, buttonText, backgroundImage } = props;

  return (
    <>
      <div
        className={clsx(
          "flex flex-col items-center justify-center rounded-2xl py-24",
          backgroundImage
        )}
      >
        <div className="mx-3 flex flex-col items-center justify-center">
          <h2 className="text-center text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <div className="mt-12 w-50 md:w-60">
            <button className="text-md w-full rounded-lg bg-white py-4 font-semibold text-[#387aff] hover:bg-slate-200">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTASection;
