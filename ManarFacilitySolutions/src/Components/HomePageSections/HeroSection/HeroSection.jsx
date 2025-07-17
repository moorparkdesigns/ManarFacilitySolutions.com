import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

// Import background images for different screen sizes
import Desktop1 from "../../../assets/Back-ground-images/1.jpg";
import Desktop2 from "../../../assets/Back-ground-images/2.jpg";
import Desktop3 from "../../../assets/Back-ground-images/3.jpg";
import Desktop4 from "../../../assets/Back-ground-images/4.jpg";

import Tablet1 from "../../../assets/Back-ground-images/1-tablet.png";
import Tablet2 from "../../../assets/Back-ground-images/2-tablet.png";
import Tablet3 from "../../../assets/Back-ground-images/3-tablet.png";
import Tablet4 from "../../../assets/Back-ground-images/4-tablet.png";

import Mobile1 from "../../../assets/Back-ground-images/1-mobile.png";
import Mobile2 from "../../../assets/Back-ground-images/2-mobile.png";
import Mobile3 from "../../../assets/Back-ground-images/3-mobile.png";
import Mobile4 from "../../../assets/Back-ground-images/4-mobile.png";

// Arrays holding background image URLs for different screen sizes
const desktopImages = [Desktop1, Desktop2, Desktop3, Desktop4];

const tabletImages = [Tablet1, Tablet2, Tablet3, Tablet4];

const mobileImages = [Mobile1, Mobile2, Mobile3, Mobile4];

// Helper function to select which set of images to use based on window width
const getImageSet = () => {
  const width = window.innerWidth; // Get current viewport width
  if (width < 768) {
    // Mobile devices (less than 768px wide)
    return mobileImages;
  } else if (width < 1024) {
    // Tablets (between 768px and 1023px)
    return tabletImages;
  } else {
    // Desktop (1024px and above)
    return desktopImages;
  }
};

function HeroSection() {
  // State to keep track of the current image index for background rotation
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to store the current set of images depending on screen size
  const [imageSet, setImageSet] = useState(getImageSet());

  // Effect hook to listen for window resize events and update image set accordingly
  useEffect(() => {
    const handleResize = () => {
      setImageSet(getImageSet()); // Update image set based on new window width
    };

    window.addEventListener("resize", handleResize); // Add event listener on mount
    return () => window.removeEventListener("resize", handleResize); // Clean up on unmount
  }, []);

  // Effect hook to rotate the background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment currentIndex, loop back to 0 when reaching the end of imageSet
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSet.length);
    }, 5000); // Interval set to 5000ms (5 seconds)

    return () => clearInterval(interval); // Clear interval on cleanup to prevent memory leaks
  }, [imageSet]); // Re-run effect if imageSet changes (e.g., on window resize)

  return (
    <div
      className="heroSection"
      // Set background image dynamically using current image from imageSet
      style={{ backgroundImage: `url(${imageSet[currentIndex]})` }}
    >
      <div className="container background-content">
        <div className="text">
          <h1>Professional cleaning services for homes & businesses</h1>
          <p>
            We offer high-quality cleaning services while delivering the utmost
            trust and respect for your home or businesses. At Manar Facility
            Solutions, our team never stops delivering trust and respect – you
            become a part of the family.
          </p>
        </div>
      </div>

      {/* Link wrapping a div styled as a "Book today" button */}
      <div className="img">
        <Link to="Book-Now">
          <div className="Book-today"></div>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
