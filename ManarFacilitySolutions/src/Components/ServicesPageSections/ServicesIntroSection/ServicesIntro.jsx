import "./ServicesIntro.css";

// Import service guarantee icons
import Icon7 from "../../../assets/Icons/Icon7.png";
import Icon8 from "../../../assets/Icons/Icon8.png";
import Icon9 from "../../../assets/Icons/Icon9.png";

// Array of service guarantee items with image, title, and description
const guarantees = [
  {
    image: Icon7,
    title: "Commercial Cleaning",
    description:
      "This includes business-operating spaces such as offices, retail spaces and more.",
  },
  {
    image: Icon8,
    title: "Residential Cleaning",
    description:
      "We clean all types of homes, from semi-detached homes and apartments to condos and houses.",
  },
  {
    image: Icon9,
    title: "Specialized Cleaning",
    description:
      "Upon request, we offer specialized cleaning services such as carpet cleaning, window washing, etc.",
  },
];

function ServicesIntro() {
  return (
    <div className="services-intro">
      {/* Heading section with main title and introductory paragraph */}
      <div className="heading">
        <h1>Our Services</h1>
        <p>
          At Manar Facility Solutions, we offer a wide variety of services that
          range from commercial and residential to specialized cleaning.
        </p>
      </div>

      {/* Text/content section that lists the guarantee items */}
      <div className="text">
        <div className="container">
          {/* Map over guarantees array and render each item */}
          {guarantees.map((item, index) => (
            <div className="guarantee-item" key={index}>
              {/* Icon/image for the guarantee item */}
              <img src={item.image} alt={item.title} />
              {/* Title of the service guarantee */}
              <h1>{item.title}</h1>
              {/* Description of the service */}
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesIntro;
