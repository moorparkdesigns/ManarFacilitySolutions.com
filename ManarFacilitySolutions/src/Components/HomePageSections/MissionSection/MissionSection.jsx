import { Link } from "react-router-dom";
import "./MissionSection.css";

function MissionSection({
  img0,
  title,
  description,
  button,
  img1,
  img2,
  style,
}) {
  const isStyle2 = style === "style-2";
  return (
    <div className={`our-mission container-2 ${isStyle2 ? "style-2" : ""}`}>
      {/* If style-2, reverse the order: image first, then text */}
      {isStyle2 ? (
        <>
          <div className="img">
            <picture>
              <source
                media="(min-width: 577px) and (max-width: 991px)"
                srcSet={img1}
              />
              <img src={img2} alt="Our mission image" />
            </picture>
          </div>
          <div className="text">
            <div className="img-text">
              {img0 && <img src={img0} alt="icon" />}
              <h1>{title}</h1>
            </div>
            <p>{description}</p>
            {button && (
              <Link to="/About">
                <button>About Us</button>
              </Link>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="text">
            <div className="img-text">
              {img0 && <img src={img0} alt="icon" />}
              <h1>{title}</h1>
            </div>
            <p>{description}</p>
            {button && (
              <Link to="/About">
                <button>About Us</button>
              </Link>
            )}
          </div>
          <div className="img">
            <picture>
              <source
                media="(min-width: 577px) and (max-width: 991px)"
                srcSet={img1}
              />
              <img src={img2} alt="Our mission image" />
            </picture>
          </div>
        </>
      )}
    </div>
  );
}

export default MissionSection;
