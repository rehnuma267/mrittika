import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About_us/About_us"; // ✅ Import AboutUs correctly

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} /> {/* ✅ Added route */}
      </Routes>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
