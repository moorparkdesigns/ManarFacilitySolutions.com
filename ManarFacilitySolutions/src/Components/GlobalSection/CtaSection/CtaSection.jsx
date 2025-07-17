import { Link } from "react-router-dom";
import "./CtaSection.css";

function CtaSection() {
  return (
    // Main container for the call-to-action section
    <div className="cta">
      <div className="container">
        {/* Background content wrapper */}
        <div className="background-content ">
          {/* Primary call-to-action heading */}
          <h1>Book our services today!</h1>
          {/* Description paragraph with clickable phone link */}
          <p>
            Contact us at <Link to="tel:3529662627">(352)-966-2627</Link> or
            click the button below to book your first cleaning service today.
          </p>
          {/* Button linking to the Contact page for booking */}
          <Link to="/Contact">
            <button>Get A Free Quote</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
