import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  // Get the current URL pathname from React Router
  const { pathname } = useLocation();

  // Every time the pathname changes (i.e., navigation occurs),
  // scroll the window to the top-left corner (0, 0)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component does not render any visible UI
  return null;
}

export default ScrollToTop;
