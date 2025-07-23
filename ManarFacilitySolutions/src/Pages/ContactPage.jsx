import { Helmet } from "react-helmet-async";
import ContactSection from "../Components/ContactSection/ContactSection.jsx";
import "../Components/ContactSection/ContactSection.module.css";

// Representative image for social previews and SEO (you can change this if needed)
import Img5 from "../assets/Back-ground-images/5.jpg"; // same image used in ServicesPage
const seoImage = Img5;

function ContactPage() {
  return (
    <div className="booknowpage-bg">
      {/* SEO metadata for the Contact page */}
      <Helmet key="contact-page">
        {/* Primary meta tags */}
        <title>Contact Us | Manar Facility Solutions</title>
        <meta
          name="description"
          content="Get in touch with Manar Facility Solutions for professional cleaning services in Gainesville, Alachua County, and nearby areas. We're here to help!"
        />
        <meta
          name="keywords"
          content="Contact Manar Facility Solutions, Gainesville cleaning contact, Alachua County cleaners, get a quote, book a service, cleaning inquiry"
        />
        <link
          rel="canonical"
          href="https://manarfacilitysolutions.com/Contact"
        />

        {/* Open Graph for social sharing */}
        <meta
          property="og:title"
          content="Contact Us | Manar Facility Solutions"
        />
        <meta
          property="og:description"
          content="Reach out to Manar Facility Solutions for top-quality commercial and residential cleaning services in Gainesville, FL."
        />
        <meta property="og:image" content={seoImage} />
        <meta
          property="og:url"
          content="https://manarfacilitysolutions.com/Contact"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | Manar Facility Solutions"
        />
        <meta
          name="twitter:description"
          content="Contact us for trusted and affordable cleaning services in Gainesville and the surrounding areas."
        />
        <meta name="twitter:image" content={seoImage} />

        {/* Preload image for performance */}
        <link rel="preload" as="image" href={seoImage} />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us",
            description:
              "Reach out to Manar Facility Solutions for inquiries, quotes, or to book your next cleaning service.",
            url: "https://www.manarfacilitysolutions.com/Contact",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.manarfacilitysolutions.com/Contact",
            },
            publisher: {
              "@type": "Organization",
              name: "Manar Facility Solutions",
              logo: {
                "@type": "ImageObject",
                url: "https://www.manarfacilitysolutions.com/logo.png", // update with your actual logo path
              },
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-352-966-2627",
              contactType: "Customer Service",
              areaServed: ["US", "Florida", "Gainesville", "Alachua County"],
              availableLanguage: ["English"],
            },
          })}
        </script>
      </Helmet>

      {/* Contact form content */}
      <ContactSection />
    </div>
  );
}

export default ContactPage;
