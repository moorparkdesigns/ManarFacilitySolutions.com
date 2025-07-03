import HeroSection from "../Components/HomePageSections/HeroSection/HeroSection";
import MissionSection from "../Components/HomePageSections/MissionSection/MissionSection";
import ServicesSection from "../Components/HomePageSections/ServicesSection/ServicesSection";
import ReviewsSection from "../Components/HomePageSections/ReviewsSection/ReviewsSection";
import CtaSection from "../Components/GlobalSection/CtaSection/CtaSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <ReviewsSection />
      <CtaSection />
    </>
  );
}

export default HomePage;
