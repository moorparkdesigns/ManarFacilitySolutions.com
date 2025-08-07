import _styles from "../Components/Common/Policy.module.css";

export default function TermsPage() {
  return (
    <div className={_styles.containerPolicy}>
      <h1 className={_styles.heading}>
        Terms & Conditions – SMS Communications
      </h1>

      <h2 className={_styles.subheading}>1. Consent for SMS Communication</h2>
      <p className={_styles.paragraph}>
        By providing your mobile number and selecting the SMS opt-in checkbox,
        you consent to receive SMS messages from Manar Facility Solutions.
      </p>
      <p className={_styles.paragraph}>
        Your phone number and consent will <strong>never</strong> be sold or
        shared with third parties for marketing purposes.
      </p>

      <h2 className={_styles.subheading}>2. Types of SMS Communications</h2>
      <p className={_styles.paragraph}>
        If opted in, you may receive messages related to:
      </p>
      <ul className={_styles.list}>
        <li>Appointment confirmations and reminders</li>
        <li>Service updates and notifications</li>
        <li>Customer service interactions</li>
        <li>Occasional promotions (if agreed)</li>
      </ul>

      <h2 className={_styles.subheading}>3. Message Frequency</h2>
      <p className={_styles.paragraph}>
        Message frequency may vary based on your service usage. You may receive
        up to <strong>4 messages per week</strong>.
      </p>

      <h2 className={_styles.subheading}>4. Fees and Charges</h2>
      <p className={_styles.paragraph}>
        Standard message and data rates may apply according to your carrier's
        plan. Manar Facility Solutions is not responsible for these charges.
      </p>

      <h2 className={_styles.subheading}>5. Opt-In Method</h2>
      <ul className={_styles.list}>
        <li>Through our website form by checking the SMS consent box</li>
        <li>By directly contacting our support team</li>
      </ul>

      <h2 className={_styles.subheading}>6. Opt-Out Method</h2>
      <p className={_styles.paragraph}>
        You may opt out of SMS messages at any time by:
      </p>
      <ul className={_styles.list}>
        <li>Replying "STOP" to any SMS message</li>
        <li>
          Contacting our team at{" "}
          <a href="mailto:info@manarhomesevices.com">
            info@manarhomesevices.com
          </a>{" "}
          | Phone: <a href="tel:3529662627">352.966.2627</a>
        </li>
      </ul>

      <h2 className={_styles.subheading}>7. Help / Support</h2>
      <p className={_styles.paragraph}>
        For help, reply with "HELP" to any message or contact us:
      </p>
      <p className={_styles.paragraph}>
        Email:{" "}
        <a href="mailto:info@manarhomesevices.com">info@manarhomesevices.com</a>{" "}
        | Phone: <a href="tel:3529662627">352.966.2627</a>
      </p>

      <h2 className={_styles.subheading}>8. Standard Messaging Disclosures</h2>
      <ul className={_styles.list}>
        <li>Message and data rates may apply</li>
        <li>You may opt out anytime by texting "STOP"</li>
        <li>For assistance, text "HELP"</li>
        <li>Message frequency may vary</li>
        <li>
          See our{" "}
          <a href="/privacy-policy" className={_styles.link}>
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms-and-conditions" className={_styles.link}>
            Terms & Conditions
          </a>{" "}
          pages
        </li>
      </ul>
    </div>
  );
}
