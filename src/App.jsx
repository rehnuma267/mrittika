import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About_us/About_us";
import Contact from "./pages/Contact_us/Contact_us";
import Login from "./components/Login/Login";
import BlogDetail from "./pages/Blog/BlogDetail"; // Import BlogDetail component
import SignIn from "./components/SignIn/SignIn";
const App = () => {
  const location = useLocation(); // Get current page URL

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ensure Home is at "/" */}
        <Route path="/blog" element={<Blog />} />{" "}
        {/* Changed path to lowercase "blog" for consistency */}
        <Route path="/blog/:id" element={<BlogDetail />} />{" "}
        {/* Route for BlogDetail page with dynamic id */}
        <Route path="/about" element={<About />} />{" "}
        {/* Changed path to lowercase "about" for consistency */}
        <Route path="/contact" element={<Contact />} />{" "}
        {/* Changed path to lowercase "contact" for consistency */}
        <Route path="/login" element={<Login />} />{" "}
        {/* Changed path to lowercase "login" for consistency */}
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
