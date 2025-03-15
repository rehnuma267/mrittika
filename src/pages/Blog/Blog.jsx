import React, { useState, useEffect } from "react";
import "./Blog.css";
import { Link } from "react-router-dom"; // Import Link for routing
import axios from "axios"; // Import axios for API calls

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5002/api/blog-posts"
        );
        setBlogPosts(response.data); // Set blogPosts state with fetched data
        setLoading(false); // Set loading to false once data is loaded
      } catch (error) {
        setError(error); // Set error state if there's an error
        setLoading(false); // Set loading to false even in case of error
        console.error("Error fetching blog posts:", error); // Log error for debugging
      }
    };

    fetchBlogPosts(); // Call the fetchBlogPosts function when component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  if (loading) {
    return <p>Loading blog posts...</p>; // Display loading message while fetching
  }

  if (error) {
    return <p>Error loading blog posts: {error.message}</p>; // Display error message if fetching fails
  }

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Crafting Stories</h1>
        <p>Celebrating the creativity and heritage of handmade crafts</p>
      </div>
      <div className="blog-container">
        <div className="blog-list">
          {blogPosts.map((blog) => (
            <div key={blog._id} className="blog-card">
              {blog.productImage && (
                <img
                  src={`http://localhost:5002/${blog.productImage}`} // Dynamically set image source from backend
                  alt={blog.productName}
                />
              )}
              <h2>{blog.productName}</h2>{" "}
              {/* Display product name from backend data */}
              <p>{blog.productDescription.substring(0, 100)}... </p>{" "}
              {/* Shortened description from backend data */}
              <Link to={`/blog/${blog._id}`}>
                {" "}
                {/* Link to detail page - adjust path as needed */}
                <button className="detail-button">Detail</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
