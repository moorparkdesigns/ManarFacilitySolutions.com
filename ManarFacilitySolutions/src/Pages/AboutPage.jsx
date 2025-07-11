import { Helmet } from "react-helmet-async";
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
    Manar Facility Solutions works with an incredible team of hard-working home
    and office cleaners who simply know how to clean– and do it exceedingly
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
      <Helmet key="about-page">
        {/* Primary Meta */}
        <title>About Us | Manar Facility Solutions</title>
        <meta
          name="description"
          content="Founded by a husband and wife team with over 20 years in the custodial field, Manar Facility Solutions offers top-tier residential and commercial cleaning services in Alachua County, Gainesville, Newberry, Archer, High Springs, and surrounding areas."
        />
        <meta
          name="keywords"
          content="Manar Facility Solutions, Cleaning Services, Alachua, Gainesville, Newberry, High Springs, Archer, FL Cleaning Company, Custodial Services, Residential Cleaning, Office Cleaning"
        />
        <link rel="canonical" href="https://manarfacilitysolutions.com/About" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="About Us | Manar Facility Solutions"
        />
        <meta
          property="og:description"
          content="Professional cleaning services in Gainesville, Alachua, Newberry, Archer, and surrounding FL cities. Learn more about our story and team."
        />
        <meta property="og:image" content={img2} />
        <meta
          property="og:url"
          content="https://manarfacilitysolutions.com/About"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | Manar Facility Solutions"
        />
        <meta
          name="twitter:description"
          content="Trusted cleaning experts in Alachua County and nearby cities. Manar Facility Solutions delivers professional home and office cleaning services."
        />
        <meta name="twitter:image" content={img2} />

        {/* Preload important image */}
        <link rel="preload" as="image" href={img2} />

        {/* Schema JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Manar Facility Solutions",
            image: "https://www.manarfacilitysolutions.com" + img2,
            address: {
              "@type": "PostalAddress",
              streetAddress: "5145 SW 75th St #348",
              addressLocality: "Gainesville",
              addressRegion: "FL",
              postalCode: "32608",
              addressCountry: "US",
            },
            telephone: "+1-352-966-2627",
            email: "info@manarhomesevices.com",
            url: "https://www.manarfacilitysolutions.com",
            description:
              "Manar Facility Solutions provides residential and commercial cleaning services in Gainesville, Alachua, Newberry, Archer, High Springs, and other areas in North Central Florida.",
            areaServed: [
              "Gainesville",
              "Alachua",
              "Newberry",
              "High Springs",
              "Archer",
              "Jonesville",
              "Tioga",
              "Micanopy",
            ],
            priceRange: "$$",
            founder: {
              "@type": "Person",
              name: "Husband and Wife Team",
            },
          })}
        </script>
      </Helmet>

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
