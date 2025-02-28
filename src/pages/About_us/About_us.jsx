import React from "react";
import "./About_us.css";
import aboutImage from "../../assets/about_3.jpg"; // Using about_3.jpg as the main about image
import iconProjectInit from "../../assets/feature_icon_1.svg"; // Using feature_icon_1.png for Project Initiation icon
import iconDesign from "../../assets/feature_icon_2.svg"; // Using feature_icon_2.png for Design icon
import iconDevelopment from "../../assets/feature_icon_3.svg"; // Using feature_icon_3.png for Development icon
import iconSupport from "../../assets/feature_icon_1.svg"; // Reusing feature_icon_1.png for Support icon (you might want a different icon)

const AboutPage = () => {
  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>We are EB Pearls</h1>
          <p>
            A hybrid business model with a holistic approach to online business.
            Web, eCommerce, Mobile App Development.
          </p>
          <button className="enquire-button">ENQUIRE</button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <div className="stat-number">2800</div>
          <div className="stat-label">PROJECTS</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">140</div>
          <div className="stat-label">STAFFS</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">4</div>
          <div className="stat-label">OFFICES</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">729</div>
          <div className="stat-label">HAPPY CLIENTS</div>
        </div>
      </section>

      {/* Image Section */}
      <section className="image-section">
        <img src={aboutImage} alt="About Us Team" />
      </section>

      {/* Beauty Section */}
      <section className="beauty-section">
        <div className="beauty-content">
          <h2>Beauty happens with code not by chance.</h2>
          <p>
            We employ creative tools, code and solid online branding knowledge
            to build an elegant solutions for our clients.
          </p>
          <p>
            We’re fundamentally technology people. As part of EB Pearls, we’re
            laying the groundwork for web and mobile development innovations
            through laser-focused solutions.
          </p>
          <button className="meet-team-button">MEET OUR TEAM</button>
        </div>
      </section>

      {/* Difference Section */}
      <section className="difference-section">
        <div className="difference-content">
          <div className="difference-column">
            <h2>What's different when you work with us?</h2>
            <p>
              When you engage our digital agency for your project, you get
              instant access to a team of 120 technology legends including
              strategists, designers, developers, quality engineers and project
              managers. All working together for a common end goal: to create
              revenue-generating digital solutions for YOU.
            </p>
            <p>
              Having been on the market for more than 11 years, it’s our hybrid
              business model that sets us apart from other digital agencies. We
              have offices in Sydney, Melbourne, London and Kathmandu.
            </p>
            <p>
              We may be scattered all around the world, but we all speak the
              same language: code. It’s in our DNA. We run all projects with our
              inborn passion for programming.
            </p>
          </div>
          <div className="difference-column">
            <ul>
              <li>We deliver quickly & efficiently based on 3 factors:</li>
              <li>Quality of services is always top notch</li>
              <li>
                Time is not an issue due to our large team of designers and
                developers
              </li>
              <li>Cost effective due to our hybrid business model</li>
              <li>
                With over 10 years experience as a mobile app and website
                development agency, you can rest assured that you are working
                with a complete solution provider.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-header">
          <h2>Our process</h2>
          <p>
            Think about EB Pearls as your personal incubator of creativity. We
            take your ideas and turn them into products that bring you
            revenue-generating results.
          </p>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <img
              src={iconProjectInit}
              alt="Project Initiation"
              className="process-icon"
            />
            <h3>Project Initiation</h3>
            <ul>
              <li>Requirement gathering</li>
              <li>Proposal</li>
              <li>Project Plan</li>
              <li>Solution page</li>
            </ul>
          </div>
          <div className="process-step">
            <img src={iconDesign} alt="Design" className="process-icon" />
            <h3>Design</h3>
            <ul>
              <li>Concept / Inspiration</li>
              <li>Branding</li>
              <li>Design / Style guide</li>
              <li>Storyboarding</li>
            </ul>
          </div>
          <div className="process-step">
            <img
              src={iconDevelopment}
              alt="Development"
              className="process-icon"
            />
            <h3>Development</h3>
            <ul>
              <li>Frontend development</li>
              <li>Frontend integration</li>
              <li>Backend development</li>
              <li>Quality assurance</li>
            </ul>
          </div>
          <div className="process-step">
            <img src={iconSupport} alt="Support" className="process-icon" />
            <h3>Support</h3>
            <ul>
              <li>Analytics</li>
              <li>Timely support</li>
              <li>Security scans</li>
              <li>Enhancement</li>
            </ul>
          </div>
        </div>
        <button className="learn-more-button">LEARN MORE</button>
      </section>
    </div>
  );
};

export default AboutPage;
