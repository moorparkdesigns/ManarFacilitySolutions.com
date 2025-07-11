import HeroSection from "../Components/HomePageSections/HeroSection/HeroSection";
import MissionSection from "../Components/HomePageSections/MissionSection/MissionSection";
import ServicesSection from "../Components/HomePageSections/ServicesSection/ServicesSection";
import ReviewsSection from "../Components/HomePageSections/ReviewsSection/ReviewsSection";
import CtaSection from "../Components/GlobalSection/CtaSection/CtaSection";

function HomePage() {
  const missionTitle = "Our mission";
  const missionDescription = (
    <>
      At Manar Facility Solutions, we offer high-quality cleaning services while
      providing a strong foundation of trust and respect for our customers.
      <br />
      <br />
      We have experience working with every home style, from apartments to
      multi-family homes. Our core value is to provide you with 5-star services
      and ensure that your every need is taken care of.
      <br />
      <br />
      Schedule a cleaning for your personal or professional space today to
      experience our 5-star services.
    </>
  );

  const img1 = "/Images/Back-ground-images/(4)-2.png";
  const img2 = "/Images/Back-ground-images/4.jpg";

  return (
    <>
      <HeroSection />
      <MissionSection
        title={missionTitle}
        description={missionDescription}
        button={true}
        img1={img1}
        img2={img2}
      />
      <ServicesSection />
      <ReviewsSection />
      <CtaSection />
    </>
  );
}

export default HomePage;
