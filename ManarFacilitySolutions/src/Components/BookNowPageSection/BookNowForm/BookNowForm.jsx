import React, { useState, useEffect, useCallback } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import GeoapifyAutocomplete from "../../GeoapifyAutocomplete/GeoapifyAutocomplete.jsx";
import styles from "./BookNowForm.module.css";

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
  const [state, handleSubmit] = useForm(FORM_KEY);

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

  const [showToast, setShowToast] = useState(false);
  const [proximity, setProximity] = useState(null);
  const [phoneError, setPhoneError] = useState("");
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const getCountryFromIP = async () => {
      try {
        const ipServices = [
          "https://ipapi.co/json/",
          "https://ip-api.com/json/",
          "https://ipinfo.io/json",
        ];

        for (const service of ipServices) {
          try {
            const response = await fetch(service);
            const data = await response.json();

            let countryCode = null;
            if (data.country_code) {
              countryCode = data.country_code.toLowerCase();
            } else if (data.countryCode) {
              countryCode = data.countryCode.toLowerCase();
            } else if (data.country) {
              countryCode = data.country.toLowerCase();
            }

            if (countryCode) {
              setField("phoneCountry", countryCode);
              return;
            }
          } catch (error) {
            console.warn(`Failed to get country from ${service}:`, error);
            continue;
          }
        }

        setField("phoneCountry", "us");
      } catch (error) {
        console.warn("Error getting country from IP:", error);
        setField("phoneCountry", "us");
      }
    };

    const getProximityFromGeolocation = () => {
      if (!navigator.geolocation) return;

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setProximity({ lat: coords.latitude, lon: coords.longitude });
        },
        (error) => {
          console.warn("Geolocation error:", error);
        }
      );
    };

    getCountryFromIP();
    getProximityFromGeolocation();
  }, [setField]);

  useEffect(() => {
    if (state.succeeded) {
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
        window.location.reload();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

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

  const handleToastClose = () => {
    setShowToast(false);
    window.location.reload();
  };

  return (
    <div className={styles.booknowpageBg}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Booking form</h2>
          <p>
            Based in Gainesville, FL, we serve the greater Alachua County and
            surrounding areas.
          </p>
          <br />
          <p>
            Fill out the form or call us at{" "}
            <a href="tel:3529662627">(352)-966-2627</a>.
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

          <form className={styles.booknowForm} onSubmit={onSubmit}>
            <FormField
              label="Full name"
              required
              fieldName="fullname"
              errorPrefix="Full name"
              errors={state.errors}
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
              errors={state.errors}
            >
              <div style={{ width: "100%" }}>
                <PhoneInput
                  country={formData.phoneCountry}
                  value={formData.phone}
                  onChange={(value, data) => {
                    const digitsOnly = value.replace(/\D/g, "");
                    if (data.countryCode === "us") {
                      let nationalNumber = digitsOnly;
                      if (nationalNumber.startsWith("1")) {
                        nationalNumber = nationalNumber.slice(1);
                      }
                      if (nationalNumber.length > 10) return;
                    } else {
                      if (digitsOnly.length > 15) return;
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
              errors={state.errors}
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
              errors={state.errors}
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
                <ValidationError
                  prefix="Address"
                  field="address"
                  errors={state.errors}
                />
              </div>

              <FormField
                label="Preferred date"
                required
                fieldName="date"
                errorPrefix="Date"
                errors={state.errors}
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
              errors={state.errors}
            >
              <textarea
                id="notes"
                name="notes"
                placeholder="Write additional notes here (optional)"
                value={formData.notes}
                onChange={handleChange}
              />
            </FormField>

            <button
              type="submit"
              className={styles.submitBookingBtn}
              disabled={state.submitting}
            >
              {state.submitting ? (
                <>
                  Submitting
                  <span className={styles.spinner}></span>
                </>
              ) : (
                "Submit Booking"
              )}
            </button>
          </form>
        </div>
      </div>

      {showToast && (
        <div className={styles.formToast}>
          Thank you! Your submission has been completed.
          <button
            type="button"
            onClick={handleToastClose}
            style={{
              marginLeft: "1.5rem",
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "1.3rem",
              cursor: "pointer",
              position: "absolute",
              top: "0.5rem",
              right: "1rem",
            }}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
