import HeroSection from "../Components/HomePageSections/HeroSection/HeroSection";
import MissionSection from "../Components/HomePageSections/MissionSection/MissionSection";
import ServicesSection from "../Components/HomePageSections/ServicesSection/ServicesSection";
import ReviewsSection from "../Components/HomePageSections/ReviewsSection/ReviewsSection";
import CtaSection from "../Components/GlobalSection/CtaSection/CtaSection";
import { Helmet } from "react-helmet-async";

// Imported images used in mission section
import Img4_2 from "../assets/Back-ground-images/(4)-2.png"; // Responsive image variant 1
import Img4 from "../assets/Back-ground-images/4.jpg"; // Main image for SEO/social and display

function HomePage() {
  // Content data for the MissionSection with JSX description and images
  const missionContent = {
    title: "Our mission",
    description: (
      <>
        At Manar Facility Solutions, we offer high-quality cleaning services
        while providing a strong foundation of trust and respect for our
        customers.
        <br />
        <br />
        We have experience working with every home style, from apartments to
        multi-family homes. Our core value is to provide you with 5-star
        services and ensure that your every need is taken care of.
        <br />
        <br />
        Schedule a cleaning for your personal or professional space today to
        experience our 5-star services.
      </>
    ),
    img1: Img4_2, // Responsive image variant 1
    img2: Img4, // Main image for SEO/social and display
    button: true, // Show button in MissionSection
  };

  return (
    <>
      {/* SEO meta tags and structured data for homepage */}
      <Helmet key="home-page">
        {/* Primary meta tags for SEO */}
        <title>
          Affordable & Trusted Cleaning Services | Manar Facility Solutions
        </title>
        <meta
          name="description"
          content="Professional residential and commercial cleaning services in Gainesville, Alachua, Newberry, High Springs, Archer and surrounding Florida cities. Book with Manar Facility Solutions today."
        />
        <meta
          name="keywords"
          content="Cleaning services Gainesville FL, Manar Facility Solutions, Commercial Cleaning Alachua, House Cleaning Newberry, Deep Clean High Springs, Yard Work Archer, Residential Cleaning"
        />
        <link rel="canonical" href="https://www.manarfacilitysolutions.com" />

        {/* Open Graph tags for Facebook and social sharing */}
        <meta
          property="og:title"
          content="Manar Facility Solutions | Cleaning Services in Gainesville FL"
        />
        <meta
          property="og:description"
          content="Top-rated cleaning company serving Gainesville, Alachua, Newberry, and more. Trusted professionals for homes and businesses."
        />
        <meta property="og:image" content={missionContent.img2} />
        <meta
          property="og:url"
          content="https://www.manarfacilitysolutions.com"
        />
        <meta property="og:type" content="website" />

        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Manar Facility Solutions | Gainesville Cleaning Experts"
        />
        <meta
          name="twitter:description"
          content="Experienced, professional cleaning team for homes and businesses across Alachua County. Book a free consultation today!"
        />
        <meta name="twitter:image" content={missionContent.img2} />

        {/* Preload main image for better performance */}
        <link rel="preload" as="image" href={missionContent.img2} />

        {/* JSON-LD structured data to improve SEO with LocalBusiness schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Manar Facility Solutions",
            image:
              "https://www.manarfacilitysolutions.com" + missionContent.img2,
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
              "Manar Facility Solutions provides professional cleaning, yard work, and maintenance services in Gainesville, Alachua, Newberry, High Springs, Archer, and nearby Florida cities.",
            areaServed: [
              "Gainesville",
              "Alachua",
              "Newberry",
              "High Springs",
              "Archer",
              "Jonesville",
              "Micanopy",
              "Tioga",
            ],
            priceRange: "$$",
            founder: {
              "@type": "Person",
              name: "NOOR MIAN",
            },
          })}
        </script>
      </Helmet>
      {/* Render main homepage sections in order */}
      <HeroSection /> {/* Hero banner with main site introduction */}
      <MissionSection
        title={missionContent.title}
        description={missionContent.description}
        button={true}
        img1={missionContent.img1}
        img2={missionContent.img2}
      />{" "}
      {/* Mission statement and core values section */}
      <ServicesSection /> {/* Overview of services offered */}
      <ReviewsSection /> {/* Customer testimonials */}
      <CtaSection /> {/* Call to action prompting booking */}
    </>
  );
}

export default HomePage;
