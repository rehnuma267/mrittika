import React from "react";
import "./About_us.css";
import arany from "../../assets/arany.jpg"; // Import Arany's image
import rehnuma from "../../assets/rehnuma.jpg"; // Import Rehnuma's image
import sponsor1 from "../../assets/sponsor1.jpg"; // Sponsor 1 Image
import sponsor2 from "../../assets/sponsor2.png"; // Sponsor 2 Image
import sponsor3 from "../../assets/sponsor3.png"; // Sponsor 3 Image

const About_us = () => {
  return (
    <div className="about-us-container">
      {/* Left Side: Heading & Description */}
      <div className="about-left">
        <h2>MEET THE TEAM OUR PROFESSIONALS</h2>
        <div className="about-description">
          <p>
            Welcome to Mrittika! We connect digital craftsmanship with rural
            artisans, preserving traditional terracotta art. Our goal is to
            promote sustainability and empower artisans by showcasing their
            creativity.
          </p>
        </div>
      </div>

      {/* Right Side: Team Members */}
      <div className="about-right">
        <div className="team-member">
          <img src={arany} alt="Arany" />
          <h3>Arany</h3>
          <p>ID: 2022012345</p>
        </div>
        <div className="team-member">
          <img src={rehnuma} alt="Rehnuma" />
          <h3>Rehnuma</h3>
          <p>ID: 2022016789</p>
        </div>
      </div>

      {/* Sponsor Section */}
      <div className="sponsors">
        <h2>Our Sponsors</h2>
        <div className="sponsor-logos">
          <img src={sponsor1} alt="Sponsor 1" />
          <img src={sponsor2} alt="Sponsor 2" />
          <img src={sponsor3} alt="Sponsor 3" />
        </div>
      </div>
    </div>
  );
};

export default About_us;
