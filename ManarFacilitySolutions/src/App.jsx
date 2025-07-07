import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/GlobalSection/Navbar/Navbar";
import Footer from "./Components/GlobalSection/Footer/Footer";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";

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
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/Services" element={<Layout>{<ServicesPage />}</Layout>} />
      <Route path="/About" element={<Layout>{/*<About />*/}</Layout>} />
      <Route path="/Contact" element={<Layout>{/* <Contact />*/}</Layout>} />
    </Routes>
  );
}

export default App;
