import HeroSection from "../Components/HomePageSections/HeroSection/HeroSection";
import MissionSection from "../Components/HomePageSections/MissionSection/MissionSection";
import ServicesSection from "../Components/HomePageSections/ServicesSection/ServicesSection";
import ReviewsSection from "../Components/HomePageSections/ReviewsSection/ReviewsSection";
import CtaSection from "../Components/GlobalSection/CtaSection/CtaSection";
import { Helmet } from "react-helmet-async";

function HomePage() {
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
    img1: "/Images/Back-ground-images/(4)-2.png",
    img2: "/Images/Back-ground-images/4.jpg",
    button: true,
  };

  return (
    <>
      <Helmet key="home-page">
        {/* Primary Meta */}
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

        {/* Open Graph / Facebook */}
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

        {/* Twitter */}
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

        {/* Preload Image */}
        <link rel="preload" as="image" href={missionContent.img2} />

        {/* Schema JSON-LD */}
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
      <HeroSection />
      <MissionSection
        title={missionContent.missionTitle}
        description={missionContent.missionDescription}
        button={true}
        img1={missionContent.img1}
        img2={missionContent.img2}
      />
      <ServicesSection />
      <ReviewsSection />
      <CtaSection />
    </>
  );
}

export default HomePage;
