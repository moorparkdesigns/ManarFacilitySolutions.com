import { Helmet } from "react-helmet-async";
import ServicesIntro from "../Components/ServicesPageSections/ServicesIntroSection/ServicesIntro.jsx";
import CtaSection from "../Components/GlobalSection/CtaSection/CtaSection.jsx";
import MissionSection from "../Components/HomePageSections/MissionSection/MissionSection.jsx";

const img2 = "/Images/Back-ground-images/5.jpg"; // use a representative image

const missionSections = {
  commercial: {
    title: "Commercial",
    description: (
      <>
        We offer general cleaning services to a variety of commercial and
        business-operating spaces, including offices, retail spaces and more.
        <br />
        <br />
        Whether you want to fix an area of your retail space, deep clean an
        office or add value to your commercial spaces through upgrades, our team
        is eager to help you tackle your professional cleaning to-do list.
        <br />
        <br />
        Based in Gainesville, Florida, we offer services within the greater
        Alachua County and surrounding areas.
      </>
    ),
    img0: "/Images/Icons/Icon7.png",
    img1: "/Images/Back-ground-images/(9)-2.png",
    img2: "/Images/Back-ground-images/9.jpg",
  },
  residential: {
    title: "Residential ",
    description: (
      <>
        Whether you’re moving in, moving out, or simply in need of a deep clean,
        we offer a variety of handyman services for all your residential needs,
        including general repairs, tile work and cabinetry.
        <br />
        <br />
        We can paint and pressure wash surfaces, deep clean household
        appliances, install bulbs and fans and check for squeaky doors or
        windows. We’ll even hang up your TVs and Art, and assemble that
        bookcase!
        <br />
        <br />
        Call us today to learn more about our residential cleaning services or
        book a cleaning below.
      </>
    ),
    img0: "/Images/Icons/Icon8.png",
    img1: "/Images/Back-ground-images/(1)-2.png",
    img2: "/Images/Back-ground-images/1.jpg",
  },
  specialized: {
    title: "Specialized",
    description: (
      <>
        Descriptions above don’t exactly fit your needs? We also offer
        specialized cleaning services upon request, such as upholstry cleaning,
        window washing and more.
        <br />
        <br />
        Looking to spice up your outdoor lawn or add curb appeal to your home or
        commercial space? We also offer landscape maintenance services as well.
        We can help with planting, mowing, edging, and hardscaping.
        <br />
        <br />
        Meet your maintenance goals with us today! Call us to learn more about
        our services or book a cleaning below.
      </>
    ),
    img0: "/Images/Icons/Icon9.png",
    img1: "/Images/Back-ground-images/(7)-2.png",
    img2: "/Images/Back-ground-images/7.jpg",
  },
};

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
      {Object.values(missionSections).map((section, index) => (
        <MissionSection
          key={index}
          img0={section.img0}
          title={section.title}
          description={section.description}
          img1={section.img1}
          img2={section.img2}
          style={index === 1 ? "style-2" : ""}
        />
      ))}
      <CtaSection />
    </>
  );
}

export default ServicesPage;
