import "./ServicesIntro.css";

const guarantees = [
  {
    image: "/Images/Icons/Icon4.png",
    title: "Commercial Cleaning",
    description:
      "This includes business-operating spaces such as offices, retail spaces and more.",
  },
  {
    image: "/Images/Icons/Icon5.png",
    title: "Residential Cleaning",
    description:
      "We clean all types of homes, from semi-detached homes and apartments to condos and houses.",
  },
  {
    image: "/Images/Icons/Icon6.png",
    title: "Specialized Cleaning",
    description:
      "Upon request, we offer specialized cleaning services such as carpet cleaning, window washing, etc.",
  },
];

function ServicesIntro() {
  return (
    <div className="services-intro">
      <div className="heading">
        <h1>Our Services</h1>
        <p>
          At Manar Facility Solutions, we offer a wide variety of services that
          range from commercial and residential to specialized cleaning.
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

export default ServicesIntro;
