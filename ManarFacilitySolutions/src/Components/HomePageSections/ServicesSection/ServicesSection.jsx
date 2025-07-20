import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";

// Importing service icons and background images
import Icon1 from "../../../assets/Icons/Icon1.png";
import Icon2 from "../../../assets/Icons/Icon2.png";
import Icon3 from "../../../assets/Icons/Icon3.png";

import BG5Desktop from "../../../assets/Back-ground-images/5.jpg";
import BG5Tablet from "../../../assets/Back-ground-images/5-tablet.png";
import BG5Mobile from "../../../assets/Back-ground-images/5-mobile.png";

import BG6Desktop from "../../../assets/Back-ground-images/6.jpg";
import BG6Tablet from "../../../assets/Back-ground-images/6-tablet.png";
import BG6Mobile from "../../../assets/Back-ground-images/6-mobile.png";

import BG7Desktop from "../../../assets/Back-ground-images/7.jpg";
import BG7Tablet from "../../../assets/Back-ground-images/7-tablet.png";
import BG7Mobile from "../../../assets/Back-ground-images/7-mobile.png";

// Static services data including title, icon, responsive background images, and link
const servicesData = [
  {
    title: "Commercial Cleaning",
    icon: Icon1,
    background: {
      desktop: BG5Desktop,
      tablet: BG5Tablet,
      mobile: BG5Mobile,
    },
    link: "/Services",
  },
  {
    title: "Residential Cleaning",
    icon: Icon2,
    background: {
      desktop: BG6Desktop,
      tablet: BG6Tablet,
      mobile: BG6Mobile,
    },
    link: "/Services",
  },
  {
    title: "Specialized Cleaning",
    icon: Icon3,
    background: {
      desktop: BG7Desktop,
      tablet: BG7Tablet,
      mobile: BG7Mobile,
    },
    link: "/Services",
  },
];

// Helper function to select the appropriate background image based on current window width
const getResponsiveImage = (background) => {
  const width = window.innerWidth;
  if (width < 768) return background.mobile; // For small screens (mobile)
  if (width < 1024) return background.tablet; // For medium screens (tablet)
  return background.desktop; // For large screens (desktop and up)
};

function ServicesSection() {
  // State to hold services data with the current responsive background image applied
  const [responsiveServices, setResponsiveServices] = useState([]);

  // Effect hook to update background images on component mount and window resize
  useEffect(() => {
    // Function to update each service's background image according to screen size
    const updateResponsiveImages = () => {
      const updated = servicesData.map((service) => ({
        ...service,
        backgroundImage: getResponsiveImage(service.background),
      }));
      setResponsiveServices(updated); // Update state with responsive images
    };

    updateResponsiveImages(); // Call once on initial render

    // Add window resize event listener to update images dynamically
    window.addEventListener("resize", updateResponsiveImages);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateResponsiveImages);
  }, []);

  return (
    <div className="ServicesSection">
      <div className="container-2">
        <h1>Services we offer</h1>
        <div className="content">
          {/* Render a card for each service with its responsive background and icon */}
          {responsiveServices.map((service, index) => (
            <Link to={service.link} key={index} className="card-link">
              <div
                className="service-card"
                style={{
                  backgroundImage: `url(${service.backgroundImage})`, // Set responsive background
                }}
              >
                <div className="card-content">
                  {/* Service icon */}
                  <img src={service.icon} alt={`${service.title} Icon`} />
                  {/* Service title */}
                  <h1>{service.title}</h1>
                  {/* Prompt text */}
                  <span>Click to learn more</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
