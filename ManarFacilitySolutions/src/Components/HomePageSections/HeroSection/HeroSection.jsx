import { useEffect, useState } from "react";
import "./HeroSection.css";

// Define image sets for different screen sizes
const desktopImages = [
  "/Images/Back-ground-images/1.jpg",
  "/Images/Back-ground-images/2.jpg",
  "/Images/Back-ground-images/3.jpg",
  "/Images/Back-ground-images/4.jpg",
];

const tabletImages = [
  "/Images/Back-ground-images/1-tablet.png",
  "/Images/Back-ground-images/2-tablet.png",
  "/Images/Back-ground-images/3-tablet.png",
  "/Images/Back-ground-images/4-tablet.png",
];

const mobileImages = [
  "/Images/Back-ground-images/1-mobile.png",
  "/Images/Back-ground-images/2-mobile.png",
  "/Images/Back-ground-images/3-mobile.png",
  "/Images/Back-ground-images/4-mobile.png",
];

// Helper function to determine which image set to use
const getImageSet = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return mobileImages;
  } else if (width < 1024) {
    return tabletImages;
  } else {
    return desktopImages;
  }
};

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSet, setImageSet] = useState(getImageSet());

  // Update image set on screen resize
  useEffect(() => {
    const handleResize = () => {
      setImageSet(getImageSet());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSet.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [imageSet]);

  return (
    <div
      className="heroSection"
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
      <div className="img">
        <div className="Book-today"></div>
      </div>
    </div>
  );
}

export default HeroSection;
