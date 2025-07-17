import "./AboutGuarantee.css";

// Import images using relative paths
import Icon4 from "../../../assets/Icons/Icon4.png";
import Icon5 from "../../../assets/Icons/Icon5.png";
import Icon6 from "../../../assets/Icons/Icon6.png";

// Array of guarantee items with image, title, and description
const guarantees = [
  {
    image: Icon4,
    title: "100% satisfaction",
    description:
      "We hire skilled cleaners who are professional and committed to high-quality work.",
  },
  {
    image: Icon5,
    title: "A one-stop shop",
    description:
      "Our team is friendly and efficient. This is what you need for all of your home projects.",
  },
  {
    image: Icon6,
    title: "Free consultations",
    description:
      "We are more than excited to give you cost-effective, reliable solutions to get your space clean and quick.",
  },
];

function AboutGuarantee() {
  return (
    // Wrapper for the guarantee section
    <div className="about-garantee">
      {/* Heading section with title and intro paragraph */}
      <div className="heading">
        <h1>Our guarantees</h1>
        <p>
          When you’re a Manar Facility Solutions customer, you become a part of
          the family. See what we guarantee for our customers below.
        </p>
      </div>

      {/* Container for guarantee items */}
      <div className="text">
        <div className="container">
          {/* Map over guarantees array to render each guarantee */}
          {guarantees.map((item, index) => (
            <div className="guarantee-item" key={index}>
              {/* Guarantee icon */}
              <img src={item.image} alt={item.title} />
              {/* Guarantee title */}
              <h1>{item.title}</h1>
              {/* Guarantee description */}
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutGuarantee;
