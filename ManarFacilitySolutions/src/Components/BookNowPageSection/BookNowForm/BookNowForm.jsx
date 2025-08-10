import React, { useState, useEffect, useCallback } from "react";
import { ValidationError } from "@formspree/react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import GeoapifyAutocomplete from "../../GeoapifyAutocomplete/GeoapifyAutocomplete.jsx";
import styles from "./BookNowForm.module.css";
import { Link } from "react-router-dom";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function stripNonDigits(value) {
  return value.replace(/\D/g, "");
}

function isValidPhone(phoneValue) {
  const digitsOnly = stripNonDigits(phoneValue);
  return digitsOnly.length >= 7 && digitsOnly.length <= 15; // ITU international standard
}

// Custom hook for form fields
function useFormFields(initial) {
  const [fields, setFields] = useState(initial);

  const handleFieldChange = useCallback((e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
  }, []);
  const setField = useCallback((name, value) => {
    setFields((f) => ({ ...f, [name]: value }));
  }, []);
  return [fields, handleFieldChange, setField];
}

function FormField({
  label,
  required,
  children,
  errorPrefix,
  fieldName,
  errors,
  className = "",
}) {
  return (
    <div className={`${styles.formGroup} ${className}`}>
      <label htmlFor={fieldName}>
        {label} {required && <span className={styles.requiredStar}>*</span>}
      </label>
      {children}
      <ValidationError prefix={errorPrefix} field={fieldName} errors={errors} />
    </div>
  );
}

export default function BookNowForm() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FORM_KEY = import.meta.env.VITE_FORMSPREE_ID;
  const GEOAPIFY_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

  const [formData, handleChange, setField] = useFormFields({
    fullname: "",
    phoneCountry: "us",
    phone: "",
    email: "",
    service: "",
    address: "",
    date: null,
    notes: "",
  });

  const [proximity, setProximity] = useState(null);
  const [phoneError, setPhoneError] = useState("");
  const [animateIn, setAnimateIn] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const getCountryFromIP = async () => {
      const ipServices = [
        "https://ipapi.co/json/",
        "https://ip-api.com/json/",
        "https://ipinfo.io/json",
      ];
      for (const url of ipServices) {
        try {
          const response = await fetch(url);
          const data = await response.json();
          const code =
            data.country_code?.toLowerCase() ||
            data.countryCode?.toLowerCase() ||
            data.country?.toLowerCase();
          if (code) {
            setField("phoneCountry", code);
            return;
          }
        } catch {
          // Fail silently, no console warning
        }
      }
      setField("phoneCountry", "us");
    };

    const getProximityFromGeolocation = () => {
      if (!navigator.geolocation) return;

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setProximity({ lat: coords.latitude, lon: coords.longitude });
        },
        () => {
          // Silently ignore errors
        }
      );
    };

    getCountryFromIP();
    getProximityFromGeolocation();
  }, [setField]);

  const onSubmit = (e) => {
    if (!isValidPhone(formData.phone, formData.phoneCountry)) {
      e.preventDefault();
      setPhoneError(
        formData.phoneCountry === "us"
          ? "US numbers must be exactly 10 digits."
          : "Invalid phone number format."
      );
      return;
    }

    // Let the form submit naturally to Formspree (no e.preventDefault here)
  };

  return (
    <div className={styles.booknowpageBg}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Booking form</h2>
          <p>
            Based in Gainesville, FL, we serve the greater Alachua County and
            surrounding areas in the beautiful state of Florida.
          </p>
          <br />
          <p>
            Fill out the form here or call us at{" "}
            <a href="tel:3529662627">(352)-966-2627 </a> to book a cleaning
            today!
          </p>
        </div>

        <div className={`${styles.right} ${animateIn ? styles.animateIn : ""}`}>
          <h2 className={styles.formTitle}>
            Book a <em>cleaning</em> now.
          </h2>
          <p className={styles.formSubtext}>
            Booking our services has never been easier.
          </p>
          <p>
            Fill out the form below or reach out via our email or phone number
            and we'll get in touch with you soon.
          </p>

          <form
            className={styles.booknowForm}
            action={`https://formspree.io/f/${FORM_KEY}`}
            method="POST"
            onSubmit={onSubmit}
          >
            <FormField
              label="Full name"
              required
              fieldName="fullname"
              errorPrefix="Full name"
            >
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField
              label="Phone number"
              required
              fieldName="phone"
              errorPrefix="Phone"
            >
              <div style={{ width: "100%" }}>
                <PhoneInput
                  country={formData.phoneCountry}
                  value={formData.phone}
                  onChange={(value, data) => {
                    const digitsOnly = value.replace(/\D/g, "");
                    const countryDialCode = data.dialCode || "1";

                    // Remove country code to get national number
                    let nationalNumber = digitsOnly;
                    if (nationalNumber.startsWith(countryDialCode)) {
                      nationalNumber = nationalNumber.slice(
                        countryDialCode.length
                      );
                    }

                    // Enforce maximum 10 digits for national number
                    if (nationalNumber.length > 10) {
                      return; // Don't allow more than 10 digits
                    }

                    // Special handling for US numbers
                    if (data.countryCode === "us") {
                      if (nationalNumber.length > 10) return;
                    } else {
                      // For other countries, still limit to 10 digits after country code
                      if (nationalNumber.length > 10) return;
                    }

                    setField("phone", value);
                    setField("phoneCountry", data.countryCode);
                    setPhoneError("");
                  }}
                  enableLongNumbers
                  autoFormat
                  disableCountryGuess={false}
                  placeholder="+(000)-000-0000"
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
              </div>
            </FormField>

            <FormField
              label="Email address"
              required
              fieldName="email"
              errorPrefix="Email"
            >
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField
              label="Service type"
              required
              fieldName="service"
              errorPrefix="Service"
            >
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
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
            </FormField>

            <div className={`${styles.formGroup} ${styles.addressDateGroup}`}>
              <div>
                <label htmlFor="address">
                  Address <span className={styles.requiredStar}>*</span>
                </label>
                <GeoapifyAutocomplete
                  value={formData.address || ""}
                  onChange={(addr) => setField("address", addr)}
                  proximity={proximity}
                />
                <input
                  type="hidden"
                  name="address"
                  value={formData.address || ""}
                />
                <ValidationError prefix="Address" field="address" />
              </div>

              <FormField
                label="Preferred date"
                required
                fieldName="date"
                errorPrefix="Date"
              >
                <ReactDatePicker
                  selected={formData.date || null}
                  onChange={(d) => setField("date", d)}
                  dateFormat="dd-MM-yyyy"
                  minDate={new Date()}
                  placeholderText="DD-MM-YYYY"
                  className={styles.customDatepicker}
                  name="date"
                  required
                />
                <input
                  type="hidden"
                  name="date"
                  value={
                    formData.date
                      ? formData.date.toISOString().split("T")[0]
                      : ""
                  }
                />
              </FormField>
            </div>

            <FormField
              label="Additional notes"
              required={false}
              fieldName="notes"
              errorPrefix="Notes"
              className={styles.fullWidth}
            >
              <textarea
                id="notes"
                name="notes"
                placeholder="Write additional notes here (optional)"
                value={formData.notes}
                onChange={handleChange}
              />
            </FormField>

            <div>
              <div className={styles.pTextCont}>
                {!checked && (
                  <input type="hidden" name="smsConsent" value="no" />
                )}

                <FormControlLabel
                  onChange={(e) => setChecked(e.target.checked)}
                  control={<Checkbox name="smsConsent" value="yes" />}
                  label="By checking this box, you agree to receive text messages from Manar Facility Solutions related to conversational purposes at the phone number provided above. You may reply STOP to opt-out at any time. Reply HELP for assistance. Messages and data rates may apply. Message frequency will vary."
                  sx={{
                    alignItems: "flex-start",
                    "& .MuiFormControlLabel-label": {
                      fontSize: "0.9rem",
                      color: "#333",
                      lineHeight: 1.4,
                      marginTop: "10px",
                      marginBottom: "20px",
                    },
                  }}
                />
                <div className={styles.pText}>
                  Learn more on our{" "}
                  <Link to="/privacy-policy">Privacy Policy</Link> Page and{" "}
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </div>
              </div>
            </div>

            <button type="submit" className={styles.submitBookingBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
