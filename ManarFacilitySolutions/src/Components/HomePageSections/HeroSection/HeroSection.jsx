import { useEffect, useState } from "react";
import "./HeroSection.css";

const images = [
  "/Images/Back-ground-images/1.jpg",
  "/Images/Back-ground-images/2.jpg",
  "/Images/Back-ground-images/3.jpg",
  "/Images/Back-ground-images/4.jpg",
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="heroSection"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
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
