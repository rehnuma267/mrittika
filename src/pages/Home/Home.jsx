import React from "react";
import "./Home.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import homeHeroImageLeft from "../../assets/hero_banner_1.jpg"; // Replace with your left hero image
import homeHeroImageRight from "../../assets/hero_banner_2.jpg"; // Replace with your right hero image
import homeMiddleImageLeft from "../../assets/blog_7.jpg"; // Replace with your middle left image
import homeMiddleImageRight from "../../assets/blog_8.jpg"; // Replace with your middle right image
import Footer from "../../components/Footer/Footer"; // Import the Footer component

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section (Top Image Design) */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text-content">
            <h1>
              We Make Top Quality <br /> Handmade Products
            </h1>
            <p>
              Welcome to Mrittika! Discover the beauty of handcrafted artistry
              at Mrittika, where tradition meets creativity. We are passionate
              about preserving and promoting authentic terracotta crafts and
              other handmade treasures by talented rural artisans. Explore our
              collection, learn the stories behind each creation, and support
              the artisans who keep these traditions alive. Whether you're here
              to admire, shop, or learn, we’re delighted to have you as part of
              our journey. Thank you for being a part of Mrittika—where every
              craft has a story! Happy Exploring! Mrittika Team
            </p>
            <Link to="/blog" className="view-collection-button-link">
              {" "}
              {/* Use Link for View Collection */}
              <button className="view-collection-button">
                View Collection <i className="arrow right"></i>
              </button>
            </Link>
          </div>
          <div className="hero-image-container left">
            <img src={homeHeroImageLeft} alt="Handmade Products Left" />
          </div>
          <div className="hero-image-container right">
            <img src={homeHeroImageRight} alt="Handmade Products Right" />
          </div>
        </div>
      </section>

      {/* Middle Section (Second Image Design) */}
      <section className="middle-section">
        <div className="middle-container">
          <div className="middle-image-container left">
            <img src={homeMiddleImageLeft} alt="Innovative Design Left" />
          </div>
          <div className="middle-text-content">
            <h2>
              Innovative Design <br /> is Our Passion
            </h2>
            <p>
              Curabitur interdum malesuada lectus ut pharetra. Sed tellus ante,
              aliquet a sem id, ultricies varius dolor. Nam volutpat hendrerit
              massa. Cras posuere ornare elementum.
            </p>
            <button className="read-more-button">
              Read More <i className="arrow right"></i>
            </button>
          </div>
          <div className="middle-image-container right">
            <img src={homeMiddleImageRight} alt="Innovative Design Right" />
          </div>
        </div>
      </section>

      {/* Footer Section (Third Image Design) */}
      <Footer />
    </div>
  );
};

export default Home;
