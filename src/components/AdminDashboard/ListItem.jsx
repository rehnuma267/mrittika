import React from "react";
import "./ListItem.css";

const ListItem = () => {
  // Dummy data for list items
  const items = [
    { id: 1, name: "Product 1", category: "Category A", price: "$25" },
    { id: 2, name: "Product 2", category: "Category B", price: "$50" },
    { id: 3, name: "Product 3", category: "Category A", price: "$30" },
    // ... more items
  ];

  return (
    <div className="list-item-section">
      <h2>List of Items</h2>
      <div className="item-table-container">
        <table className="item-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListItem;
