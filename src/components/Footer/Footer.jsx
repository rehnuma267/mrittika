import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <p>Sign up for our newsletter.<br /> Stay connected to Mrittika experts.</p>
        <div className="subscribe">
          <input type="email" placeholder="Enter your email address" />
          <button>SIGN UP</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-left">
          <h2 className="brand">Mrittika</h2>
          <p>Making lives better through creativity</p>
          <div className="app-links">
            <img src="/assets/appstore.jpg" alt="App Store" />
            <img src="/assets/playstore.png" alt="Google Play" />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>Popular Categories</h3>
            <ul>
              <li>Quilting</li>
              <li>Knitting</li>
              <li>Sewing</li>
              <li>Crocheting</li>
              <li>Embroidery</li>
              <li>Cake Decorating</li>
              <li>Baking</li>
              <li>Cooking</li>
            </ul>
          </div>

          <div>
            <h3>Popular Projects</h3>
            <ul>
              <li>Artisan Bread</li>
              <li>Paper Piecing</li>
              <li>Amigurumi</li>
              <li>Better Quilting</li>
              <li>Learn to Knit</li>
              <li>Sewing Bras</li>
            </ul>
          </div>

          <div>
            <h3>LIVE Streaming Events</h3>
            <ul>
              <li>FREE LIVE Tutorials</li>
              <li>Mrittika Chats</li>
              <li>Premium LIVE Events</li>
            </ul>
          </div>

          <div>
            <h3>Customer Service</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>How to Stream to Your TV</li>
              <li>Mrittika Free Trial Membership</li>
              <li>Instructor Resource Center</li>
              <li>Become an Affiliate</li>
              <li>Corporate Subscriptions</li>
              <li>Spanish</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Mrittika</p>
        <div className="footer-bottom-links">
          <a href="#">Terms of Service</a> | 
          <a href="#">Privacy Policy</a> | 
          <a href="#">Do Not Sell My Info</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
