import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AboutIntro from "../Components/AboutPageSections/AboutIntro/AboutIntro";
import MissionSection from "../Components/HomePageSections/MissionSection/MissionSection";
import AboutGuarantee from "../Components/AboutPageSections/AboutGuarantee/AboutGuarantee";
import CtaSection from "../Components/GlobalSection/CtaSection/CtaSection";

// Content data used in the page, including title, description (with JSX), and images
const aboutContent = {
  title: "Our story",
  description: (
    <>
      Our company, Manar Facility Solutions, was founded by a husband and wife
      team who has been in the custodial field for over 20 years.
      <br />
      <br />
      Manar Facility Solutions works with an incredible team of hard-working
      home and office cleaners who simply know how to clean– and do it
      exceedingly well.
      <br />
      <br />
      <Link to="/Book-Now">Book a cleaning</Link> with us today– we’re
      passionate about providing the utmost customer service and cleaning
      solutions for residents and businesses in Alachua.
    </>
  ),
  img1: "/Images/Back-ground-images/(9)-2.png", // Image for responsive use in MissionSection
  img2: "/Images/Back-ground-images/9.jpg", // Main image for SEO/social meta tags
};

function AboutPage() {
  return (
    <>
      {/* Manage SEO and social sharing metadata */}
      <Helmet key="about-page">
        {/* Primary meta tags */}
        <title>
          About Us | Excellence in Cleaning for Over 20 Years | Manar Facility
          Solutions
        </title>
        <meta
          name="description"
          content="Founded by a husband and wife team with over 20 years in the custodial field, Manar Facility Solutions offers top-tier residential and commercial cleaning services in Alachua County, Gainesville, Newberry, Archer, High Springs, and surrounding areas."
        />
        <meta
          name="keywords"
          content="Manar Facility Solutions, Cleaning Services, Alachua, Gainesville, Newberry, High Springs, Archer, FL Cleaning Company, Custodial Services, Residential Cleaning, Office Cleaning"
        />
        <link rel="canonical" href="https://manarfacilitysolutions.com/About" />

        {/* Open Graph tags for Facebook and other social platforms */}
        <meta
          property="og:title"
          content="About Us | Manar Facility Solutions"
        />
        <meta
          property="og:description"
          content="Professional cleaning services in Gainesville, Alachua, Newberry, Archer, and surrounding FL cities. Learn more about our story and team."
        />
        <meta property="og:image" content={aboutContent.img2} />
        <meta
          property="og:url"
          content="https://manarfacilitysolutions.com/About"
        />
        <meta property="og:type" content="website" />

        {/* Twitter card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | Manar Facility Solutions"
        />
        <meta
          name="twitter:description"
          content="Trusted cleaning experts in Alachua County and nearby cities. Manar Facility Solutions delivers professional home and office cleaning services."
        />
        <meta name="twitter:image" content={aboutContent.img2} />

        {/* Preload main image for faster loading */}
        <link rel="preload" as="image" href={aboutContent.img2} />

        {/* JSON-LD structured data for LocalBusiness schema to improve SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Manar Facility Solutions",
            image: "https://www.manarfacilitysolutions.com" + aboutContent.img2,
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
              name: "NOOR MIAN",
            },
          })}
        </script>
      </Helmet>
      {/* Page Sections */}
      <AboutIntro /> {/* Introductory about us section */}
      <MissionSection
        title={aboutContent.title}
        description={aboutContent.description}
        img1={aboutContent.img1}
        img2={aboutContent.img2}
      />{" "}
      {/* Mission/Our Story section with images */}
      <AboutGuarantee /> {/* Section showcasing company guarantees */}
      <CtaSection /> {/* Call-to-action prompting user to book service */}
    </>
  );
}

export default AboutPage;
