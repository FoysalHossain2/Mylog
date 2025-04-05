"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/home";

export default function InnovationSection() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className=" text-white py-16 px-4 md:px-8 lg:px-16 xl:px-24 overflow-hidden">
      <div className="container mx-auto overflow-hidden">
        <div className="mx-auto flex flex-col xl:flex-row items-center gap-12">
          <div className="xl:w-[33%] text-center xl:text-left">
            <span className="text-sm mb-2 py-1 px-3 bg-gradient-to-r from-blue-600 to-pink-800 bg-clip-text text-transparent">
              Careers
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-4">
              Excellence, Integrity & Innovation
            </h2>
            <p className="mt-4 text-gray-400">
              At Log-U, our culture is built on a foundation of{" "}
              <strong className="text-white">
                expertise, trust, and forward-thinking innovation.
              </strong>{" "}
              We believe that success comes from combining{" "}
              <strong className="text-white">technical mastery</strong> with a
              strong <strong className="text-white">ethical core</strong>,
              creating a workplace where both our team and our clients thrive.
            </p>
            <div className="flex items-center xl:ml-44 justify-center xl:justify-start gap-4 mt-4 px-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-gray-950"
              >
                <div className="group relative inline-flex items-center overflow-hidden">
                  <FaArrowLeft className="relative text-md mt-2 -right-2 group-hover:right-8 transition-all duration-300 ease-out" />
                  <FaArrowLeft className="relative text-md mt-2 -right-4 group-hover:right-2 transition-all duration-300 ease-out" />
                </div>
              </button>
              <span className="text-gray-400">
                {index + 1} / {testimonials.length}
              </span>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-gray-950"
              >
                <div className="group relative inline-flex items-center overflow-hidden">
                  <FaArrowRight className="relative text-md mt-2 left-2 group-hover:left-8 transition-all duration-300 ease-out" />
                  <FaArrowRight className="relative text-md mt-2 -left-8 group-hover:-left-2 transition-all duration-300 ease-out" />
                </div>
              </button>
            </div>
          </div>

          <div className="xl:w-[67%] w-full relative overflow-hidden">
            <div
              className="flex gap-[3%] transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 83}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="min-w-[80%] bg-[#131A2A] md:p-6 p-3 rounded-xl shadow-lg flex flex-col md:flex-row gap-6"
                >
                  <div className="w-[40%]">
                    <div className="flex flex-col ">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={1000}
                        height={1000}
                        className="object-cover"
                      />
                      <h4 className="text-lg font-semibold mt-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-[60%]">
                    <p className="text-gray-300 md:text-left">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}