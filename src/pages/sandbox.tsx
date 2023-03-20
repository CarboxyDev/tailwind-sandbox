import { NextPage } from "next";
import CompactCard from "../components/CompactCard";
import {
  BoltIcon,
  LockClosedIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import PricingCard from "../components/PricingCard";
import TestimonialCard from "../components/TestimonialCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import CardWithImage from "../components/CardWithImage";
import CardWithImageAndButton from "../components/CardWithImageAndButton";
import Popover from "../components/Popover";
import Tooltip from "../components/Tooltip";
import HeroSection from "../sections/HeroSection";
import HeaderSection from "../sections/HeaderSection";
import Divider from "../components/Divider";
import Filler from "../components/Filler";

const Sandbox: NextPage = () => {
  return (
    <>
      <div id="app-container" className="px-4 sm:px-8 lg:px-28">
        <Navbar />
        <Divider />
        <HeroSection />
        <Filler height={100} />
        <HeaderSection variant="dark" />
      </div>

      {/*
          JSX above is part of the core assembly section for testing layouts, app design, etc.
          JSX below is part of the pure sandbox section
        */}

      <div className="pt-80 pb-80"></div>
      <div className="px-4 pt-12 sm:px-10 md:px-12">
        <div className="pt-24"></div>
        <div className="pt-40 pb-40"></div>
        <Tooltip text="Thanks for hovering!">
          <span className="text-gray-600 underline decoration-dotted hover:text-primary">
            hover over me!
          </span>
        </Tooltip>
        <div className="px-20 pb-8">
          <Popover text="We sample your data and compare it against our database and then return the match">
            <span className="text-gray-600 underline">how it works</span>
          </Popover>
        </div>
        <div className="grid gap-x-4 gap-y-4 md:grid-cols-2">
          <CardWithImageAndButton
            image="/generic-image-2.jpg"
            heading="Some Heading"
            content="This is some example text for this card design. Let's fit some more content in here so that it feels not-so-empty. Alright, that's enough for now."
            buttonText="Learn more"
          />
          <CardWithImage
            image="/generic-image-2.jpg"
            heading="Some Heading"
            content="This is some example text for this card design. Let's fit some more content in here so that it feels not-so-empty. Alright, that's enough for now."
          />
        </div>
        <div className="pt-80 pb-80"></div>
        <div className="2xl:grids-cols-4 grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
          <CardWithImage
            image="/generic-image-2.jpg"
            heading="Some Heading"
            content="This is some example text for this card design. Let's fit some more content in here so that it feels not-so-empty. Alright, that's enough for now."
          />
          <CardWithImage
            image="/skyrim-1.jpeg"
            heading="TES V: Skyrim"
            content="It's a nice game. Buy it and pump Godd Todd's bank."
          />
          <CardWithImage
            image="/skyrim-2.jpeg"
            heading="Some Heading"
            content="This is some example text for this card design. Let's fit some more content in here so that it feels not-so-empty. Alright, that's enough for now."
          />
        </div>
        <div className="pt-80 pb-80"></div>
        <div className="flex items-center justify-center">
          <LoginForm />
        </div>
        <div className="pt-80 pb-80"></div>
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
              benefits: [
                "Faster downloads",
                "Comprehensive file analytics",
                "Priority mail support",
                "Custom domain & API",
                "Access to VIP lounge",
              ],
            }}
            button={{
              buttonText: "Subscribe monthly",
              buttonType: "primary",
            }}
          />
          <PricingCard
            plan={{
              type: "intermediate",
              name: "Professional",
              price: "$15.99",
              benefits: [
                "Ultra fast file transfers",
                "One click file analytics",
                "Priority mail and call support",
                "Custom domain & API",
                "Access to VIP lounge",
              ],
            }}
            button={{
              buttonText: "Subscribe monthly",
              buttonType: "primary",
            }}
          />

          <PricingCard
            plan={{
              type: "MOST POPULAR",
              name: "Premium ✨",
              price: "$25.99",
              benefits: [
                "Almost instant file transfers",
                "Fifteen different analytical tools",
                "Priority mail and call support",
                "Unlimited custom domains & API",
                "Access to Premium lounge",
              ],
            }}
            button={{
              buttonText: "Subscribe monthly",
              buttonType: "secondary",
            }}
          />
          <PricingCard
            plan={{
              type: "BEST",
              name: "Enterprise",
              price: "Custom",
              benefits: [
                "Enterprise level file transfers",
                "Custom analytical tools",
                "Enterprise level support",
                "Unlimited custom domains & API",
                "Access to Enterprise cell",
              ],
            }}
            button={{
              buttonText: "Contact support",
              buttonType: "secondary",
            }}
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
      </div>
      <Footer />
    </>
  );
};

export default Sandbox;
