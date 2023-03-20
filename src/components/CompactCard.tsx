import { CompactCardProps } from "../types/props";

// TODO: Make this component responsive

const CompactCard = (props: CompactCardProps) => {
  let { title, text, icon } = props;

  return (
    <>
      <div className="inline-flex w-auto flex-col rounded-md border border-gray-200 px-7 py-6">
        <div className="mb-10 text-gray-900">{icon}</div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-600">{text}</p>
        </div>
      </div>
    </>
  );
};

export default CompactCard;
