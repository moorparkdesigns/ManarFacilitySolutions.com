import { Helmet } from "react-helmet-async";
import BookNowForm from "../Components/BookNowPageSection/BookNowForm/BookNowForm";
import "../Components/BookNowPageSection/BookNowForm/BookNowForm.module.css";

// Reuse or customize an image for SEO and social sharing
import Img5 from "../assets/Back-ground-images/5.jpg";
const seoImage = Img5;

function BookNowPage() {
  return (
    <div className="booknowpage-bg">
      {/* SEO metadata for the Book Now page */}
      <Helmet key="book-now-page">
        {/* Primary Meta Tags */}
        <title>Book a Cleaning | Manar Facility Solutions</title>
        <meta
          name="description"
          content="Easily book commercial or residential cleaning services with Manar Facility Solutions. Serving Gainesville and surrounding Florida areas."
        />
        <meta
          name="keywords"
          content="Book cleaning service, Schedule cleaning, Gainesville cleaning appointment, Manar Facility Solutions, Alachua County cleaners"
        />
        <link
          rel="canonical"
          href="https://manarfacilitysolutions.com/BookNow"
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Book a Cleaning | Manar Facility Solutions"
        />
        <meta
          property="og:description"
          content="Schedule your commercial or residential cleaning appointment today. Trusted cleaners in Gainesville, FL."
        />
        <meta property="og:image" content={seoImage} />
        <meta
          property="og:url"
          content="https://manarfacilitysolutions.com/Book-Now"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Book a Cleaning | Manar Facility Solutions"
        />
        <meta
          name="twitter:description"
          content="Professional cleaning appointments available for homes and businesses in Gainesville and nearby Florida areas."
        />
        <meta name="twitter:image" content={seoImage} />

        {/* Preload SEO image */}
        <link rel="preload" as="image" href={seoImage} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScheduleAction",
            name: "Book Cleaning Appointment",
            url: "https://www.manarfacilitysolutions.com/BookNow",
            description:
              "Use our online form to schedule commercial or residential cleaning services in Gainesville, Florida.",
            potentialAction: {
              "@type": "ReserveAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://www.manarfacilitysolutions.com/BookNow",
                inLanguage: "en-US",
                actionPlatform: [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform",
                ],
              },
              result: {
                "@type": "Reservation",
                name: "Cleaning Service Booking",
              },
            },
            provider: {
              "@type": "LocalBusiness",
              name: "Manar Facility Solutions",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5145 SW 75th St #348",
                addressLocality: "Gainesville",
                addressRegion: "FL",
                postalCode: "32608",
                addressCountry: "US",
              },
              telephone: "+1-352-966-2627",
              email: "info@manarhomeservices.com",
              image: "https://www.manarfacilitysolutions.com" + seoImage,
            },
          })}
        </script>
      </Helmet>

      <BookNowForm />
    </div>
  );
}

export default BookNowPage;
