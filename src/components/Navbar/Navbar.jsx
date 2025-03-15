// Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { assets } from "../../assets/assets";
import logo from "../../assets/images.jpg";
//import images from "../../assets/images.jpg"; // Import Tomato Logo for Admin Navbar

const Navbar = ({ isAdminArea }) => {
  const [menu, setMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation
  const isBlogPage = location.pathname.startsWith("/blog");
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";
  const [isLogoutDropdownOpen, setIsLogoutDropdownOpen] = useState(false); // Logout dropdown state
  const userAvatarRef = useRef(null); // Ref for user avatar area

  const handleLogout = () => {
    // **Replace this with your actual logout logic:**
    // - Clear authentication tokens (e.g., localStorage, cookies)
    // - Redirect to the login page
    alert(
      "Logout clicked (Placeholder function - Implement actual logout logic)"
    );
    setIsLogoutDropdownOpen(false); // Close dropdown after logout
    navigate("/login"); // Redirect to login page after logout
  };

  const toggleLogoutDropdown = () => {
    setIsLogoutDropdownOpen(!isLogoutDropdownOpen);
  };

  const handleClickOutsideAvatar = (event) => {
    if (
      userAvatarRef.current &&
      !userAvatarRef.current.contains(event.target)
    ) {
      setIsLogoutDropdownOpen(false); // Close dropdown if clicked outside avatar area
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideAvatar);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideAvatar);
    };
  }, []);

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
        <div className="navbar-user" ref={userAvatarRef}>
          {" "}
          {/* Use navbar-user class for consistent styling */}
          <div className="user-avatar" onClick={toggleLogoutDropdown}>
            <i className="fas fa-user-circle"></i>
          </div>
          {isLogoutDropdownOpen && (
            <div className="logout-dropdown">
              {" "}
              {/* Logout dropdown menu */}
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
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
