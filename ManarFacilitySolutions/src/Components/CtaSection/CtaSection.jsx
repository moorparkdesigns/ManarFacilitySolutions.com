import { Link } from "react-router-dom";
import "./CtaSection.css";

function CtaSection() {
  return (
    <div className="cta">
      <div className="container">
        <div className="background-content ">
          <h1>Book our services today!</h1>
          <p>
            Contact us at <Link to="tel:3529662627">(352)-966-2627</Link> or
            click the button below to book your first cleaning service today.
          </p>
          <Link to="/Contact">
            <button>Get A Free Quote</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
