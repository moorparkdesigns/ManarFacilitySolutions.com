import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <Link to="/">
            <img src="/Images/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="content">
          <span>352.966.2627 | info@manarhomesevices.com</span>
          <span>5145 SW 75th St #348, Gainesville, FL 32608 USA</span>
          <span>
            <ul>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <a
                  href="https://blog.manarfacilitysolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link to="/Book-Now">Book Now</Link>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
