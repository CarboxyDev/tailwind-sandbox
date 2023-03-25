import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const MagicGrid = () => {
  return (
    <>
      <div className="grid-rows-12 grid h-100 w-100 grid-cols-12">
        {[...Array(144)].map((item) => {
          return (
            <motion.div
              key={uuidv4()}
              className="border border-neutral-600 bg-yellow-100"
              whileHover={{
                backgroundColor: "#fef08a",
                transition: { duration: 0, ease: "linear" },
              }}
              exit={{
                backgroundColor: "#fef9c3",
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
