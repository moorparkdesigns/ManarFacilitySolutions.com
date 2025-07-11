import "./AboutGuarantee.css";

const guarantees = [
  {
    image: "/Images/Icons/Icon4.png",
    title: "100% satisfaction",
    description:
      "We hire skilled cleaners who are professional and committed to high-quality work.",
  },
  {
    image: "/Images/Icons/Icon5.png",
    title: "A one-stop shop",
    description:
      "Our team is friendly and efficient. This is what you need for all of your home projects.",
  },
  {
    image: "/Images/Icons/Icon6.png",
    title: "Free consultations",
    description:
      "We are more than excited to give you cost-effective, reliable solutions to get your space clean and quick.",
  },
];

function AboutGuarantee() {
  return (
    <div className="about-garantee">
      <div className="heading">
        <h1>Our guarantees</h1>
        <p>
          When you’re a Manar Facility Solutions customer, you become a part of
          the family. See what we guarantee for our customers below.
        </p>
      </div>

      <div className="text">
        <div className="container">
          {guarantees.map((item, index) => (
            <div className="guarantee-item" key={index}>
              <img src={item.image} alt={item.title} />
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutGuarantee;
