import { CheckIcon } from "@heroicons/react/24/solid";

const PricingListItem = (props: any) => {
  return (
    <>
      <li className="list-none">
        <div className="flex flex-row gap-x-3">
          <CheckIcon className="h-5 w-5 text-[#545454]" />
          <span className="text-sm text-gray-500">Faster downloads</span>
        </div>
      </li>
    </>
  );
};

const PricingCard = (props: any) => {
  return (
    <>
      <div className="box-border flex h-auto w-72 flex-col rounded-2xl px-7 py-7 shadow-md">
        <div className="flex h-7 w-16 items-center justify-center rounded-3xl border border-gray-200 text-xs font-semibold">
          BASIC
        </div>
        <div className="pt-6 pb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            Professional ✨
          </h2>
          <h3 className="pt-2 text-xl font-medium text-gray-500">$9.99</h3>
        </div>
        <div className="h-px w-full bg-gray-200" />
        <div className="pt-9 pb-7">
          <PricingListItem />
        </div>
        <div className="h-px w-full bg-gray-200" />
        <div className="pt-7">
          <button className="flex h-10 w-full min-w-[232px] items-center justify-center rounded-lg bg-primary text-sm font-semibold text-white hover:bg-primary-600">
            Subscribe monthly
          </button>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
