"use client";
import { executives } from "@/data/home";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Vector8 from '../../../../public/Vector8.png'
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function MeetSection() {
  return (
    <section className=" text-white py-16 px-4 md:px-12 lg:px-24">
      <div className="relative">

        <div className="absolute rotate-">

          <Image src={Vector8} alt="" width={1400} height={1400} />
        </div>

        <div className="container mx-auto">
          {/* <div className="w-full h-full bg-[url('/meet-banner.png')] bg-cover opacity-20 z-30"></div> */}
          <div className="w-full h-full lg:rounded-[96px] rounded-[47px] lg:p-20 p-3 py-8 overflow-hidden bg-[#3276DE] z-30">
            <div className="relative z-10 flex flex-col xl:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="lg:text-[64px] text-[40px] md:text-4xl font-normal leading-[100%]">
                  Let's Meet Tomorrow
                </h2>
                <p className="mt-6 text-[#F0F7FEB8] font-normal leading-[140%] w-full max-w-[457px]">
                  We find that the best way to discuss the specific expectations
                  and requirements of our clients' software development projects
                  is by meeting with them in person.
                </p>
              </div>
              
              <div className="md:w-1/2 w-full  flex flex-col xl:flex-row gap-6">
                {executives.map((exec, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-10 backdrop-blur-2xl p-6 rounded-3xl text-start flex flex-col items-start max-xl:justify-center shadow-lg w-full  "
                  >
                    <Image
                      src={exec.image}
                      alt={exec.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-white"
                    />
                    <h4 className="lg:text-[32px] text-2xl font-semibold mt-4">{exec.name}</h4>
                    <p className="text-sm text-gray-300">{exec.role}</p>
                      <button className="mt-12 group relative py-4 px-7 w-full max-w-[294px] lg:text-lg text-base font-medium bg-[#F0F7FE] hover:bg-transparent hover:text-[#F0F7FE] text-[#030E21] border hover:border-[#F0F7FE] rounded-full flex items-center justify-between gap-x-2 lg:gap-x-0 transition ease-in-out duration-300 uppercase">
                        Request a Meeting
                        <div className="relative w-6 h-6 overflow-hidden">
                          <HiOutlineArrowRight className="text-2xl absolute left-0 transition-transform duration-300 group-hover:translate-x-8  " />
        
                          <HiOutlineArrowRight className="text-2xl absolute -left-6 transition-transform duration-300 group-hover:translate-x-6  " />
                        </div>
                      </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
