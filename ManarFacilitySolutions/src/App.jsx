import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/GlobalSection/Navbar/Navbar";
import Footer from "./Components/GlobalSection/Footer/Footer";
import HomePage from "./Pages/HomePage";

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
      <Route path="/services" element={<Layout>{/*<Services />*/}</Layout>} />
      <Route path="/about" element={<Layout>{/*<About />*/}</Layout>} />
      <Route path="/contact" element={<Layout>{/* <Contact />*/}</Layout>} />
    </Routes>
  );
}

export default App;
