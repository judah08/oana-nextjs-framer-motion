"use client";

import "./heroSection.css";

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="pt-[80px] mb-[48px] flex flex-col w-full font-hero max-w-[1192px] items-start px-[24px] lg:px-0 lg:flex-row lg:mb-20 lg:p-0 lg:items-end justify-between">
        <div className="text-[56px] w-[345px] leading-[66px] font-black text-[#151531] lg:w-full lg:text-[88px] lg:leading-[106px]">
          <h1>
            Product Analytics <br />
            that works for you
          </h1>
        </div>
        <a
          className="relative h-16 w-[227px] border border-[3px] border-[#151531] min-w-[227px] mt-8 lg:ml-[58px] bg-[#151531] text-white rounded-[20px] text-[20px] leading-[24px] font-semibold lg:mb-[22px] hover:scale-110 ease-in-out duration-300"
          href="/"
          rel="noreferrer noopener"
          id="[#151531]-cta"
        >
          <div className="absolute top-[17px] left-[37px]">Get started</div>
          <img
            className="absolute top-[9px] right-[21px]"
            src="/right-arrow-circle.svg"
            alt="Arrow"
          />
        </a>
      </div>
      <div>
        <div className="flex justify-end">
          <div className="flex bg-[#F9E2FB] text-[#560059] p-3 rounded-t-2xl text-[20px]">
            <img src="./reports-icon.svg" className="mr-1" />
            Ready to go reports
          </div>
          <div className="flex bg-[#C9F0FF] text-[#003D5A] p-3 rounded-t-2xl text-[20px]">
            <img src="./profiles.svg" className="mr-1" />
            Customer profiles
          </div>
          <div className="flex bg-[#DAF9D4] text-[#005900] p-3 rounded-t-2xl text-[20px]">
            <img src="./sync-with-crm.svg" className="mr-1" />
            Synced with your CRM
          </div>
        </div>
        <div className="w-full bg-[#F9E2FB]">
          <div className="p-2">
            <video
              id="hero-video-player"
              muted
              preload="auto"
              playsInline
            >
              <source
                src="/videos/qlbsjsjpz0hi0z0foznc.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
