import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/GlobalSection/Navbar/Navbar";
import Footer from "./Components/GlobalSection/Footer/Footer";
import ScrollToTop from "./Components/GlobalSection/ScrollToTop/ScrollToTop";

import HomePage from "./Pages/HomePage";
import BookNowPage from "./Pages/BookNowPage";
import ContactPage from "./Pages/ContactPage";

import ServicesPage from "./Pages/ServicesPage";
import AboutPage from "./Pages/AboutPage";

// Layout wrapper with Navbar and Footer
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Layout key={location.pathname}>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/Services"
          element={
            <Layout key={location.pathname}>
              <ServicesPage />
            </Layout>
          }
        />
        <Route
          path="/About"
          element={
            <Layout key={location.pathname}>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/Contact"
          element={
            <Layout key={location.pathname}><ContactPagePage /> </Layout>} ></Route>
      <Route path="/book-now" element={<Layout> <BookNowPage />
      </Layout>
          }
        />
  
    </Routes>
    </>
  );
}

export default App;
