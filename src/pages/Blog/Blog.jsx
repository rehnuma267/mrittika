import React from "react";
import "./Blog.css";

const blogs = [
  {
    id: 1,
    title: "Exploring the Art of Terracotta",
    image: "/assets/blog_7.jpg", // Replace with your own image path
    description:
      "Discover the history and beauty of handmade terracotta crafts.",
  },
  {
    id: 2,
    title: "The Journey of Rural Artisans",
    image: "/assets/blog_5.jpg", // Replace with your own image path
    description: "Meet the artisans who bring traditional crafts to life.",
  },
  {
    id: 3,
    title: "Sustainable Craftsmanship",
    image: "/assets/blog_9.jpg", // Replace with your own image path
    description:
      "How terracotta crafts contribute to an eco-friendly lifestyle.",
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
