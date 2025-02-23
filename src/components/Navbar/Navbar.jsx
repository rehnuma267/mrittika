import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="logo" />
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
        <button>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
