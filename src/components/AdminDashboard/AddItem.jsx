// src/components/AdminDashboard/AddItem.jsx
import React, { useState } from "react";
import "./AddItem.css";
import axios from "axios";

const AddItem = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null); // State for image file

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(); // Use FormData to handle file uploads
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("productCategory", productCategory);
    formData.append("productPrice", productPrice);
    if (productImage) {
      formData.append("productImage", productImage); // Append image file
    }

    try {
      const response = await axios.post(
        "http://localhost:5002/api/blog-posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );

      if (response.status === 201) {
        alert("Item added successfully!");
        // Reset form fields after successful submission
        setProductName("");
        setProductDescription("");
        setProductCategory("");
        setProductPrice("");
        setProductImage(null);
        // Optionally, refresh the list of items on ListItems component here
      } else {
        alert("Failed to add item. Please check console for errors.");
        console.error("API Error:", response.data);
      }
    } catch (error) {
      alert("Error adding item. Please check console for details.");
      console.error("Axios Error:", error);
    }
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]); // Store the selected file
  };

  return (
    <div className="add-item-section">
      <h2>Add New Item</h2>
      <form className="add-item-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Product name"
            required
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description</label>
          <textarea
            id="productDescription"
            name="productDescription"
            placeholder="Description"
            rows="3"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="productCategory">Product Category</label>
          <select
            id="productCategory"
            name="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price</label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            placeholder="Price"
            required
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Upload Image</label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="add-button">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
