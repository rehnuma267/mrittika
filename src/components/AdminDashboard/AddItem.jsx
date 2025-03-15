import React from "react";
import "./AddItem.css";

const AddItem = () => {
  return (
    <div className="add-item-section">
      <h2>Add New Item</h2>
      <form className="add-item-form">
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Product name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description</label>
          <textarea
            id="productDescription"
            name="productDescription"
            placeholder="Description"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="productCategory">Product Category</label>
          <select id="productCategory" name="productCategory">
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Upload Image</label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            accept="image/*"
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
