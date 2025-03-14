import React from "react";
import "./Contact_us.css";

const Contact_us = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Any questions or remarks? Just write us a message!</p>
      </div>
      <form className="contact-form">
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter a valid email address"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="name">Question</label>
            <input
              type="text"
              id="name"
              placeholder="Ask any question"
              required
            />
          </div>
        </div>
        <button type="submit" className="submit-button">
          SUBMIT
        </button>
      </form>

      <div className="contact-info-container">
        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-running"></i>{" "}
            {/* Font Awesome Running Icon - you'll need to include Font Awesome */}
          </div>
          <div className="info-section">
            <h2>ABOUT CLUB</h2>
            <p>Running Guide</p>
            <p>Workouts</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-phone"></i> {/* Font Awesome Phone Icon */}
          </div>
          <div className="info-section">
            <h2>PHONE (LANDLINE)</h2>
            <p>+912 3 567 8987</p>
            <p>+912 5 252 3336</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-map-marker-alt"></i>{" "}
            {/* Font Awesome Map Marker Icon */}
          </div>
          <div className="info-section">
            <h2>OUR OFFICE LOCATION</h2>
            <p>The Interior Design Studio Company</p>
            <p>The Courtyard, Al Quoz 1, Colorado, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;
