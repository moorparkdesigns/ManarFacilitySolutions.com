import _styles from "../Components/Common/Policy.module.css";
import { Helmet } from "react-helmet-async";
import Img5 from "../assets/Back-ground-images/5.jpg";

export default function PrivacyPolicyPage() {
  return (
    <div className={_styles.containerPolicy}>
      <Helmet key="privacy-policy-page">
        <title>Privacy Policy | Manar Facility Solutions</title>
        <meta
          name="description"
          content="Review the privacy policy of Manar Facility Solutions, outlining how we collect, use, and protect your personal data and communication preferences."
        />
        <meta
          name="keywords"
          content="Privacy Policy, Manar Facility Solutions privacy, SMS consent, data usage, data protection, Gainesville cleaning services"
        />
        <link
          rel="canonical"
          href="https://manarfacilitysolutions.com/privacy-policy"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Privacy Policy | Manar Facility Solutions"
        />
        <meta
          property="og:description"
          content="Learn how Manar Facility Solutions protects your personal information and respects your privacy and communication preferences."
        />
        <meta property="og:image" content={Img5} />
        <meta
          property="og:url"
          content="https://manarfacilitysolutions.com/privacy-policy"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Privacy Policy | Manar Facility Solutions"
        />
        <meta
          name="twitter:description"
          content="See how Manar Facility Solutions collects, uses, and protects customer data including SMS opt-ins."
        />
        <meta name="twitter:image" content={Img5} />

        {/* Preload image */}
        <link rel="preload" as="image" href={Img5} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description:
              "Details on how Manar Facility Solutions collects, uses, and protects personal data and communication preferences.",
            url: "https://manarfacilitysolutions.com/privacy-policy",
          })}
        </script>
      </Helmet>

      <h1 className={_styles.heading}>Privacy Policy</h1>

      <p className={_styles.paragraph}>
        Manar Facility Solutions ("we," "us," or "our") is committed to
        protecting your privacy. This Privacy Policy explains how we collect,
        use, and protect your personal information.
      </p>

      <h2 className={_styles.subheading}>1. Information We Collect</h2>
      <ul className={_styles.list}>
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number (including mobile numbers)</li>
        <li>Address and service location details</li>
        <li>
          Any additional information voluntarily submitted via contact forms
        </li>
      </ul>
      <p className={_styles.paragraph}>
        We may also collect non-personal information via cookies and analytics
        tools.
      </p>

      <h2 className={_styles.subheading}>2. How We Use Your Information</h2>
      <ul className={_styles.list}>
        <li>Provide and manage cleaning and facility services</li>
        <li>Contact you regarding appointments or service updates</li>
        <li>Send SMS communications (with consent)</li>
        <li>Improve customer service and website experience</li>
      </ul>

      <h2 className={_styles.subheading}>3. How We Share Your Information</h2>
      <p className={_styles.paragraph}>
        We do <strong>not</strong> sell, rent, or share phone numbers, mobile
        opt-ins, or SMS consent with third parties or affiliates for marketing
        purposes.
      </p>
      <p className={_styles.paragraph}>
        We may share information with trusted service providers for operational
        purposes or when required by law.
      </p>

      <h2 className={_styles.subheading}>4. SMS Communication Consent</h2>
      <p className={_styles.paragraph}>
        By checking the SMS consent box and providing your number, you agree to
        receive SMS messages from us. You may opt out at any time by replying
        "STOP". For help, reply "HELP" or contact:
      </p>

      <p className={_styles.paragraph}>
        Email:{" "}
        <a href="mailto:info@manarhomesevices.com">info@manarhomesevices.com</a>{" "}
        | Phone: <a href="tel:3529662627">352.966.2627</a>
      </p>

      <h2 className={_styles.subheading}>5. Your Rights</h2>
      <p className={_styles.paragraph}>
        You may request access to or deletion of your personal data by
        contacting us directly.
      </p>

      <h2 className={_styles.subheading}>6. Security</h2>
      <p className={_styles.paragraph}>
        We take appropriate technical and organizational measures to protect
        your data, but no system is completely secure.
      </p>

      <h2 className={_styles.subheading}>7. Updates to This Policy</h2>
      <p className={_styles.paragraph}>
        Any changes to our Privacy Policy will be posted on this page with the
        updated date.
      </p>
    </div>
  );
}
