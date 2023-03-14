import { ReactPropTypes } from "react";

const Button = (props: any) => {
  const children = props.children;
  return (
    <>
      <button>{children}</button>
    </>
  );
};

export default Button;
