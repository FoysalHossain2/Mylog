"use client";
import { slides } from "@/data/home";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const transitionTime = 8000;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        return prev;
      });
    }, transitionTime / 100);

    const timeout = setTimeout(() => {
      nextSlide();
      setProgress(0);
    }, transitionTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  return (
    <section className="bg-gradient-to-r from-[#1F3A6E] to-[#3276DE] text-white p-6 md:p-12 space-y-8 relative">
      <div className="space-y-4">
        <h3 className="text-[16px] font-medium font-seravek text-blue-50 bg-blue-900 inline-block py-2 px-3 rounded-full">
          Past Projects
        </h3>
        <h1 className="text-[48px] font-regular font-seravek text-blue-50">
          Proven Expertise, Real Impact
        </h1>
        <p className="text-blue-50 font-regular font-seravek max-w-2xl">
          At Log-U, we have a track record of delivering high-quality software
          solutions for businesses across industries. From fintech to
          healthcare, our expertise spans a variety of domains, helping
          companies innovate, scale, and stay ahead in a competitive landscape.
        </p>
      </div>

      <div className="flex items-center justify-center space-x-4 absolute top-60 right-[80px] transform -translate-y-1/2 text-white font-seravek">
        <button onClick={prevSlide}>
          <div className="group relative inline-flex items-center overflow-hidden">
            <FaArrowLeft className="relative text-md mt-2 -right-1 group-hover:right-5 transition-all duration-300 ease-out" />
            <FaArrowLeft className="relative text-md mt-2 -right-4 group-hover:right-4 transition-all duration-300 ease-out" />
          </div>
        </button>
        <div className="w-9">
          <span className="text-sm font-regular">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
        <button onClick={nextSlide}>
          <div className="group relative inline-flex items-center overflow-hidden">
            <FaArrowRight className="mt-2 relative right-4 group-hover:-right-1 transition-all duration-300 ease-out" />
            <FaArrowRight className="mt-2 relative right-4 group-hover:-right-4 transition-all duration-300 ease-out" />
          </div>
        </button>
      </div>

      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-700">
          <div
            className="h-full bg-white transition-all duration-[100ms] ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 pt-8">
          <div className="relative">
            <img
              src={slides[currentSlide].image}
              alt="Project Image"
              className="w-full max-h-[600px] h-full object-cover rounded-xl"
            />
          </div>
          <div className="space-y-8">
            <div className="flex items-center lg:justify-between gap-2 text-sm text-gray-300">
              <span className="font-normal text-[32px] leading-[140%] text-[#F0F7FE]">
                {slides[currentSlide].title}
              </span>
              <span className="font-extralight text-[24px] leading-[140%] text-[#F0F7FE]">
                {slides[currentSlide].location}
              </span>
            </div>
            <h2 className="text-[40px] font-normal text-[#F0F7FE]">
              {slides[currentSlide].headline}
            </h2>
            <p className="font-normal text-[20px] text-[#F0F7FEB8]">
              <strong className="font-bold text-[#F0F7FE]">
                Project Description:
              </strong>
              <br />
              {slides[currentSlide].description}
            </p>
            <div className="pt-5">
              <span className="font-bold">Impact:</span>
              <ul className="list-disc list-inside text-gray-200 space-y-1 mt-2">
                {slides[currentSlide].impact.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="pt-5">
              <h4 className="font-bold">Technologies:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {slides[currentSlide].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-medium shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
