import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Disable scroll on body when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  // 👇 Automatically close menu if screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Main navbar - hidden when menu is open */}
      <div
        className={`Navbar ${showNavbar ? "visible" : "hidden"} ${
          menuOpen ? "hide-navbar" : ""
        }`}
      >
        <div className="container">
          {/* Hamburger icon and logo */}
          <div>
            <div className="menu-icon" onClick={toggleMenu}>
              <MenuIcon fontSize="large" />
            </div>
            <Link to="/" className={`logo ${menuOpen ? "hidden-logo" : ""}`}>
              <img src="/Images/logo.png" alt="logo" />
            </Link>
          </div>

          {/* Desktop menu */}
          <ul className="nav-links desktop-menu">
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

      {/* Full-screen slide-out mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={toggleMenu}>
          <CloseIcon fontSize="large" />
        </div>

        <div className="mobile-nav">
          <ul>
            <li onClick={toggleMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/Services">Services</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/About">About</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/Conact">Contact</Link>
            </li>
            <li onClick={toggleMenu}>
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

        {/* Logo at the bottom of mobile menu */}
        <div className="mobile-logo">
          <Link to="/" onClick={toggleMenu}>
            <img src="/Images/logo.png" alt="logo" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
