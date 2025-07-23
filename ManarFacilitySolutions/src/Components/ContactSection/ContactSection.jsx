import React, { useState, useEffect } from "react";
import styles from "./ContactSection.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Import SVGs
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import locationIcon from "../../assets/icons/location.svg";

const FORM_KEY = import.meta.env.VITE_FORMSPREE_ID;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    message: "",
    phoneCountry: "us",
  });

  const [phoneError, setPhoneError] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [proximity, setProximity] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const getCountryFromIP = async () => {
      const services = [
        "https://ipapi.co/json/",
        "https://ip-api.com/json/",
        "https://ipinfo.io/json",
      ];
      for (const url of services) {
        try {
          const res = await fetch(url);
          const data = await res.json();
          const countryCode =
            data.country_code?.toLowerCase() ||
            data.countryCode?.toLowerCase() ||
            data.country?.toLowerCase();
          if (countryCode) {
            setFormData((f) => ({ ...f, phoneCountry: countryCode }));
            break;
          }
        } catch {
          // No console warning
        }
      }
      setFormData((f) => ({ ...f, phoneCountry: "us" }));
    };

    getCountryFromIP();

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setProximity({ lat: coords.latitude, lon: coords.longitude });
      },
      () => {
        // Silently ignore errors
      }
    );
  }, []);

  const stripNonDigits = (val) => val.replace(/\D/g, "");

  const isValidPhone = (value, country) => {
    const digits = stripNonDigits(value);
    if (country === "us") {
      const national = digits.startsWith("1") ? digits.slice(1) : digits;
      return national.length === 10;
    }
    return digits.length > 0 && digits.length <= 15;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handlePhoneChange = (value, data) => {
    setFormData((f) => ({
      ...f,
      phone: value,
      phoneCountry: data.countryCode,
    }));
    setPhoneError("");
  };

  const onSubmit = (e) => {
    if (!isValidPhone(formData.phone, formData.phoneCountry)) {
      e.preventDefault();
      setPhoneError(
        formData.phoneCountry === "us"
          ? "US numbers must be exactly 10 digits."
          : "Invalid phone number format."
      );
    }
  };

  return (
    <div className={`${styles.contactPage} container`}>
      <h1 className={styles.head}>Contact us</h1>
      <p className={styles.intro}>
        Reach out via email or phone today; we’re happy to help with any
        questions or concerns you may have for your cleaning needs.
      </p>

      <div className={styles.contactInfoWrapper}>
        <div className={styles.contactInfo}>
          <div className={styles.left}>
            <ul>
              <li>
                <img src={phoneIcon} alt="phone" className={styles.icon} />
                <a href="tel:3529662627">352.966.2627</a>
              </li>
              <li>
                <img src={emailIcon} alt="email" className={styles.icon} />
                <a href="mailto:info@marathonservices.com">
                  info@marathonservices.com
                </a>
              </li>
              <li>
                <img
                  src={locationIcon}
                  alt="location"
                  className={styles.icon}
                />
                <p>
                  5145 SW 75th St #348,
                  <br />
                  Gainesville, FL 32608 USA
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.horiDivider}></div>
          <div className={styles.verticalDivider}></div>

          <div className={styles.right}>
            <p className={styles.tableHead}>Hours of operation</p>
            <div className={styles.hoursTable}>
              <div>
                <p>Sunday</p>
                <p>Closed</p>
              </div>
              {isMobile ? (
                <>
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ].map((day) => (
                    <div key={day}>
                      <p>{day}</p>
                      <p>9:00am - 7:00pm</p>
                    </div>
                  ))}
                </>
              ) : (
                <div>
                  <p>Monday - Saturday</p>
                  <p>9:00am - 7:00pm</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.getInTouch}>
          Get in <em>touch</em> with us!
        </h1>
        <b>We’re happy to help with any questions or concerns!</b>
        <p>
          Fill out the form below or reach out via our email or phone number and
          we’ll get in touch with you soon.
        </p>

        <form
          className={styles.contactForm}
          action={`https://formspree.io/f/${FORM_KEY}`}
          method="POST"
          onSubmit={onSubmit}
        >
          <div className={styles.rowGroup}>
            <div className={styles.formGroup}>
              <label htmlFor="name">
                Full name <span className={styles.requiredStar}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">
                Phone number <span className={styles.requiredStar}>*</span>
              </label>
              <PhoneInput
                country={formData.phoneCountry || "us"}
                value={formData.phone}
                onChange={handlePhoneChange}
                enableLongNumbers
                autoFormat
                disableCountryGuess={false}
                countryCodeEditable={true}
                inputProps={{
                  name: "phone",
                  required: true,
                  style: { width: "100%" },
                  autoComplete: "off",
                }}
                placeholder="+1 (000) 000-0000"
                containerStyle={{ width: "100%" }}
                inputStyle={{ width: "100%" }}
              />
              {phoneError && (
                <span style={{ color: "red", fontSize: "0.9rem" }}>
                  {phoneError}
                </span>
              )}
            </div>
          </div>

          <div className={styles.rowGroup}>
            <div className={styles.formGroup}>
              <label htmlFor="email">
                Email address <span className={styles.requiredStar}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="topic">
                Topic <span className={styles.requiredStar}>*</span>
              </label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
              >
                <option value="">Select a topic</option>
                <option value="Commercial Cleaning">Commercial Cleaning</option>
                <option value="Residential Cleaning">
                  Residential Cleaning
                </option>
                <option value="Deep or Specialized Cleaning">
                  Deep or Specialized Cleaning
                </option>
                <option value="Move-In / Move-Out Cleaning">
                  Move-In / Move-Out Cleaning
                </option>
                <option value="Carpet & Upholstery Cleaning">
                  Carpet & Upholstery Cleaning
                </option>
                <option value="Window Cleaning">Window Cleaning</option>
                <option value="Other / General Inquiry">
                  Other / General Inquiry
                </option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">
              Message <span className={styles.requiredStar}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Hidden Formspree fields */}
          <input type="hidden" name="_captcha" value="true" />
          <input
            type="hidden"
            name="_next"
            value="https://manarfacilitysolutions.com/thank-you"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
