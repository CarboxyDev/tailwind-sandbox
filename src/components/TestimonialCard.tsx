const TestimonialCard = (props: any) => {
  let { comment, author } = props;
  let { name, title, image } = author;

  return (
    <>
      {/* self-start makes the TestimonalCards' heights independent of each other when together */}
      <div className="h-auto w-96 self-start rounded-2xl px-8 pt-7 shadow hover:shadow-md hover:shadow-primary-200 hover:transition-shadow hover:delay-200 hover:duration-200">
        <p className="break-words pb-8 text-lg leading-[32px] text-[#374151]">
          {comment}
        </p>
        <div className="h-px w-full bg-gray-200" />
        <div className="flex flex-row pt-7 pb-7">
          <div className="flex flex-col">
            <span className="pb-1 font-medium text-[#545454]">{name}</span>
            <span className="pb-1 text-sm text-[#A4A8AF]">{title}</span>
          </div>
          <div className="ml-auto">
            <img src={"/" + image} className="h-12 w-12 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
