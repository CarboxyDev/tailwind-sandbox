import { FillerProps } from "../types/props";

const Filler = (props: FillerProps) => {
  const { height, width } = props;

  return (
    <>
      {height && <div className={`h-[${height}px] w-full`}></div>}
      {width && <div className={`w-[${height}px] h-full`}></div>}
    </>
  );
};

export default Filler;
