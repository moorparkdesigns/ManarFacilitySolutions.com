import React, { useState, useEffect } from "react";
import styles from "./ContactSection.module.css";
import { useForm, ValidationError } from "@formspree/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Import SVGs from the assets folder
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import locationIcon from "../../assets/icons/location.svg";

const FORM_KEY = import.meta.env.VITE_FORMSPREE_ID;

const Contact = () => {
  const [state, handleSubmit] = useForm(FORM_KEY);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    message: "",
    phoneCountry: "us",
  });

  const [phoneError, setPhoneError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // adjust as needed
    };

    handleResize(); // Run on first load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function stripNonDigits(value) {
    return value.replace(/\D/g, "");
  }

  function isValidPhone(phoneValue, countryCode) {
    const digitsOnly = stripNonDigits(phoneValue);
    if (countryCode === "us") {
      const digits = digitsOnly.startsWith("1")
        ? digitsOnly.slice(1)
        : digitsOnly;
      return digits.length === 10;
    } else {
      return digitsOnly.length <= 15 && digitsOnly.length > 0;
    }
  }

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
    e.preventDefault();
    if (!isValidPhone(formData.phone, formData.phoneCountry)) {
      setPhoneError(
        formData.phoneCountry === "us"
          ? "US numbers must be exactly 10 digits."
          : "Number exceeds maximum length of 15 digits or is missing."
      );
      return;
    }
    handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowToast(true);
      // Hide toast after 4s, then animate out, then reload
      const toastTimer = setTimeout(() => {
        setShowToast(false);
        setAnimateOut(true);
        setTimeout(() => {
          window.location.reload();
        }, 700); // match animation duration
      }, 4000);
      return () => clearTimeout(toastTimer);
    }
  }, [state.succeeded]);

  return (
    <div
      className={`${styles.contactPage} ${
        animateOut ? styles.fadeOut : ""
      } container`}
    >
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
                  <div>
                    <p>Monday</p>
                    <p>9:00am - 7:00pm</p>
                  </div>
                  <div>
                    <p>Tuesday</p>
                    <p>9:00am - 7:00pm</p>
                  </div>
                  <div>
                    <p>Wednesday</p>
                    <p>9:00am - 7:00pm</p>
                  </div>
                  <div>
                    <p>Thursday</p>
                    <p>9:00am - 7:00pm</p>
                  </div>
                  <div>
                    <p>Friday</p>
                    <p>9:00am - 7:00pm</p>
                  </div>
                  <div>
                    <p>Saturday</p>
                    <p>9:00am - 7:00pm</p>
                  </div>
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
        <div className={styles.getInTouch}>
          Get in <em>touch</em> with us!
        </div>
        <b>We’re happy to help with any questions or concerns!</b>
        <p>
          Fill out the form below or reach out via our email or phone number and
          we’ll get in touch with you soon.
        </p>

        <form className={styles.contactForm} onSubmit={onSubmit}>
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
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">
                Phone number <span className={styles.requiredStar}>*</span>
              </label>
              <PhoneInput
                country={formData.phoneCountry}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "phone",
                  required: true,
                  style: { width: "100%" },
                }}
                containerStyle={{ width: "100%" }}
                inputStyle={{ width: "100%" }}
              />
              {phoneError && (
                <span style={{ color: "red", fontSize: "0.9rem" }}>
                  {phoneError}
                </span>
              )}
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
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
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
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
                <option value="">-- Select a topic --</option>
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
              <ValidationError
                prefix="Topic"
                field="topic"
                errors={state.errors}
              />
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
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {showToast && (
          <div className={styles.formToast}>
            Thank you, your request has been sent!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
