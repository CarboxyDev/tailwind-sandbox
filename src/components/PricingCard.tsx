import { CheckIcon } from "@heroicons/react/24/solid";
import type { PricingCardProps } from "../types/props";
import { v4 as uuidv4 } from "uuid";
import { cn } from "../utils/misc";

type PricingListItemType = {
  text: string;
};

const PricingListItem = (props: PricingListItemType) => {
  const { text } = props;

  return (
    <>
      <li className="list-none">
        <div className="flex flex-row gap-x-3 pb-3">
          <CheckIcon className="h-5 w-5 text-[#545454]" />
          <span className="text-sm text-gray-500">{text}</span>
        </div>
      </li>
    </>
  );
};

const PricingCard = (props: PricingCardProps) => {
  const { plan, button } = props;
  const { type, name, price, benefits } = plan;
  const { buttonText, buttonType } = button;

  return (
    <>
      <div className="max-w-screen-sm:max-w-xs md:w-82 box-border flex h-auto w-80 flex-col rounded-2xl px-7 py-7 shadow-md">
        <div className="flex h-7 w-fit items-center justify-center rounded-3xl border border-gray-200 px-4 py-2 text-xs font-semibold uppercase">
          {type}
        </div>
        <div className="pb-10 pt-6">
          <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>
          <h3 className="pt-2 text-xl font-medium text-gray-500">{price}</h3>
        </div>
        <div className="h-px w-full bg-gray-200" />
        <div className="pb-7 pt-9">
          {benefits.map((b: string) => {
            return <PricingListItem key={uuidv4()} text={b} />;
          })}
        </div>
        <div className="h-px w-full bg-gray-200" />
        <div className="pt-7">
          <button
            className={cn(
              "flex h-10 w-full min-w-[232px] items-center justify-center rounded-lg text-sm font-semibold text-white",
              buttonType == "primary" && "bg-primary hover:bg-primary-600",
              buttonType == "secondary" && "hover:bg-[#5836E7] bg-[#6D4DF5]",
              buttonType == "tertiary" && "bg-secondary hover:bg-secondary-700"
            )}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
