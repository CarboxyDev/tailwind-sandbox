import type { ButtonProps } from "../types/props";

// FIXME: Refactor this component to use 4px as the unit for layout and spacing, etc.
// NOTE: This component is kind of deprecated and useless.

const Button = (props: ButtonProps) => {
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
