import React from "react";
import "./Team.css"; // Import the CSS file

import rehnuma from "../../assets/rehnuma.jpg"; // Assuming these images are in the assets folder
import arany from "../../assets/arany.jpg";

const Team = () => {
  return (
    <div className="team-section">
      <div className="text-content-area">
        <div className="section-title">Meet The Team</div>
        <div className="section-subtitle">Our Professionals</div>
        <div className="lorem-text">
          Our website, Mrittika, is dedicated to showcasing and promoting
          traditional crafting, especially terracotta artistry. Our goal is to
          connect rural artisans with a broader audience, preserving heritage
          while creating opportunities.
        </div>
        <button className="read-more-button">Read More</button>
      </div>
      <div className="team-members-area">
        <div className="team-member">
          <div className="member-image">
            <img src={rehnuma} alt="Rehnuma Tarannum" />
          </div>
          <div className="member-name">REHNUMA TARANNUM</div>
          <div className="member-title">Creative Leader & Web Developer</div>
          <div className="social-icons">
            {/* Replace with actual social icons or links */}
            <a href="#" className="social-icon">
              f
            </a>
            <a href="#" className="social-icon">
              in
            </a>
            <a href="#" className="social-icon">
              ig
            </a>
          </div>
        </div>
        <div className="team-member">
          <div className="member-image">
            <img src={arany} alt="Arany Hasan" />
          </div>
          <div className="member-name">ARANY HASAN</div>
          <div className="member-title">Creative Leader & Web Developer</div>
          <div className="social-icons">
            {/* Replace with actual social icons or links */}
            <a href="#" className="social-icon">
              f
            </a>
            <a href="#" className="social-icon">
              in
            </a>
            <a href="#" className="social-icon">
              ig
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team; // IMPORTANT:  Make sure you have this line to export the component as default
