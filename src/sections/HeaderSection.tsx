import { HeaderSectionProps } from "../types/props";
import { clsx } from "clsx";
import { motion } from "framer-motion";

const HeaderSectionContent = (props: HeaderSectionProps) => {
  const { variant, heading, content } = props;
  return (
    <div className={props.className}>
      <div className="mx-2 flex max-w-md flex-col items-center justify-center md:max-w-2xl">
        <h2 className="text-3xl font-bold md:text-6xl">{heading}</h2>
        <p
          className={clsx(
            "text-md mt-6 break-words text-center leading-8 md:text-lg",
            variant === "dark" && "text-gray-300",
            variant === "light" && "text-gray-500"
          )}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

const HeaderSection = (props: HeaderSectionProps) => {
  const { variant, heading, content, animate } = props;
  const variantStyles = clsx(
    "flex flex-col items-center justify-center rounded-lg py-24",
    variant === "dark" && "bg-gray-800 text-white",
    variant === "light" && "bg-white text-gray-800"
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={variantStyles}
      >
        <HeaderSectionContent {...props} />
      </motion.div>
    );
  } else {
    return <HeaderSectionContent className={variantStyles} {...props} />;
  }
};

export default HeaderSection;
