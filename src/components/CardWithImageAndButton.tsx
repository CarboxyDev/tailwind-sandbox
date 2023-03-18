const CardWithImageAndButton = (props: any) => {
  const { image, heading, content, buttonText } = props;

  return (
    <>
      <div className="max-w-screen-sm:max-w-xs w-80 self-start rounded-2xl pb-11 shadow lg:w-100">
        <div className="h-50">
          <img
            src={image}
            className="h-full w-full rounded-t-md object-cover"
            alt="card image"
          />
        </div>
        <div className="mt-7 px-5 sm:px-6 md:px-7">
          <div className="h-px w-full bg-gray-200" />
          <div className="mt-8 mb-9">
            <h2 className="text-xl font-semibold text-slate-700">{heading}</h2>
            <p className="mt-4 text-sm text-gray-700">{content}</p>
          </div>
          <div className="h-px w-full bg-gray-200" />
          <div className="mt-6 h-11">
            <button className="flex h-full w-full items-center justify-center rounded-lg bg-primary text-white transition-colors delay-100 ease-in hover:bg-primary-600">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardWithImageAndButton;
