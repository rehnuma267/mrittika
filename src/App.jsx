import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
