"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/home";
import Button from "@/components/commoneComponent/Button";

export default function InnovationSection() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className=" text-white py-16 ">
      <div className="container_fluid flex flex-col md:flex-row items-center gap-12">

        <div className="md:w-[33%] text-left">
          <Button>
            Careers
          </Button>
          <h2 className="lg:text-5xl text-4xl font-normal mt-6 leading-[100%]">
            Excellence, Integrity & Innovation
          </h2>
          <p className="mt-4 text-[#F0F7FEB8] text-[19px] leading-[140%]">
            At Log-U, our culture is built on a foundation of{" "}
            <strong className="text-white">
              expertise, trust, and forward-thinking innovation.
            </strong>{" "}
            We believe that success comes from combining{" "}
            <strong className="text-white">technical mastery</strong> with a
            strong <strong className="text-white">ethical core</strong>,
            creating a workplace where both our team and our clients thrive.
          </p>
          <div className="flex items-center lg:ml-44 md:justify-start gap-4 mt-4">
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-"
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
              onClick={prevSlide}
              className="p-3 rounded-full bg-"
            >
              <div className="group relative inline-flex items-center overflow-hidden">
                <FaArrowRight className="relative text-md mt-2 left-2 group-hover:left-8 transition-all duration-300 ease-out" />
                <FaArrowRight className="relative text-md mt-2 -left-8 group-hover:-left-2 transition-all duration-300 ease-out" />
              </div>
            </button>
          </div>
        </div>

        <div className="md:w-[67%] lg:w-[67%] sm:w-[67%] w-[97%] relative overflow-hidden ">
          <div
            className="flex transition-transform duration-500 ease-in-out "
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="min-w-[80%] bg-gradient-to-b from-[#05142C] to-[#030F22] p-6 rounded-xl shadow-lg flex flex-col sm:flex-col md:flex-row lg:flex-row gap-6 md:gap-x-10"
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
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="w-full lg:max-w-[60%]">
                  <p className="text-gray-300 md:text-left">
                    {testimonial.text}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
