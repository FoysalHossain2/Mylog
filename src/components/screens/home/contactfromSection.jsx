"use client";
import Button from "@/components/commoneComponent/Button";
import { additionalTech, steps, techOptions } from "@/data/home";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Configurator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [projectDetails, setProjectDetails] = useState("");
  const [selectedTech, setSelectedTech] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const toggleTechSelection = (tech) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setCurrentStep(2); // Move to step 2 immediately after selecting
  };

  return (
    <div className="flex flex-col max-w-[820px] mx-auto justify-center items-center space-y-6 py-20">
      <Button>Contact</Button>
      <h1 className="text-2xl lg:text-5xl font-normal leading-[100%] text-center mb-6 px-[20px]">
        Hi there! Use our configurator & start building.
      </h1>

      <div className="flex items-center space-x-2 mb-8 max-w-full mx-auto">
        
        {steps.map((step) => (
          <div key={step} className="flex items-center">
            <motion.div
              className={`w-10 h-10 text-xl flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                step <= currentStep
                  ? "border-[#3276DE] bg-[#3276DE] text-black"
                  : "border-gray-600"
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              {step}
            </motion.div>
            {step !== steps.length && (
              <div className="w-8 md:w-20 lg:w-24 h-[4px] border-b-4 border-dashed border-[#3276DE]"></div>
            )}
          </div>
        ))}
      </div>
      <hr className="text-white" />
      <p className="pb-5 pt-6 text-2xl leading-[140%]">
        Answer a few quick questions and let’s build something great together
      </p>

      <div className="w-full max-w-xl">
        {currentStep === 1 && (
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <label
              className={`flex items-center px-8 py-6 rounded-full transition border cursor-pointer ${
                selectedOption === "product"
                  ? " text-white border-gray-800"
                  : "bg-[#030E21] border-gray-800"
              }`}
            >
              <input
                type="radio"
                name="option"
                value="product"
                className="hidden"
                onChange={() => handleOptionSelect("product")}
                checked={selectedOption === "product"}
              />
              <div
                className={`w-6 h-6 duration-500 border-gray-950 hover:border-none hover:bg-blue-600 mr-3 flex items-center justify-center border rounded-full ${
                  selectedOption === "product"
                    ? "bg-blue-600"
                    : "border-gray-800"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-900 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.293 6.293a1 1 0 011.414 1.414L9 14.414l-4.707-4.707a1 1 0 111.414-1.414L9 11.586l7.293-7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              I want to create a product
            </label>

            <label
              className={`flex items-center px-8 py-6  rounded-full transition border cursor-pointer ${
                selectedOption === "talent"
                  ? " text-white border-gray-800"
                  : "bg-[#030E21] border-gray-800"
              }`}
            >
              <input
                type="radio"
                name="option"
                value="talent"
                className="hidden"
                onChange={() => handleOptionSelect("talent")}
                checked={selectedOption === "talent"}
              />
              <div
                className={`group w-6 h-6 mr-3 flex items-center justify-center border rounded-full hover:bg-blue-600 transition-all duration-500 border-gray-950 hover:border-none ${
                  selectedOption === "talent"
                    ? "bg-blue-600 "
                    : "border-gray-800"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.293 6.293a1 1 0 011.414 1.414L9 14.414l-4.707-4.707a1 1 0 111.414-1.414L9 11.586l7.293-7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              I need top-notch talent
            </label>
          </div>
        )}

        {currentStep === 2 && (
          <textarea
            className="lg:w-[800px] lg:-ml-28 w-full mx-auto p-3 rounded bg-gray-800 text-white border border-gray-600"
            rows="4"
            placeholder="Describe your project..."
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
          />
        )}

        {currentStep === 3 && (
          <div className="flex border-b pb-5 border-gray-800 flex-wrap justify-center items-center gap-1 lg:w-[800px] lg:-ml-28 w-full mx-auto ">
            {techOptions.map((tech) => (
              <label
                key={tech}
                className="flex rounded-full  px-3 py-1 gap-x-2 shadow-lg bg-[#111e3a]"
              >
                <input
                  type="checkbox"
                  checked={selectedTech.includes(tech)}
                  onChange={() => toggleTechSelection(tech)}
                  className="hidden"
                />
                <div
                  className={`group w-5 h-5  border rounded-full hover:bg-blue-600 transition-all duration-500 border-gray-900 hover:border-none flex items-center justify-center  ${
                    selectedTech.includes(tech)
                      ? "bg-blue-600 "
                      : "border-gray-700"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.293 6.293a1 1 0 011.414 1.414L9 14.414l-4.707-4.707a1 1 0 111.414-1.414L9 11.586l7.293-7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>{tech}</span>
              </label>
            ))}
          </div>
        )}

        {currentStep === 4 && (
          <div className="border-b pb-5 border-gray-800 flex flex-wrap justify-center items-center gap-x-3 w-full mx-auto ">
            {additionalTech.map((tech) => (
              <label
                key={tech}
                className="flex items-center space-x-2 cursor-pointer pr-2 py-2 rounded-full shadow-md bg-blue-950"
              >
                <input
                  type="checkbox"
                  checked={selectedTech.includes(tech)}
                  onChange={() => toggleTechSelection(tech)}
                  className="hidden"
                />
                <div
                  className={
                    "group w-10 h-10 hover:bg-blue-600 border border-gray-700 rounded-full flex items-center justify-center "
                  }
                >
                  <div className="group absolute font-regular text-[20px] hover:text-white text-blue-500">
                    +
                  </div>
                </div>

                <span>{tech}</span>

                <div
                  className={
                    "relative group w-10 h-10 hover:bg-blue-600 border border-gray-700 rounded-full flex items-center justify-center "
                  }
                >
                  <div className="group absolute font-regular hover:text-white text-[30px] text-blue-500">
                    -
                  </div>
                </div>
              </label>
            ))}
          </div>
        )}
        {currentStep === 5 && (
          <div className=" lg:-ml-28 w-full mx-auto">
            <div className="flex gap-x-5 font-regular text-[14px]">
              <label className="font-regular text-[14px]">
                Full Name
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-[400px] p-3 rounded-lg bg-slate-900 text-white border border-gray-600"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                />
              </label>
              <label>
                {" "}
                Email Address
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-[400px] p-3 rounded-lg bg-slate-900 text-white border border-gray-600"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="flex gap-x-5">
              <label>
                Country
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-[400px] p-3 rounded-lg bg-slate-900 text-white border border-gray-600"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                />
              </label>
              <label>
                {" "}
                Company
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-[400px] p-3 rounded-lg bg-slate-900 text-white border border-gray-600"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="flex mt-5 gap-x-3">
              <input
                type="radio"
                class="appearance-none w-6 h-6 bg-blue-600 border-2 border-gray-300 rounded-md checked:border-blue-800 checked:bg-blue-800 focus:outline-none "
              ></input>
              <p className="font-regular text-[14px]">
                You agree to our friendly{" "}
                <a href="#" className="text-blue-500 underline text-[18px]">
                  privacy policy
                </a>{" "}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end lg:ml-80 w-full max-w-sm my-3">
        {currentStep > 1 && (
          <button
            onClick={handlePrev}
            className="group hover:text-white flex items-center px-5 py-2 max-w-[356px] bg-white text-gray-700 rounded-full  transition hover:bg-transparent border hover:border-gray-500"
          >
            <div className="group ml-1 -mt-2 relative inline-flex items-center overflow-hidden">
              <FiArrowLeft className="relative text-md mt-2 -right-1 group-hover:right-4 transition-all duration-300 ease-out" />
              <FiArrowLeft className="relative text-md mt-2 -right-4 group-hover:right-2 transition-all duration-300 ease-out" />
            </div>{" "}
            Previous
          </button>
        )}
        {selectedOption && currentStep < 5 && (
          <button
            onClick={handleNext}
            className="group hover:text-white flex items-center px-5 py-2 ml-4 bg-white text-gray-700 rounded-full hover:bg-transparent border hover:border-gray-500 transition"
          >
            Next
            <div className="group ml-1 -mt-2 relative inline-flex items-center overflow-hidden">
              <FiArrowRight className="relative text-md mt-2 left-2 group-hover:left-8 transition-all duration-300 ease-out" />
              <FiArrowRight className="relative text-md mt-2 -left-8 group-hover:-left-2 transition-all duration-300 ease-out" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
