import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/GlobalSection/Navbar/Navbar";
import Footer from "./Components/GlobalSection/Footer/Footer";
import ScrollToTop from "./Components/GlobalSection/ScrollToTop/ScrollToTop";

import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import AboutPage from "./Pages/AboutPage";
import BookNowPage from "./Pages/BookNowPage";
import ContactPage from "./Pages/ContactPage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import TermsPage from "./Pages/T&CPage";

// Layout component wrapping pages with common UI (Navbar and Footer)
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* Main content area */}
      <div className="content">{children}</div>
      <Footer />
    </>
  );
}

function App() {
  // Get current location to control route-based effects and keys
  const location = useLocation();

  return (
    <>
      {/* Scroll to top on route change for better UX */}
      <ScrollToTop />

      {/* Define routes with layout wrapper */}
      <Routes location={location} key={location.pathname}>
        {/* Home page route */}
        <Route
          path="/"
          element={
            <Layout key={location.pathname}>
              <HomePage />
            </Layout>
          }
        />

        {/* Services page route */}
        <Route
          path="/Services"
          element={
            <Layout key={location.pathname}>
              <ServicesPage />
            </Layout>
          }
        />

        {/* About page route */}
        <Route
          path="/About"
          element={
            <Layout key={location.pathname}>
              <AboutPage />
            </Layout>
          }
        />

        {/* Contact page route (currently commented out) */}
        <Route
          path="/Contact"
          element={
            <Layout key={location.pathname}>
              <ContactPage />{" "}
            </Layout>
          }
        ></Route>
        <Route
          path="/Book-Now"
          element={
            <Layout>
              {" "}
              <BookNowPage />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              {" "}
              <PrivacyPolicyPage />
            </Layout>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <Layout>
              {" "}
              <TermsPage />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
