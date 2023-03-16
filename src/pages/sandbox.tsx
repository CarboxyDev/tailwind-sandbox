import { NextPage } from "next";
import Button from "../components/Button";
import CompactCard from "../components/CompactCard";
import Dialog from "../components/Dialog";
import {
  BoltIcon,
  LockClosedIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import PricingCard from "../components/PricingCard";
import TestimonialCard from "../components/TestimonialCard";

const Sandbox: NextPage = () => {
  return (
    <>
      <div className="px-12 pt-12">
        <div className="pt-24"></div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 xl:grid-cols-3 ">
          <TestimonialCard
            comment="This product is an amazing invention. I'm impressed with how fast the
          download and upload speeds are. I'm looking forward to having a great
          time using this product"
            author={{
              name: "Jamie Brooks",
              title: "Lead Developer at CharityLake",
              image: "generic-man-1.png",
            }}
          />
          <TestimonialCard
            comment="I am impressed with the product. I'm glad I picked this company over countless others. Thank you so much!"
            author={{
              name: "Arthur Miller",
              title: "CEO at Porridge Design Studio",
              image: "generic-man-1.png",
            }}
          />
          <TestimonialCard
            comment="An amazing product. Would highly recommend it."
            author={{
              name: "James E. Price",
              title: "CEO at FundStation",
              image: "generic-man-1.png",
            }}
          />
        </div>
        <div className="pt-80 pb-80"></div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <PricingCard
            plan={{
              type: "basic",
              name: "Standard",
              price: "$9.99",
            }}
            benefits={[
              "Faster downloads",
              "Comprehensive file analytics",
              "Priority mail support",
              "Custom domain & API",
              "Access to VIP lounge",
            ]}
            buttonText="Subscribe monthly"
            buttonType="primary"
          />
          <PricingCard
            plan={{
              type: "intermediate",
              name: "Professional",
              price: "$15.99",
            }}
            benefits={[
              "Ultra fast file transfers",
              "One click file analytics",
              "Priority mail and call support",
              "Custom domain & API",
              "Access to VIP lounge",
            ]}
            buttonText="Subscribe monthly"
            buttonType="primary"
          />
          <PricingCard
            plan={{
              type: "MOST FAMOUS",
              name: "Premium ✨",
              price: "$25.99",
            }}
            benefits={[
              "Almost instant file transfers",
              "Fifteen different analytical tools",
              "Priority mail and call support",
              "Unlimited custom domains & API",
              "Access to Premium lounge",
            ]}
            buttonText="Subscribe monthly"
            buttonType="secondary"
          />
          <PricingCard
            plan={{
              type: "BEST",
              name: "Enterprise",
              price: "Custom",
            }}
            benefits={[
              "Enterprise level file transfers",
              "Custom analytical tools",
              "Enterprise level support",
              "Unlimited custom domains & API",
              "Access to Enterprise cell",
            ]}
            buttonText="Contact support"
            buttonType="supreme"
          />
        </div>
        <div className="pt-24"></div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CompactCard
            title="Chat with almost no latency"
            text="Our ultra-fast servers take no time in delivering your message"
            icon={<BoltIcon className="h-7 w-7" />}
          ></CompactCard>
          <CompactCard
            title="Safety at its finest"
            text="We use the most secure protocols to handle all events in our application"
            icon={<LockClosedIcon className="h-7 w-7" />}
          ></CompactCard>
          <CompactCard
            title="Super fast downloads and uploads"
            text="Our servers use the highest possible bandwidth possible to make your downloads faster than light"
            icon={<ArrowDownTrayIcon className="h-7 w-7" />}
          ></CompactCard>
        </div>
        <div className="pt-96"></div>
        <div className="pt-24"></div>
        <Dialog
          product={{
            name: "Tailwind Design Handbook",
            price: 120,
            currency: "USD",
          }}
        />
        <div className="pt-32"></div>
        <Dialog
          product={{
            name: "A Gorgeous blue lamborghini",
            price: 345000,
            currency: "USD",
          }}
        />
      </div>
    </>
  );
};

export default Sandbox;
