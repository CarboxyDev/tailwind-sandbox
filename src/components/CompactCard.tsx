// TODO: Make this component responsive

const CompactCard = (props: any) => {
  let { title, text, icon } = props;

  return (
    <>
      <div className="inline-flex w-auto flex-col rounded-md border border-gray-200 px-7 py-6">
        <div className="pb-9 text-gray-900">{icon}</div>
        <div>
          <h2 className="pb-2 text-sm font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-[#6D7480]">{text}</p>
        </div>
      </div>
    </>
  );
};

export default CompactCard;
