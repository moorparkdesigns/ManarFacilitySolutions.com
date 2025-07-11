import HeroSection from "../Components/HomePageSections/HeroSection/HeroSection";
import MissionSection from "../Components/HomePageSections/MissionSection/MissionSection";
import ServicesSection from "../Components/HomePageSections/ServicesSection/ServicesSection";
import ReviewsSection from "../Components/HomePageSections/ReviewsSection/ReviewsSection";
import CtaSection from "../Components/GlobalSection/CtaSection/CtaSection";
import { Helmet } from "react-helmet-async";

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
      <Helmet key="home-page">
        {/* Primary Meta */}
        <title>
          Home | Manar Facility Solutions - Cleaning Services in Gainesville FL
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
        <meta property="og:image" content={img2} />
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
        <meta name="twitter:image" content={img2} />

        {/* Preload Image */}
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
              name: "Husband and Wife Team",
            },
          })}
        </script>
      </Helmet>
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
