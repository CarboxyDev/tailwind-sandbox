import type { ButtonProps } from "../types/props";
import { cva } from "class-variance-authority";
import { cn } from "../utils/misc";

const buttonVariants = cva(
  "rounded-md bg-primary text-white shadow-md hover:bg-primary-400 active:scale-95",
  {
    variants: {
      variant: {
        default: "",
        outline: "",
      },
      size: {
        xl: "text-lg py-4 px-8",
        lg: "text-lg py-3 px-7",
        md: "text-lg py-2 px-5",
        sm: "text-md py-2 px-3",
        xs: "text-sm py-2 px-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const Button = (props: ButtonProps) => {
  const { size, variant, className } = props;

  return (
    <>
      <button
        className={cn(buttonVariants({ size, variant, className }))}
        {...props}
      />
    </>
  );
};

export default Button;
