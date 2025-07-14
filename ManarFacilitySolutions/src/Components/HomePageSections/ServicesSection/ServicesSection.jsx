import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";

// Services data with responsive backgrounds
const servicesData = [
  {
    title: "Commercial Cleaning",
    icon: "/Images/Icons/Icon1.png",
    background: {
      desktop: "/Images/Back-ground-images/5.jpg",
      tablet: "/Images/Back-ground-images/5-tablet.png",
      mobile: "/Images/Back-ground-images/5-mobile.png",
    },
    link: "/Services",
  },
  {
    title: "Residential Cleaning",
    icon: "/Images/Icons/Icon2.png",
    background: {
      desktop: "/Images/Back-ground-images/6.jpg",
      tablet: "/Images/Back-ground-images/6-tablet.png",
      mobile: "/Images/Back-ground-images/6-mobile.png",
    },
    link: "/Services",
  },
  {
    title: "Specialized Cleaning",
    icon: "/Images/Icons/Icon3.png",
    background: {
      desktop: "/Images/Back-ground-images/7.jpg",
      tablet: "/Images/Back-ground-images/7-tablet.png",
      mobile: "/Images/Back-ground-images/7-mobile.png",
    },
    link: "/Services",
  },
];

// Helper to choose image by screen width
const getResponsiveImage = (background) => {
  const width = window.innerWidth;
  if (width < 768) return background.mobile;
  if (width < 1024) return background.tablet;
  return background.desktop;
};

function ServicesSection() {
  const [responsiveServices, setResponsiveServices] = useState([]);

  // Update images on load and window resize
  useEffect(() => {
    const updateResponsiveImages = () => {
      const updated = servicesData.map((service) => ({
        ...service,
        backgroundImage: getResponsiveImage(service.background),
      }));
      setResponsiveServices(updated);
    };

    updateResponsiveImages(); // initial call
    window.addEventListener("resize", updateResponsiveImages);
    return () => window.removeEventListener("resize", updateResponsiveImages);
  }, []);

  return (
    <div className="ServicesSection">
      <div className="container-2">
        <h1>Services we offer</h1>
        <div className="content">
          {responsiveServices.map((service, index) => (
            <Link to={service.link} key={index} className="card-link">
              <div
                className="service-card"
                style={{
                  backgroundImage: `url(${service.backgroundImage})`,
                }}
              >
                <div className="card-content">
                  <img src={service.icon} alt={`${service.title} Icon`} />
                  <h1>{service.title}</h1>
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
