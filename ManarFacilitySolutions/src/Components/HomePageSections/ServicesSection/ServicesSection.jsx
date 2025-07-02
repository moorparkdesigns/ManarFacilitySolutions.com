import { Link } from "react-router-dom";
import "./ServicesSection.css";

function ServicesSection() {
  const services = [
    {
      title: "Commercial Cleaning",
      icon: "/Images/Icons/Icon1.png",
      background: "/Images/Back-ground-images/5.jpg",
      link: "/Services",
    },
    {
      title: "Residential Cleaning",
      icon: "/Images/Icons/Icon2.png",
      background: "/Images/Back-ground-images/6.jpg",
      link: "/Services",
    },
    {
      title: "Specialized Cleaning",
      icon: "/Images/Icons/Icon3.png",
      background: "/Images/Back-ground-images/7.jpg",
      link: "/Services",
    },
  ];

  return (
    <div className="ServicesSection">
      <div className="container-2">
        <h1>Services we offer</h1>
        <div className="content">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="card-link">
              <div
                style={{
                  backgroundImage: `url(${service.background})`,
                }}
              >
                <div className="card-content">
                  <img src={service.icon} alt="Icon" />
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
