import { Link } from "react-router-dom";
import "./Footer.css";

// Importing the logo using a relative path
import Logo from "../../../assets/logo.png";

function Footer() {
  return (
    // Main footer container
    <div className="footer">
      <div className="holder">
        <div className="container">
          {/* Logo section with link to home page */}
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          {/* Contact info and navigation links */}
          <div className="content">
            {/* Contact phone number and email */}
            <span>
              <ul>
                <li>
                  <a href="tel:3529662627">352.966.2627</a>
                </li>
                <li>
                  {" "}
                  <a href="mailto:info@manarhomesevices.com">
                    info@manarhomesevices.com
                  </a>
                </li>
              </ul>
            </span>

            {/* Physical address */}
            <span>5145 SW 75th St #348, Gainesville, FL 32608 USA</span>

            {/* Navigation menu links */}
            <span>
              <ul>
                <li>
                  {/* Internal link to Services page */}
                  <Link to="/Services">Services</Link>
                </li>
                <li>
                  {/* Internal link to About page */}
                  <Link to="/About">About</Link>
                </li>
                <li>
                  {/* Internal link to Contact page */}
                  <Link to="/Contact">Contact</Link>
                </li>
                <li>
                  {/* External link to the blog - opens in new tab with security attributes */}
                  <a
                    href="https://blog.manarfacilitysolutions.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  {/* Internal link to Book Now page */}
                  <Link to="/Book-Now">Book Now</Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
        {/* Footer bottom: legal links and rights */}
        <div className="footer-bottom container">
          <p>
            <span>
              © {new Date().getFullYear()} Manar Facility Solutions. All rights
            </span>
            <span>
              reserved. <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
