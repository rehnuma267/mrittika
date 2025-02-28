import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About_us/About_us";
import Contact from "./pages/Contact_us/Contact_us";

const App = () => {
  const location = useLocation(); // Get current page URL

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ensure Home is at "/" */}
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
