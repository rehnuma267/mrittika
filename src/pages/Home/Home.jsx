import React from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import BackgroundImage from "../../assets/about_1.jpg"; // Import the image

const Home = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="home-content">
        <h1>Welcome to Mrittika</h1>
        <p>Your connection to rural artisans and terracotta crafts.</p>
      </div>
      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default Home;
