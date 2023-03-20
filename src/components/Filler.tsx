import { FillerProps } from "../types/props";

// NOTE: Not working as of now due to issues with tailwind not generating utility classes for dynamic values

const Filler = (props: FillerProps) => {
  const { height, width } = props;
  const cnHeight = "h-[" + height + "px] w-full";
  const cnWidth = "w-[" + width + "px] h-full";

  /* Note: Tailwind is weird and dynamically setting like className={`h-[${height}px] w-full`} 
  using template literal causes Tailwind to not generate the styles for the element. Weird.
  */

  return (
    <>
      {height && <div className={cnHeight}></div>}
      {width && <div className={cnWidth}></div>}
    </>
  );
};

export default Filler;
