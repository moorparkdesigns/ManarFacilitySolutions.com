import { Link } from "react-router-dom";
import "./MissionSection.css";

function MissionSection({ title, description, button, img1, img2 }) {
  return (
    <div className="our-mission container-2">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        {button && (
          <Link to="/About">
            <button>About Us</button>
          </Link>
        )}
      </div>
      <div className="img">
        <picture>
          {/* Tablet image */}
          <source media="(max-width: 991px)" srcSet={img1} />

          {/* Default (desktop) image */}
          <img src={img2} alt="Our mission image" />
        </picture>
      </div>
    </div>
  );
}

export default MissionSection;
