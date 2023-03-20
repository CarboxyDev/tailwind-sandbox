import {
  ArrowUpTrayIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import { FeatureItemProps } from "../types/props";

const FeatureItem = (props: FeatureItemProps) => {
  const { heading, content, icon } = props;

  return (
    <>
      <div className="mx-8 my-14 flex flex-row items-center justify-center">
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-300/60">
            {icon}
          </div>
        </div>
        <div className="ml-7">
          <h3 className="text-lg font-semibold text-gray-700">{heading}</h3>
          <p className="mt-2 text-sm text-gray-500">{content}</p>
        </div>
      </div>
    </>
  );
};

const FeatureCard = () => {
  return (
    <>
      <div className="grid max-w-md grid-cols-none grid-rows-3 rounded-2xl border border-gray-200 lg:max-w-none lg:grid-cols-3 lg:grid-rows-none">
        <div className="grid grid-rows-2 border-r border-gray-200">
          <FeatureItem
            heading="Analytics"
            content="Track your payments, and more with our advanced analytics dashboard."
            icon={<ArrowUpTrayIcon className="h-6 w-6 text-primary-700" />}
          />
          <FeatureItem
            heading="Analytics"
            content="Track your payments, and more with our advanced analytics dashboard."
            icon={
              <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-primary-700" />
            }
          />
        </div>

        <div className="grid grid-rows-2 border-r border-gray-200">
          <FeatureItem
            heading="Analytics"
            content="Track your payments, and more with our advanced analytics dashboard."
            icon={<ArrowUpTrayIcon className="h-6 w-6 text-primary-700" />}
          />
          <FeatureItem
            heading="Analytics"
            content="Track your payments, and more with our advanced analytics dashboard."
            icon={
              <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-primary-700" />
            }
          />
        </div>
        <div className="grid grid-rows-2">
          <FeatureItem
            heading="Analytics"
            content="Track your payments, and more with our advanced analytics dashboard."
            icon={<ArrowUpTrayIcon className="h-6 w-6 text-primary-700" />}
          />
          <FeatureItem
            heading="Analytics"
            content="Track your payments, and more with our advanced analytics dashboard."
            icon={
              <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-primary-700" />
            }
          />
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
