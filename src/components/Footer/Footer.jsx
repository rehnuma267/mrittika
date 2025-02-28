import React from "react";
import "./Footer.css"; // Import Footer's CSS

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <h3>Crafti</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
            porttitor augue, in convallis risus. Sed efficitur nulla quis luctus
            pulvinar. Cras nec pulvinar condimentum lacus.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>{" "}
            {/* Facebook */}
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>{" "}
            {/* Twitter */}
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>{" "}
            {/* Instagram */}
            <a href="#" className="social-icon">
              <i className="fab fa-youtube"></i>
            </a>{" "}
            {/* YouTube */}
          </div>
        </div>

        <div className="footer-section explore">
          <h3>Explore Us</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Collection</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Blog & News</a>
            </li>
          </ul>
        </div>

        <div className="footer-section support">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
            <li>
              <a href="#">Support Center</a>
            </li>
            <li>
              <a href="#">Our Stores</a>
            </li>
          </ul>
        </div>

        <div className="footer-section get-in-touch">
          <h3>Get In Touch</h3>
          <p>Question or feedback? We'd love to hear from you</p>
          <button className="contact-us-button">
            Contact Us <i className="arrow right"></i>
          </button>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright 2022 codecwthcodee. All Right Reserved <br />{" "}
          <a href="#">Crafti.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
