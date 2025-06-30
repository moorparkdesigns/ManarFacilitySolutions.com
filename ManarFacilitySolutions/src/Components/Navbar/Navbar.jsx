import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/Images/logo.png" alt="logo" />
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Conact">Contact</Link>
            </li>
            <li>
              <button>
                <Link to="/Conact">Book Now</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
