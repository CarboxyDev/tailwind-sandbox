import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const MagicGrid = () => {
  return (
    <>
      <div className="grid-rows-12 grid h-80 w-80 grid-cols-12 p-px sm:h-150 sm:w-150">
        {[...Array(144)].map((item) => {
          return (
            <motion.div
              key={uuidv4()}
              className="-m-px border border-neutral-200 bg-yellow-50"
              whileHover={{
                backgroundColor: "#fef08a",
                borderColor: "#fef08a",
                transition: { duration: 0, ease: "linear" },
              }}
              exit={{
                backgroundColor: "#fef9c3",
                borderColor: "#e5e5e5",
                transition: { duration: 2 },
              }}
              transition={{ duration: 0.5, ease: "linear" }}
            ></motion.div>
          );
        })}
      </div>
    </>
  );
};

export default MagicGrid;
