"use client";

import Badge from "@/components/badge";

interface FeatureItemProps {
  index: number;
  heading: string;
  subheading: string;
  important?: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  index,
  heading,
  subheading,
  important,
}) => {
  return (
    <div className="flex p-5 border-black border-2 rounded-3xl items-start">
      <div className="flex">
        <div className="rounded-full bg-black text-white w-[30px] h-[30px]">
          <div className="flex justify-center items-center h-full">{index}</div>
        </div>
      </div>
      <div className="ml-5">
        <h3 className="text-xl md:text-2xl font-bold">{heading}</h3>
        <p className="text-base mt-2 text-[#505050]">
          {subheading} <strong>{important ?? important}</strong>
        </p>
      </div>
    </div>
  );
};

export default function FeatureSection() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto p-5 my-10">
      <div className="text-center flex flex-col items-center">
        <Badge content="THE PROCESS" />
        <div className="my-5">
          <h2 className="text-4xl font-bold">How Oana works</h2>
        </div>
        <p className="text-[#505050] text-base md:text-lg">
          Start an online doctor visit and share your PCOS concerns. Irregular
          periods? Insulin resistance? Get customized care for your unique PCOS
          journey.
        </p>
      </div>
      <div className="grid gap-5">
        <FeatureItem
          index={1}
          heading="Free online doctor visit"
          subheading="Fill out a brief intake on your health history and your specific health needs"
        />
        <FeatureItem
          index={2}
          heading="Get medical approval"
          subheading="A licensed medical professional will review your health history within 48 hours"
        />
        <FeatureItem
          index={3}
          heading="Shipped to your doorstep"
          subheading="All treatments are shipped directly to you with "
          important="free 2-day shipping"
        />
      </div>
    </section>
  );
}
