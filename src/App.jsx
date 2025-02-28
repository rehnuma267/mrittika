import React from "react";
import { Routes, Route } from "react-router-dom"; // No need to import Router here
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
