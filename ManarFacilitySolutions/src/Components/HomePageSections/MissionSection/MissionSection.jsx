import { Link } from "react-router-dom";
import "./MissionSection.css";

// MissionSection component accepts props to render a mission statement section
function MissionSection({
  img0, // Optional small icon image (e.g., logo or symbol)
  title, // Main heading/title text
  description, // Paragraph description text
  button, // Boolean to determine if the "About Us" button should be shown
  img1, // Image source used for specific screen sizes (responsive)
  img2, // Default image source for other screen sizes
  style, // Style variant, e.g. "style-2" to change layout order
}) {
  // Determine if the current style is "style-2" for conditional rendering
  const isStyle2 = style === "style-2";

  return (
    // Wrapper div with conditional class for styling variants
    <div className={`our-mission container-2 ${isStyle2 ? "style-2" : ""}`}>
      {/* If style-2, show image first, then text */}
      {isStyle2 ? (
        <>
          <div className="img">
            <picture>
              {/* Use img1 for medium screen widths (577px - 991px) */}
              <source
                media="(min-width: 577px) and (max-width: 991px)"
                srcSet={img1}
              />
              {/* Fallback/default image */}
              <img src={img2} alt="Our mission image" />
            </picture>
          </div>
          <div className="text">
            <div className="img-text">
              {/* Conditionally render small icon image if img0 is provided */}
              {img0 && <img src={img0} alt="icon" />}
              <h1>{title}</h1>
            </div>
            <p>{description}</p>

            {/* Conditionally render "About Us" button linking to /About page */}
            {button && (
              <Link to="/About">
                <button>About Us</button>
              </Link>
            )}
          </div>
        </>
      ) : (
        /* Default style: text first, then image */
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
