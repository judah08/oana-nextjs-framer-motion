"use client";

import Badge from "@/components/badge";
import Testimonial from "@/components/testimonial";
import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full p-5 mx-auto max-w-7xl mt-10">
      <div className="text-center flex flex-col items-center">
        <Badge content="TESTIMONIALS" />
        <h2 className="text-4xl md:text-6xl font-bold my-5">
          Why our patients love Oana
        </h2>
        <p className="text-[#505050] mt-3 text-base md:text-lg">
          Relief comes from clinically backed treatments
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 w-full mt-20">
        <div className="w-full">
          <Testimonial
            content="I’m so glad I discovered Oana’s metformin lotion! I used to struggle a lot with the side effects for oral metformin and this is a great alternative for me. I get the same benefits but no more upset stomach and nausea, and this helps me stick with it a lot more consistently."
            avatar="/avatar1.png"
            name="Carrie S."
            job="Topical Metformin"
          />
        </div>
        <div className="w-full items-content">
          <Testimonial
            content="It’s been a little over 5 weeks, and I’ve noticed a dramatic reduction in my facial hair growth. This has been such a relief for me. You really have to stick with it and be patient to notice results!"
            avatar="/avatar2.png"
            name="Allison L."
            job="Hairless Hype"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5 items-center w-full mt-5 p-10">
        <div className="w-full">
          <h3 className="text-4xl	font-bold">
            Still thinking
            <br />
            about it?
          </h3>
          <p className="text-[#505050] text-lg mt-3">
            Sign up for our newsletter and get the latest updates in PCOS
            treatments.
          </p>
        </div>
        <div className="w-full grid md:grid-cols-3 md:grid-flow-row-dense gap-5">
          <input
            placeholder="Enter your email"
            className="p-3 border-black border-2 rounded-xl outline-none md:col-span-2"
          />
          <button className="bg-black text-white px-8 py-4 rounded-xl w-full">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
