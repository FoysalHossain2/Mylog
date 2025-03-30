import WhyChooseSection from "@/components/screens/home/why-choose";
import Aboutservice from "@/components/screens/services/servicesection/Aboutservice";
import ServiceHero from "@/components/screens/services/servicesection/ServiceHero";

const ServicesPage = () => {
  return (
    <section>
      <ServiceHero />
      <Aboutservice />
      <WhyChooseSection />
    </section>
  )
};

export default ServicesPage;
