import "./ServicesSection.css";

function ServicesSection() {
  return (
    <div className="ServicesSection">
      <div className="container">
        <h1>Services we offer</h1>
        <div className="content">
          <div
            style={{
              backgroundImage: `url("/Images/Back-ground-images/5.jpg")`,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url("/Images/Back-ground-images/6.jpg")`,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url("/Images/Back-ground-images/7.jpg")`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
