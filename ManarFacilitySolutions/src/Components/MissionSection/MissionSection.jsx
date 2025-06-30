import { Link } from "react-router-dom";
import "./MissionSection.css";

function MissionSection() {
  return (
    <div className="our-mission container">
      <div>
        <h1>Our mission</h1>
        <p>
          At Manar Facility Solutions, we offer high-quality cleaning services
          while providing a strong foundation of trust and respect for our
          customers. <br />
          <br />
          We have experience working with every home style, from apartments to
          multi-family homes. Our core value is to provide you with 5-star
          services and ensure that your every need is taken care of.
          <br />
          <br />
          Schedule a cleaning for your personal of professional space today to
          experience our 5-star services.
        </p>
        <Link to="/About">
          <button>About Us</button>
        </Link>
      </div>
      <div className="img">
        <img src="/Images/Back-ground-images/2.jpg" alt="image" />
      </div>
    </div>
  );
}

export default MissionSection;
