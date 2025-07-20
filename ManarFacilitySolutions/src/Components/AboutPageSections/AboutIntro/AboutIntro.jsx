import "./AboutIntro.css";

function AboutIntro() {
  return (
    // Main wrapper for the About Intro section
    <div className="about-intro">
      <div className="container">
        {/* Content area with background styling */}
        <div className="background-content ">
          <h1>About us</h1>
          <p>
            Founded by a husband and wife team who has been in the custodial
            field for over 20 years, Manar Facility Solutions provides
            high-quality cleaning services in Alachua County, while maintaining
            the utmost respect and care for our clients, from businesses to
            homeowners.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
