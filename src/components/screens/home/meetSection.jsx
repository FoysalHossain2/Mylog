"use client";
import { executives } from "@/data/home";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function MeetSection() {
  return (
    <section className="bg-[#0B1120] text-white py-16 px-4 md:px-12 lg:px-24">
      <div className="relative">
        {/* <Image src="/meet-banner.png" alt="Image" width={1664} height={493} /> */}
        <div className="container mx-auto">
          {/* <div className="w-full h-full bg-[url('/meet-banner.png')] bg-cover opacity-20 z-30"></div> */}
          <div className="w-full h-full rounded-2xl p-10 overflow-hidden bg-[#3276DE] z-30">
            <div className="relative z-10 flex flex-col xl:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Let's Meet Tomorrow
                </h2>
                <p className="mt-4 text-gray-200 font-regular">
                  We find that the best way to discuss the specific expectations
                  and requirements of our clients' software development projects
                  is by meeting with them in person.
                </p>
              </div>
              <div className="md:w-1/2 w-full  flex flex-col xl:flex-row gap-6">
                {executives.map((exec, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg text-start flex flex-col items-start max-xl:justify-center shadow-lg h-[250px] xl:w-[300px] w-full  "
                  >
                    <Image
                      src={exec.image}
                      alt={exec.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-white"
                    />
                    <h4 className="text-lg font-semibold mt-4">{exec.name}</h4>
                    <p className="text-sm text-gray-300">{exec.role}</p>
                    <button className="group mt-8 w-[220px] py-1 px-2 lg:px-4 lg:py-2 bg-white text-gray-800 font-regular rounded-full flex items-center hover:bg-transparent hover:text-white hover:border hover:border-white hover:duration-500">
                      REQUEST A MEETING
                      <div className="group ml-1 -mt-2 relative inline-flex items-center overflow-hidden">
                        <FaArrowRight className="relative text-md mt-2 left-2 group-hover:left-8 transition-all duration-300 ease-out" />
                        <FaArrowRight className="relative text-md mt-2 -left-8 group-hover:-left-2 transition-all duration-300 ease-out" />
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
