import {
  ArrowUpTrayIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { FeatureCardProps, FeatureItemProps } from "../types/props";

const FeatureItem = (props: FeatureItemProps) => {
  const { heading, content, icon, variant } = props;

  return (
    <>
      <div className="mx-8 my-6 flex flex-row items-center justify-center lg:my-14">
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-300/60">
            {icon}
          </div>
        </div>
        <div className="ml-7">
          <h3
            className={clsx(
              "text-lg font-semibold",
              variant === "light" && "text-gray-700",
              variant === "dark" && "text-gray-100"
            )}
          >
            {heading}
          </h3>
          <p
            className={clsx(
              "mt-2 text-sm",
              variant === "light" && "text-gray-500",
              variant === "dark" && "text-gray-400"
            )}
          >
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

const FeatureCard = (props: FeatureCardProps) => {
  const { variant } = props;
  return (
    <>
      <div className="flex justify-center">
        <div
          className={clsx(
            "grid max-w-md grid-cols-none grid-rows-3 rounded-2xl lg:max-w-none lg:grid-cols-3 lg:grid-rows-none",
            variant === "light" && "border border-gray-200 bg-white",
            variant === "dark" && "bg-gray-800"
          )}
        >
          <div
            className={clsx(
              "grid grid-rows-2 border-b lg:border-r lg:border-b-0",
              variant === "light" && "border-gray-200",
              variant === "dark" && "border-gray-700"
            )}
          >
            <FeatureItem
              heading="Analytics"
              content="Track your payments, and more with our advanced analytics dashboard."
              icon={<ArrowUpTrayIcon className="h-6 w-6 text-primary-700" />}
              {...props}
            />
            <FeatureItem
              heading="Analytics"
              content="Track your payments, and more with our advanced analytics dashboard."
              icon={
                <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-primary-700" />
              }
              {...props}
            />
          </div>

          <div
            className={clsx(
              "grid grid-rows-2 border-b lg:border-r lg:border-b-0",
              variant === "light" && "border-gray-200",
              variant === "dark" && "border-gray-700"
            )}
          >
            <FeatureItem
              heading="Analytics"
              content="Track your payments, and more with our advanced analytics dashboard."
              icon={<ArrowUpTrayIcon className="h-6 w-6 text-primary-700" />}
              {...props}
            />
            <FeatureItem
              heading="Analytics"
              content="Track your payments, and more with our advanced analytics dashboard."
              icon={
                <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-primary-700" />
              }
              {...props}
            />
          </div>
          <div className="grid grid-rows-2">
            <FeatureItem
              heading="Analytics"
              content="Track your payments, and more with our advanced analytics dashboard."
              icon={<ArrowUpTrayIcon className="h-6 w-6 text-primary-700" />}
              {...props}
            />
            <FeatureItem
              heading="Analytics"
              content="Track your payments, and more with our advanced analytics dashboard."
              icon={
                <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-primary-700" />
              }
              {...props}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
