import { motion } from "framer-motion";
import type { TestimonialCardProps } from "../types/props";
import Image from "next/image";

const TestimonialCard = (props: TestimonialCardProps) => {
  const { comment, author } = props;
  const { name, title, image } = author;

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.25, ease: "backInOut" },
      }}
    >
      {/* self-start makes the TestimonalCards' heights independent of each other when together */}
      <div className="max-w-screen-sm:max-w-xs h-auto w-84 self-start rounded-2xl px-8 py-7 shadow hover:shadow-md hover:shadow-primary-200 hover:transition-shadow hover:delay-200 hover:duration-200 lg:w-90 xl:w-96">
        <p className="mb-8 break-words text-lg leading-8 text-gray-800">
          {comment}
        </p>
        <div className="h-px w-full bg-gray-200" />
        <div className="mt-7 flex flex-row">
          <div className="flex flex-col">
            <span className="mb-1 font-medium text-gray-600">{name}</span>
            <span className="mb-1 text-sm text-gray-400">{title}</span>
          </div>
          <div className="ml-auto">
            <Image
              src={"/" + image}
              width={48}
              height={48}
              alt="author-image"
              className="h-12 w-12 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
