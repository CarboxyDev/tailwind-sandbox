import { NextPage } from "next";
import Button from "../components/Button";
import CompactCard from "../components/CompactCard";
import Dialog from "../components/Dialog";

const Sandbox: NextPage = () => {
  return (
    <>
      <div className="pt-12 pl-12">
        <Button>Continue</Button>
        <div className="pt-24"></div>
        <CompactCard
          title="Chat with almost no latency"
          text="Our ultra-fast servers take no time in delivering your message"
        ></CompactCard>

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
