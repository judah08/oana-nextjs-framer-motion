"use client";

import Badge from "@/components/badge";
import React from "react";

interface TreatmentCardProps {
  even: boolean;
  imgSrc: string;
  imgAlt: string;
  title: string;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({
  even,
  imgSrc,
  imgAlt,
  title,
}) => {
  return (
    <div className="w-full">
      <div className="rounded-3xl relative overflow-hidden">
        <a href="/">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </a>
        <div
          className={`w-full p-5 ${
            even ? "bg-[#dee1fd]" : "bg-[#ebf490]"
          } absolute bottom-0 flex flex-col md:flex-row justify-between items-center`}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-0">
            {title}
          </h3>
          <div className="w-full md:w-auto border-2 border-black rounded-xl bg-white text-center px-5 py-2">
            <a href="/category/all-treatments">See Treatments</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TreatmentSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto p-5">
      <div className="text-center flex flex-col items-center">
        <Badge content="TRETMENTS" />
        <div className="my-5">
          <h2 className="text-4xl md:text-6xl font-bold">
            Find the right
            <br />
            treatment for you
          </h2>
        </div>
        <div className="mt-3">
          <p className="text-[#505050] text-base md:text-lg">
            We offer the latest clinically backed treatments
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 w-full mt-10">
        <TreatmentCard
          even={false}
          imgSrc="/insulin-resistance.webp"
          imgAlt="Insulin Resistance"
          title="Insulin resistance"
        />
        <TreatmentCard
          even={true}
          imgSrc="/reduce-unwanted-hair.webp"
          imgAlt="Reduce Unwanted Hair"
          title="Reduce unwanted hair"
        />
        <TreatmentCard
          even={false}
          imgSrc="/weight-management.webp"
          imgAlt="Weight Management"
          title="Weight Management"
        />
        <TreatmentCard
          even={true}
          imgSrc="/hair-loss.webp"
          imgAlt="Hair Loss"
          title="Hair loss"
        />
      </div>
    </section>
  );
};

export default TreatmentSection;
