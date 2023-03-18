const CardWithImage = (props: any) => {
  const { image, heading, content } = props;

  return (
    <>
      <div className="w-72 self-start rounded-2xl px-8 pt-8 pb-12 shadow sm:w-80 lg:w-100">
        <div className="mb-8 h-40">
          <img
            src={image}
            className="h-40 w-full rounded-2xl object-cover"
            alt="card image"
          />
        </div>
        <div className="h-px w-full bg-gray-200" />
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-slate-700">{heading}</h2>
          <p className="mt-4 text-sm text-gray-600">{content}</p>
        </div>
      </div>
    </>
  );
};

export default CardWithImage;
