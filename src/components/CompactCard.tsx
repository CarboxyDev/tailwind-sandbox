const CompactCard = (props: any) => {
  let { title, text } = props;

  return (
    <>
      <div className="flex flex-col rounded-md border border-gray-200">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default CompactCard;
