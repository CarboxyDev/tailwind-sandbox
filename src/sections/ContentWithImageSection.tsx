import { clsx } from "clsx";
import { motion } from "framer-motion";
import { ContentWithImageSection } from "../types/props";

//TODO: Needs improvement

const ContentWithImageSection = (props: ContentWithImageSection) => {
  const { image, heading, content, reverse } = props;

  return (
    <>
      <div className="grid grid-cols-none grid-rows-2 gap-x-16 gap-y-12 pt-32 lg:grid-cols-2 lg:grid-rows-none">
        <div className="mx-3 mt-6 flex flex-col sm:mx-0">
          <div className="mx-auto sm:max-w-lg lg:max-w-none">
            <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl xl:text-[44px]">
              {heading}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{content}</p>
          </div>
        </div>
        <div
          className={clsx(
            "order-first",
            !reverse && "lg:order-last",
            reverse && "lg:order-first"
          )}
        >
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <img
              src={image}
              alt="content-image"
              className={clsx(
                "mx-auto w-[456px] object-cover lg:mx-0 lg:w-[342px] xl:w-[456px]",
                !reverse && "lg:ml-auto",
                reverse && "lg:mr-auto"
              )}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContentWithImageSection;
