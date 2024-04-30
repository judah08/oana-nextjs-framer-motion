"use client";

import Badge from "@/components/badge";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

interface BlogProps {
  title: string;
  subtitle: string;
  period: string;
  type: string;
  coverImage: string;
}

export const Blog: React.FC<BlogProps> = ({
  title,
  subtitle,
  period,
  type,
  coverImage,
}) => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <a href="/">
          <div className="rounded-3xl overflow-hidden relative w-full pt-[66%]">
            <img
              src={coverImage}
              alt="Blog Image"
              className="w-full h-full absolute top-0 left-0 bottom-0 right-0 object-cover	"
            />
          </div>
        </a>
        <div className="flex items-center my-5 mt-100">
          <div className="rounded-full border-2 border-black py-2 px-5">
            {type}
          </div>
          <div className="ml-5">{`${period} min`}</div>
        </div>
        <a href="/">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
        </a>
        <p className="text-[#505050] text-lg">{subtitle}</p>
      </div>
      <div>
        <a href="/">
          <div className="flex items-center mt-10">
            Read More <FaAngleRight className="ml-3" />
          </div>
        </a>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  return (
    <section className="w-full p-5 mt-20 max-w-7xl mx-auto mb-60">
      <div className="md:flex items-end">
        <div className="mr-5">
          <Badge content="LATEST POSTS" />
          <h2 className="text-4xl font-bold my-5">From our blog</h2>
          <p className="text-[#505050] text-lg">
            Read more about PCOS symptoms, latest research and treatments.
          </p>
        </div>
        <div className="rounded-lg border-2 border-black p-4 w-fit mt-5 md:mt-0">
          View All Posts
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        <div className="w-full">
          <Blog
            coverImage="/blog1.png"
            type="Treatments"
            period="4"
            title="Topical Metformin: A Revolutionary Approach to PCOS Treatment"
            subtitle="Discover the potential of topical Metformin in managing PCOS. This post delves into how this novel form of treatment could revolutionize the way we approach PCOS, offering insights into its benefits and applications."
          />
        </div>
        <div className="w-full">
          <Blog
            coverImage="/blog2.png"
            type="Treatments"
            period="8"
            title="Eflornithine Cream: Treatment Guide"
            subtitle="Eflornithine cream, also known as its brand name Vaniqa, is a topical medication primarily used for treating hirsutism, which is the condition of unwanted hair growth on the face and under the chin in women. In this guide, we'll cover how it works, its uses, and more."
          />
        </div>
        <div className="w-full">
          <Blog
            coverImage="/blog3.png"
            type="Treatments"
            period="5"
            title="Eflornithine vs. Electrolysis: Leading the Fight Against Unwanted Hirsutism and Facial Hair"
            subtitle="A comprehensive guide exploring why Eflornithine is the preferred first-line treatment for hirsutism and unwanted facial hair over electrolysis. Discover its benefits, ease of use, and effectiveness as a non-invasive, pain-free solution for managing excessive hair growth."
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
