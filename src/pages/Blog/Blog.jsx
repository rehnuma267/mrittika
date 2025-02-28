import React from "react";
import "./Blog.css";

// Import your images
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
  {
    id: 1,
    title: "The Art of Handmade Pottery",
    image: blog_4,
    description:
      "Discover the intricate process behind traditional handmade pottery and its cultural significance.",
  },
  {
    id: 2,
    title: "Empowering Rural Artisans",
    image: blog_5,
    description:
      "Learn how rural artisans keep ancient crafting traditions alive and bring unique designs to life.",
  },
  {
    id: 3,
    title: "Sustainable Crafting Practices",
    image: blog_6,
    description:
      "Explore how eco-friendly materials and sustainable methods are shaping the future of handicrafts.",
  },
  {
    id: 4,
    title: "Crafting with Terracotta",
    image: blog_7,
    description:
      "Experience the beauty and elegance of terracotta crafts made by skilled artisans.",
  },
  {
    id: 5,
    title: "Artisan Stories",
    image: blog_8,
    description:
      "Read the stories behind the artisans and their traditional craft-making skills.",
  },
  {
    id: 6,
    title: "The Beauty of Handmade Jewelry",
    image: blog_9,
    description:
      "Explore the craftsmanship of handmade jewelry and the artistry involved.",
  },
  {
    id: 7,
    title: "Rural Art Forms",
    image: collection_1,
    description: "Discover unique rural art forms and their cultural impact.",
  },
  {
    id: 8,
    title: "Traditional Textile Crafts",
    image: collection_2,
    description:
      "Learn about the history and techniques behind traditional textile crafting.",
  },
  {
    id: 9,
    title: "Woodworking: A Timeless Craft",
    image: collection_3,
    description:
      "Appreciate the elegance of handmade wooden crafts, made with precision and skill.",
  },
  {
    id: 10,
    title: "Mastering Pottery",
    image: blog_1,
    description:
      "Uncover the secrets of pottery making and how it's passed down through generations.",
  },
];

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Crafting Stories</h1>
        <p>Celebrating the creativity and heritage of handmade crafts</p>
      </div>
      <div className="blog-container">
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
    </div>
  );
};

export default Blog;
