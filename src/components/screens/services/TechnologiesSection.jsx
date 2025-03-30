"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Nodejs from "../../../../public/Nodejs.png";
import python from "../../../../public/python.png";
import java from "../../../../public/java.png";
import golang from "../../../../public/golang.png";
import dotnet from "../../../../public/asp.net.png";
import { categories } from "@/data/home";

// Technology category tabs

const TechnologiesSection = () => {
  const [activeCategory, setActiveCategory] = useState("backend");

  return (
    <section className="w-full py-32">
      <div className="flex flex-col xl:flex-row items-center lg:gap-x-56 gap-x-0">
        <h2 className="text-5xl font-normal text-white mb-10">
          Technologies We Work With
        </h2>

        {/* Category tabs */}
        <div className="flex flex-col">
          <div className="relative w-fit ">
            <div className="flex lg:flex-row gap-2 md:gap-6 mb-8 border-b border-[#0B1F3F] w-full relative ">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    `mb-2 lg:px-4 px-0 text-sm lg:text-base text-[#F0F7FEB8] transition-colors relative `,
                    {
                      "text-[#F0F7FE] font-semibold":
                        activeCategory === category.id,
                      "text-[#F0F7FEB8]": activeCategory !== category.id,
                    }
                  )}
                >
                  {category.label}
                </button>
              ))}

              {/* Moving Animated Border */}
              <div
                className="absolute bottom-0 h-[3px] bg-blue-500 w-6 transition-all duration-500 ease-in-out mt-2"
                style={{
                  width: `${100 / categories.length}%`,
                  transform: `translateX(${
                    categories.findIndex((cat) => cat.id === activeCategory) *
                    100
                  }%)`,
                }}
              />
            </div>
          </div>

          {/* Technologies logos */}
          <div className="ml-4 flex flex-row items-center gap-x-5 md:gap-12">
            <div className=" h-14 relative flex items-center justify-center">
            {activeCategory === "backend" && (
                <div className="space-x-6 flex flex-wrap space-y-4">
                  <Image src={Nodejs} alt="Node.js" width={70} height={70} />
                  <Image src={python} alt="Node.js" width={70} height={70} />
                  <Image src={java} alt="Node.js" width={60} height={60} />
                  <Image src={dotnet} alt="Node.js" width={60} height={60} />
                  <Image src={golang} alt="Node.js" width={60} height={60} />
                </div>
              )}
              {activeCategory === "frontend" && (
                <div className="space-x-6 flex">
                  <Image src={Nodejs} alt="Node.js" width={70} height={70} />
                  <Image src={python} alt="Node.js" width={70} height={70} />
                  <Image src={java} alt="Node.js" width={60} height={60} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
