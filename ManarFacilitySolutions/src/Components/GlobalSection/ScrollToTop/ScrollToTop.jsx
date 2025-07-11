// src/Components/GlobalSection/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top-left corner
  }, [pathname]);

  return null; // it doesn't render anything
}

export default ScrollToTop;
