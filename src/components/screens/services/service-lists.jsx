import GradientBadge from "@/components/ui/gradient-badge";
import { Company } from "./Company";
import ServiceCard from "./service-card";
import TechnologiesSection from "./TechnologiesSection";

const ServiceLists = () => {
  return (
    <section className="pt-24">
      <div className="container_fluid">
        <div className=" flex flex-col items-center justify-center">
          <GradientBadge>Our Services</GradientBadge>
          <div className="flex flex-col items-center justify-center text-center mt-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-normal text-white leading-[100%] mb-8 w-full max-w-3xl">
              Scalable Tech Solutions for Your Business Growth
            </h1>
            <p className=" sm:text-lg lg:text-[21px] font-normal text-[#F0F7FEB8] leading-[150%] max-w-[780px]">
              At Log-U, we provide expert-driven, flexible tech solutions to
              help you scale seamlessly. Whether you need a dedicated team,
              project-based development, or full-cycle software solutions, we've
              got you covered.
            </p>
          </div>
        </div>

        {/*---- service card section----- */}
        <ServiceCard />

        {/*---- service  TechnologiesSection section----- */}
        <TechnologiesSection />
      </div>
      {/* company name */}
      <Company />
    </section>
  );
};

export default ServiceLists;
