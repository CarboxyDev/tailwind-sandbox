import Button from "./Button";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Dialog = (props: any) => {
  let { name, price, currency } = props.product;

  return (
    <>
      <div className="box-border flex w-96 flex-col rounded-md bg-[#f1f1f1] px-10 shadow-md">
        <div className="mx-auto">
          <div className="h-10"></div>
          <CheckCircleIcon className="h-36 w-36 text-[#2ECC71]/80" />
        </div>
        <p className="t mx-auto text-center text-lg text-[#5A5A5A]">
          <div className="h-8"></div>
          You have successfully purchased{" "}
          <span className="font-bold">{name}</span> for {price} {currency}
          <div className="h-14"></div>
        </p>
        <div className="mx-auto">
          <Button>Continue</Button>
          <div className="h-10"></div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
