import React, { useState, useEffect, useCallback } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import GeoapifyAutocomplete from '../../GeoapifyAutocomplete/GeoapifyAutocomplete.jsx';
import styles from './BookNowForm.module.css';

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
    // For all other countries, also enforce maximum 10 digits after country code
    // Get country dial codes (approximate common ones)
    const commonDialCodes = {
      'ca': '1',    // Canada
      'gb': '44',   // UK
      'au': '61',   // Australia
      'de': '49',   // Germany
      'fr': '33',   // France
      'in': '91',   // India
      'cn': '86',   // China
      'jp': '81',   // Japan
    };
    
    const dialCode = commonDialCodes[countryCode] || '1';
    let nationalNumber = digitsOnly;
    
    // Remove dial code if present
    if (nationalNumber.startsWith(dialCode)) {
      nationalNumber = nationalNumber.slice(dialCode.length);
    }
    
    // Enforce maximum 10 digits for national number
    return nationalNumber.length <= 10 && nationalNumber.length >= 7;
  }
}

// Custom hook for form fields
function useFormFields(initial) {
  const [fields, setFields] = useState(initial);
  const handleFieldChange = useCallback(e => {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
  }, []);
  const setField = useCallback((name, value) => {
    setFields(f => ({ ...f, [name]: value }));
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
    fullname: '',
    phoneCountry: 'us',
    phone: '',
    email: '',
    service: '',
    address: '',
    date: null,
    notes: '',
  });

  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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
          'https://ipapi.co/json/',
          'https://ip-api.com/json/',
          'https://ipinfo.io/json'
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
              setField('phoneCountry', countryCode);
              return;
            }
          } catch (error) {
            console.warn(`Failed to get country from ${service}:`, error);
            continue;
          }
        }

        setField('phoneCountry', 'us');
      } catch (error) {
        console.warn('Error getting country from IP:', error);
        setField('phoneCountry', 'us');
      }
    };

    const getProximityFromGeolocation = () => {
      if (!navigator.geolocation) return;

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setProximity({ lat: coords.latitude, lon: coords.longitude });
        },
        (error) => {
          console.warn('Geolocation error:', error);
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

  // Handle form errors
  useEffect(() => {
    if (state.errors && state.errors.length > 0) {
      const errorMessages = [];
      
      state.errors.forEach(error => {
        if (error.field === 'fullname') {
          errorMessages.push('Please enter your full name');
        } else if (error.field === 'email') {
          errorMessages.push('Please enter a valid email address');
        } else if (error.field === 'phone') {
          errorMessages.push('Please enter a valid phone number');
        } else if (error.field === 'service') {
          errorMessages.push('Please select a service type');
        } else if (error.field === 'address') {
          errorMessages.push('Please enter your address');
        } else if (error.field === 'date') {
          errorMessages.push('Please select a preferred date');
        } else {
          errorMessages.push('Please check your form entries');
        }
      });

      const uniqueErrors = [...new Set(errorMessages)];
      setErrorMessage(uniqueErrors.join(', '));
      setShowErrorToast(true);

      const timer = setTimeout(() => {
        setShowErrorToast(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.errors]);

  const onSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setShowErrorToast(false);
    setPhoneError("");

    // Validate required fields
    const errors = [];
    if (!formData.fullname.trim()) errors.push('Please enter your full name');
    if (!formData.email.trim()) errors.push('Please enter your email address');
    if (!formData.phone.trim()) errors.push('Please enter your phone number');
    if (!formData.service) errors.push('Please select a service type');
    if (!formData.address.trim()) errors.push('Please enter your address');
    if (!formData.date) errors.push('Please select a preferred date');

    // Validate phone number
    if (formData.phone && !isValidPhone(formData.phone, formData.phoneCountry)) {
      const phoneErrorMsg = formData.phoneCountry === "us"
        ? "US numbers must be exactly 10 digits"
        : "Number exceeds maximum length of 15 digits or is missing";
      setPhoneError(phoneErrorMsg);
      errors.push(phoneErrorMsg);
    }

    // Show error toast if there are validation errors
    if (errors.length > 0) {
      setErrorMessage(errors.join(', '));
      setShowErrorToast(true);
      
      const timer = setTimeout(() => {
        setShowErrorToast(false);
      }, 5000);
      
      return;
    }

    handleSubmit(e);
  };

  const handleToastClose = () => {
    setShowToast(false);
    window.location.reload();
  };

  const handleErrorToastClose = () => {
    setShowErrorToast(false);
  };

  return (
    <div className={styles.booknowpageBg}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Booking form</h2>
          <p>
            Based in Gainesville, FL, we serve the greater Alachua County and surrounding areas.
          </p>
          <br />
          <p>
            Fill out the form or call us at{' '}
            <a href="tel:3529662627">(352)-966-2627</a>.
          </p>
        </div>

        <div className={`${styles.right} ${animateIn ? styles.animateIn : ''}`}>
          <h2 className={styles.formTitle}>
            Book a <em>cleaning</em> now.
          </h2>
          <p className={styles.formSubtext}>
            Booking our services has never been easier.
          </p>
          <p>
            Fill out the form below or reach out via our email or phone number and we'll get in touch with you soon.
          </p>

          <form
            className={styles.booknowForm}
            onSubmit={onSubmit}
          >
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
                    const countryDialCode = data.dialCode || "1";
                    
                    // Remove country code to get national number
                    let nationalNumber = digitsOnly;
                    if (nationalNumber.startsWith(countryDialCode)) {
                      nationalNumber = nationalNumber.slice(countryDialCode.length);
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
                <option value="commercial">Commercial</option>
                <option value="residential">Residential</option>
                <option value="specialized">Specialized</option>
                <option value="other">Other</option>
              </select>
            </FormField>

            <div className={`${styles.formGroup} ${styles.addressDateGroup}`}>
              <div>
                <label htmlFor="address">
                  Address <span className={styles.requiredStar}>*</span>
                </label>
                <GeoapifyAutocomplete
                  value={formData.address || ""}
                  onChange={addr => setField('address', addr)}
                  proximity={proximity}
                />
                <input type="hidden" name="address" value={formData.address || ""} />
                <ValidationError prefix="Address" field="address" errors={state.errors} />
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
                  onChange={d => setField('date', d)}
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
                'Submit Booking'
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

      {showErrorToast && (
        <div className={styles.errorToast}>
          {errorMessage}
          <button
            type="button"
            onClick={handleErrorToastClose}
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
