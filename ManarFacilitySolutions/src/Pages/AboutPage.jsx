import { Link } from "react-router-dom";
import AboutIntro from "../Components/AboutPageSections/AboutIntro/AboutIntro";
import MissionSection from "../Components/HomePageSections/MissionSection/MissionSection";
import AboutGuarantee from "../Components/AboutPageSections/AboutGuarantee/AboutGuarantee";
import CtaSection from "../Components/GlobalSection/CtaSection/CtaSection";

const aboutTitle = "Our story";
const aboutDescription = (
  <>
    Our company, Manar Facility Solutions, was founded by a husband and wife
    team who has been in the custodial field for over 20 years.
    <br />
    <br />
    Manar Facility Solutions works with with an incredible team of hard-working
    home and office cleaners who simply know how to clean– and do it exceedingly
    well.
    <br />
    <br />
    <Link to="/Book-Now">Book a cleaning</Link> with us today– we’re passionate
    about providing the utmost customer service and cleaning solutions for
    residents and businesses in Alachua.
  </>
);

const img1 = "/Images/Back-ground-images/(9)-2.png";
const img2 = "/Images/Back-ground-images/9.jpg";

function AboutPage() {
  return (
    <>
      <AboutIntro />
      <MissionSection
        title={aboutTitle}
        description={aboutDescription}
        img1={img1}
        img2={img2}
      />
      <AboutGuarantee />
      <CtaSection />
    </>
  );
}

export default AboutPage;
