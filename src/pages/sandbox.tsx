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

const Sandbox: NextPage = () => {
  return (
    <>
      <div className="px-12 pt-12">
        <div className="pt-24"></div>
        <div>
          <PricingCard
            plan={{
              type: "basic",
              name: "Professional✨",
              price: "$9.99",
            }}
            benefits={[
              "Faster downloads",
              "Comprehensive file analytics",
              "Priority support",
              "Custom domain & API",
              "Access to VIP lounge",
            ]}
            buttonText="Subscribe monthly"
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
