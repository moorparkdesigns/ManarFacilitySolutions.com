import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) {
      setShowNavbar(true); // scrolling up
    } else {
      setShowNavbar(false); // scrolling down
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div className={`Navbar ${showNavbar ? "visible" : "hidden"}`}>
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
              <a
                href="https://blog.manarfacilitysolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li>
              <Link to="/Book-Now">
                <button>Book Now</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
