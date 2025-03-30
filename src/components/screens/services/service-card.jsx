import { services } from "@/data/home";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ServiceCard = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, id) => (
          <div
            key={id}
            className="w-full max-w-[541px] group bg-gradient-to-b from-[#05142C] to-[#030F22] hover:from-[#afc9f5] hover:to-[#3573E0] p-8  rounded-[32px] shadow-lg border border-[#0B1F42] transition-al ease-in-out duration-500"
          >
            <h2 className="text-[32px] md:text-[28px] 2xl:text-[32px]  font-semibold leading-[140%] text-[#F0F7FE] group-hover:text-black">
              {service.title}
            </h2>
            <p className="text-[#F0F7FEB8] group-hover:text-black mt-4 text-2xl md:text-xl 2xl:text-2xl leading-[140%] font-normal h-32">
              {service.description}
            </p>

            <div className="mt-12 flex items-center">
              <div
                className="h-[90px] w-full rounded-full relative overflow-hidden box-border border border-[#0B1F42] bg-[#030E21] group-hover:bg-[url('https://img.freepik.com/premium-photo/tech-support-services_1246656-4425.jpg?semt=ais_hybrid')] transition-all ease-in-out duration-300"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <Link
                  href={`/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="w-14 h-14 cursor-pointer flex items-center justify-center rounded-full border backdrop-blur-xl border-[#0B1F42] text-[#F0F7FE] absolute top-1/2 -translate-y-1/2 left-[4%] z-10 transition-all duration-300 ease-in-out group-hover:animate-moveArrow group-hover:left-[96%] group-hover:-translate-x-full"
                >
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
