import { HeaderSectionProps } from "../types/props";

const HeaderSection = (props: HeaderSectionProps) => {
  const { variant } = props;

  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-lg bg-gray-800 py-24">
        <div className="mx-2 flex max-w-md flex-col items-center justify-center md:max-w-2xl">
          <h2 className="text-3xl font-bold text-white md:text-6xl">
            Some heading
          </h2>
          <p className="text-md mt-6 break-words text-center leading-8 text-gray-300 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            molestias minus, inventore autem animi voluptatem reprehenderit
            debitis praesentium qui, nemo quasi. Reiciendis quos quam, molestias
            eveniet debitis dolores atque quisquam.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
