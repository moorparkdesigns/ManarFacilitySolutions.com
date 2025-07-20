import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../../assets/logo.png"; // ✅ Import the logo image

function Navbar() {
  // State to control navbar visibility based on scroll direction
  const [showNavbar, setShowNavbar] = useState(true);

  // Keep track of last scroll position for scroll direction detection
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  // State to control if mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to show navbar when scrolling up, hide when scrolling down
  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) {
      setShowNavbar(true); // User scrolled up — show navbar
    } else {
      setShowNavbar(false); // User scrolled down — hide navbar
    }
    setLastScrollY(window.scrollY); // Update last scroll position
  };

  // Add scroll event listener to control navbar visibility
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Disable page scrolling when mobile menu is open, enable it when closed
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "auto"; // Allow scroll again
    }
  }, [menuOpen]);

  // Automatically close mobile menu if window is resized to desktop width (> 991px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Toggle mobile menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Main navbar container */}
      <div
        className={`Navbar ${showNavbar ? "visible" : "hidden"} ${
          menuOpen ? "hide-navbar" : ""
        }`}
      >
        <div className="container">
          {/* Hamburger menu icon and logo */}
          <div>
            {/* Menu icon triggers opening of mobile menu */}
            <div className="menu-icon" onClick={toggleMenu}>
              <MenuIcon fontSize="large" />
            </div>

            {/* Logo links to homepage; hidden when menu is open */}
            <Link to="/" className={`logo ${menuOpen ? "hidden-logo" : ""}`}>
              <img src={Logo} alt="logo" /> {/* ✅ Imported image used here */}
            </Link>
          </div>

          {/* Desktop navigation menu */}
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
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              {/* External blog link opens in new tab with security attributes */}
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
        {/* Close icon to close the mobile menu */}
        <div className="close-icon" onClick={toggleMenu}>
          <CloseIcon fontSize="large" />
        </div>

        {/* Mobile navigation links; clicking any link closes the menu */}
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
              <Link to="/Contact">Contact</Link>
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

        {/* Logo displayed at the bottom of the mobile menu */}
        <div className="mobile-logo">
          <Link to="/" onClick={toggleMenu}>
            <img src={Logo} alt="logo" />{" "}
            {/* ✅ Imported image used here too */}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
