import Configurator from "@/components/screens/home/contactfromSection";
import HeroSection from "@/components/screens/home/hero";
import InnovationSection from "@/components/screens/home/innovationSection";
import MeetSection from "@/components/screens/home/meetSection";
import ProjectSection from "@/components/screens/home/projectSection";
import WhyChooseSection from "@/components/screens/home/why-choose";
import ServiceLists from "@/components/screens/services/service-lists";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <ServiceLists />
      <ProjectSection />
      <Configurator />
      <InnovationSection />
      <MeetSection />
    </>
  );
};

export default HomePage;
