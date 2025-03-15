// Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { assets } from "../../assets/assets";
import logo from "../../assets/images.jpg"; // Import the image
//import images from "../../assets/images.jpg"; // Import Tomato Logo for Admin Navbar

const Navbar = ({ isAdminArea }) => {
  const [menu, setMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith("/blog");
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";

  if (isAdminArea) {
    return (
      <nav className="navbar admin-navbar">
        {" "}
        {/* Apply both classes: navbar and admin-navbar */}
        <div className="navbar-brand">
          {" "}
          {/* Use navbar-brand class for consistent styling */}
          <img src={logo} alt="Tomato Logo" className="navbar-logo" />
          <span>Mrittika.</span>
          <span className="admin-text">Admin Panel</span>
        </div>
        <div className="navbar-user">
          {" "}
          {/* Use navbar-user class for consistent styling */}
          <div className="user-avatar">
            <i className="fas fa-user-circle"></i>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      {" "}
      {/* Apply default navbar class for website navbar */}
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      {/* Navbar Links */}
      <ul className={`navbar-home ${isOpen ? "open" : ""}`}>
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setMenu("Blog")}
          className={menu === "Blog" ? "active" : ""}
        >
          <Link to="/blog">Blog</Link>
        </li>
        <li
          onClick={() => setMenu("About us")}
          className={menu === "About us" ? "active" : ""}
        >
          <Link to="/about">About us</Link>
        </li>
        <li
          onClick={() => setMenu("Contact us")}
          className={menu === "Contact us" ? "active" : ""}
        >
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
      {/* Right Side - Search & Basket */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket" />
          <div className="dot"></div>
        </div>
        <Link to="/signin">
          {" "}
          <button>Sign in</button>{" "}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
