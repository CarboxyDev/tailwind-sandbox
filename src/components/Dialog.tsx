import Button from "./Button";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

// FIXME: Refactor this component to use 4px as the unit for layout and spacing, etc.
// TODO: Polish this component (in the Figma file first)

const Dialog = (props: any) => {
  let { name, price, currency } = props.product;

  return (
    <>
      <div className="box-border flex w-96 flex-col rounded-md bg-[#f8f7f7] px-10 shadow-md">
        <div className="mx-auto">
          <div className="h-10"></div>
          <CheckCircleIcon className="h-36 w-36 text-[#2ECC71]/80" />
        </div>
        <div className="t mx-auto text-center text-lg text-[#5A5A5A]">
          <div className="h-8"></div>
          <p>
            You have successfully purchased{" "}
            <span className="font-bold">{name}</span> for {price} {currency}
          </p>
          <div className="h-14"></div>
        </div>
        <div className="mx-auto">
          <Button>Continue</Button>
          <div className="h-10"></div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
