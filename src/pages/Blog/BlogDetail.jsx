import React from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";

// Import blog data (same as in Blog.jsx)
import blog_4 from "../../assets/blog_4.jpg";
import blog_5 from "../../assets/blog_5.jpg";
import blog_6 from "../../assets/blog_6.jpg";
import blog_7 from "../../assets/blog_7.jpg";
import blog_8 from "../../assets/blog_8.jpg";
import blog_9 from "../../assets/blog_9.jpg";
import collection_1 from "../../assets/collection_1.jpg";
import collection_2 from "../../assets/collection_2.jpg";
import collection_3 from "../../assets/collection_3.jpg";
import blog_1 from "../../assets/blog_1.jpg";

const blogs = [
  // Same blog data as in Blog.jsx
  {
    id: 1,
    title: "The Art of Handmade Pottery",
    image: blog_4,
    description:
      "Discover the intricate process behind traditional handmade pottery and its cultural significance. This detailed description will be shown on the detail page.",
  },
  {
    id: 2,
    title: "Empowering Rural Artisans",
    image: blog_5,
    description:
      "Learn how rural artisans keep ancient crafting traditions alive and bring unique designs to life. This detailed description will be shown on the detail page.",
  },
  {
    id: 3,
    title: "Sustainable Crafting Practices",
    image: blog_6,
    description:
      "Explore how eco-friendly materials and sustainable methods are shaping the future of handicrafts. This detailed description will be shown on the detail page.",
  },
  {
    id: 4,
    title: "Crafting with Terracotta",
    image: blog_7,
    description:
      "Experience the beauty and elegance of terracotta crafts made by skilled artisans. This detailed description will be shown on the detail page.",
  },
  {
    id: 5,
    title: "Artisan Stories",
    image: blog_8,
    description:
      "Read the stories behind the artisans and their traditional craft-making skills. This detailed description will be shown on the detail page.",
  },
  {
    id: 6,
    title: "The Beauty of Handmade Jewelry",
    image: blog_9,
    description:
      "Explore the craftsmanship of handmade jewelry and the artistry involved. This detailed description will be shown on the detail page.",
  },
  {
    id: 7,
    title: "Rural Art Forms",
    image: collection_1,
    description:
      "Discover unique rural art forms and their cultural impact. This detailed description will be shown on the detail page.",
  },
  {
    id: 8,
    title: "Traditional Textile Crafts",
    image: collection_2,
    description:
      "Learn about the history and techniques behind traditional textile crafting. This detailed description will be shown on the detail page.",
  },
  {
    id: 9,
    title: "Woodworking: A Timeless Craft",
    image: collection_3,
    description:
      "Appreciate the elegance of handmade wooden crafts, made with precision and skill. This detailed description will be shown on the detail page.",
  },
  {
    id: 10,
    title: "Mastering Pottery",
    image: blog_1,
    description:
      "Uncover the secrets of pottery making and how it's passed down through generations. This detailed description will be shown on the detail page.",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog post not found!</div>;
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-container">
        <h1>{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="blog-detail-image" />
        <p className="blog-detail-description">{blog.description}</p>

        {/* Customer Reviews Section */}
        <section className="customer-reviews-section">
          <h2>Customer Reviews</h2>

          {/* Leave a Review Section */}
          <div className="leave-review-section">
            <h3>Leave a Review</h3>
            <textarea
              placeholder="Write your review here..."
              className="review-textarea"
            ></textarea>
            <button className="submit-review-button">Submit Review</button>
          </div>

          {/* What others are saying Section */}
          <div className="other-reviews-section">
            <h3>What others are saying</h3>
            <div className="review-item">
              <p className="review-text">This is a test review from Postman!</p>
              <p className="reviewer-name">Anonymous User</p>
              <span className="like-count">❤️ 2</span>
            </div>
            <div className="review-item">
              <p className="review-text">serenblue</p>
              <p className="reviewer-name">Anonymous User</p>
              <span className="like-count">❤️ 3</span>
            </div>
            {/* Add more review items here */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetail;
