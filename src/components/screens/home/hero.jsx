"use client";

import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi2";

const HeroSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container_fluid">
        <div className=" flex lg:flex-row flex-col items-center justify-start gap-x-16">
          <div className="text-white">
            <h1 className="text-[46px] sm:text-[56px] 2xl:text-[80px] font-normal leading-[100%] w-full lg:max-w-[822px]">
              From Vision to Reality,{" "}
              <span className="gradient-text">We Make It Happen</span>
            </h1>
            <p className="mt-6 text-[#F0F7FEB8] md:text-[21px] leading-[150%] w-full text-lg lg:max-w-[700px]">
              You have the idea. We have the expertise. At{" "}
              <strong className="text-white">Log-U</strong>, we build and scale{" "}
              <strong className="text-white">
                high-performance tech teams
              </strong>{" "}
              and deliver{" "}
              <strong className="text-white">turnkey software solutions</strong>{" "}
              that move your business forward.
            </p>

            {/* button part */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 ">
              <button className="group relative py-3 px-6 w-[256px] text-lg font-medium bg-[#F0F7FE] hover:bg-[#030E21] hover:text-[#F0F7FE] text-[#030E21] border hover:border-[#F0F7FE] rounded-full flex items-center justify-between transition ease-in-out duration-300 uppercase">
                SCALE YOUR TEAM
                <div className="relative w-6 h-6 overflow-hidden">
                  <HiOutlineArrowRight className="text-2xl absolute left-0 transition-transform duration-300 group-hover:translate-x-8  " />

                  <HiOutlineArrowRight className="text-2xl absolute -left-6 transition-transform duration-300 group-hover:translate-x-6  " />
                </div>
              </button>

              <button className="group relative py-3 px-6 w-[256px] text-lg font-medium bg-[#3276DE05] text-[#F0F7FE] rounded-full flex items-center hover:bg-[#05142D] transition uppercase">
                SCALE YOUR TEAM
                <div className="relative w-6 h-6 overflow-hidden ml-6">
                  <HiOutlineArrowRight className="text-2xl absolute left-0 transition-transform duration-300 group-hover:translate-x-8  " />

                  <HiOutlineArrowRight className="text-2xl absolute -left-6 transition-transform duration-300 group-hover:translate-x-6  " />
                </div>
              </button>
            </div>
          </div>

          <div className="lg:relative">
            <div className="hidden lg:block">
              <Image
                src="/banner-logo.png"
                alt="banner-logo"
                width={677}
                height={683}
              />
            </div>
            <div className="bg-primary w-44 h-44 absolute top-0 left-0 lg:animate-moveBlurCircle1 rounded-full blur-[150px]  lg:blur-[96px] transition-all duration-1000 -z-[1] lg:z-0" />
            <div className="bg-secondary w-44 h-44 absolute bottom-0 right-0 lg:animate-moveBlurCircle2 lg:rounded-full blur-[64px]  lg:blur-[96px] transition-all duration-1000 -z-[1] lg:z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
