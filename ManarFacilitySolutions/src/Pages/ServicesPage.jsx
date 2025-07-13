import { Helmet } from "react-helmet-async";
import ServicesIntro from "../Components/ServicesPageSections/ServicesIntroSection/ServicesIntro.jsx";
import CtaSection from "../Components/GlobalSection/CtaSection/CtaSection.jsx";

const img2 = "/Images/Back-ground-images/5.jpg"; // use a representative image

function ServicesPage() {
  return (
    <>
      <Helmet key="services-page">
        {/* Primary Meta Tags */}
        <title>
          Expert Commercial & Residential Cleaning | Manar Facility Solutions
        </title>
        <meta
          name="description"
          content="Explore our commercial, residential, and specialized cleaning services. Serving Gainesville, Alachua County, and surrounding areas with trusted quality and care."
        />
        <meta
          name="keywords"
          content="Commercial Cleaning, Residential Cleaning, Specialized Cleaning, Gainesville, Alachua County, Office Cleaning, Carpet Cleaning, Window Washing, Landscaping, Florida"
        />
        <link
          rel="canonical"
          href="https://manarfacilitysolutions.com/Services"
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Cleaning Services | Manar Facility Solutions"
        />
        <meta
          property="og:description"
          content="Manar Facility Solutions offers professional cleaning services for homes and businesses in Gainesville, FL and surrounding areas."
        />
        <meta property="og:image" content={img2} />
        <meta
          property="og:url"
          content="https://manarfacilitysolutions.com/Services"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cleaning Services | Manar Facility Solutions"
        />
        <meta
          name="twitter:description"
          content="Professional commercial, residential, and specialized cleaning services for Gainesville and nearby cities like Alachua, High Springs, and Newberry."
        />
        <meta name="twitter:image" content={img2} />

        {/* Preload key image */}
        <link rel="preload" as="image" href={img2} />

        {/* Structured Data (Schema) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Cleaning Services",
            provider: {
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
              areaServed: [
                "Gainesville",
                "Alachua",
                "Newberry",
                "High Springs",
                "Archer",
                "Hawthorne",
                "Waldo",
              ],
            },
            serviceType: [
              "Commercial Cleaning",
              "Residential Cleaning",
              "Specialized Cleaning",
              "Upholstery Cleaning",
              "Carpet Cleaning",
              "Window Washing",
              "Landscaping Maintenance",
            ],
          })}
        </script>
      </Helmet>

      <ServicesIntro />
      <CtaSection />
    </>
  );
}

export default ServicesPage;
