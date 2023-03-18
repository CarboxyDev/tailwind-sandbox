const CardWithImageAndButton = (props: any) => {
  const { image, heading, content, buttonText } = props;

  return (
    <>
      <div className="w-80 max-w-xs self-start rounded-2xl px-8 pt-8 pb-10 shadow lg:w-100">
        <div className="mb-8 h-40">
          <img
            src={image}
            className="h-40 w-full rounded-2xl object-cover"
            alt="card image"
          />
        </div>
        <div className="h-px w-full bg-gray-200" />
        <div className="mt-12 mb-8">
          <h2 className="text-xl font-semibold text-slate-700">{heading}</h2>
          <p className="mt-4 text-sm text-gray-600">{content}</p>
        </div>
        <div className="h-px w-full bg-gray-200" />
        <div className="mt-7 h-11">
          <button className="flex h-full w-full items-center justify-center rounded-lg bg-primary text-white transition-colors delay-100 ease-in hover:bg-primary-600">
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default CardWithImageAndButton;
