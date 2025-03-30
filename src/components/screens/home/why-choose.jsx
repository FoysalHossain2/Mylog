import FeatureCard from "@/components/ui/feature-card";
import GradientBadge from "@/components/ui/gradient-badge";
import { features } from "@/data/features";

const WhyChooseSection = () => {
  return (
    <section className="py-24">
      <div className="container_fluid">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-3">
          <div>
            <GradientBadge>Why Choose Log-U</GradientBadge>

            <h1 className="mt-6 font-normal text-[40px] md:text-5xl text-foreground w-full max-w-[541px] leading-[100%]">
              Your Strategic Partner in Tech Excellence
            </h1>
            <p className="mt-8 font-normal text-lg lg:text-[21px] text-[#F0F7FEB8] w-full lg:max-w-[541px] leading-[150%]">
              At Log-U, we are more than just a tech consultancy—we are{" "}
              <strong className="text-foreground">
                your strategic partner in growth.
              </strong>{" "}
              With a presence in{" "}
              <strong className="text-foreground">Portugal and Estonia,</strong>
              we help businesses build high-performing tech teams and deliver
              world-class software solutions.
            </p>

            <p className="mt-24 font-normal text-[28px] lg:text-[32px] leading-[140%] text-[#F0F7FEB8] w-full lg:max-w-[699px]">
              At Log-U, our team isn’t just technically proficient—we bring{" "}
              <span className="font-bold px-1 text-secondary">
                senior-level expertise across both business and technology.
              </span>{" "}
              With years of experience, we don’t just write code—we{" "}
              <span className="font-bold px-1 text-primary">
                understand the bigger picture
              </span>{" "}
              and help businesses scale strategically.
            </p>
          </div>

          <div className="lg:mt-0 mt-10">
            <div className="flex lg:flex-row flex-col items-center justify-center gap-x-4">
              <div className="flex flex-col justify-center gap-y-4">
                {features.slice(0, 2).map((feature, index) => (
                  <FeatureCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>

              <FeatureCard
                title={features[2].title}
                description={features[2].description}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
