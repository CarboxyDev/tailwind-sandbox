import { ReactPropTypes } from "react";

const Button = (props: any) => {
  const children = props.children;
  return (
    <>
      <button className="rounded-md bg-primary py-2 px-6 text-lg text-white shadow-md hover:bg-primary-600">
        {children}
      </button>
    </>
  );
};

export default Button;
