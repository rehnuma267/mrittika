import React from "react";
import "./UserProfilePage.css";

const UserProfilePage = () => {
  return (
    <div className="user-profile-container">
      <h1>Welcome, User!</h1>
      <div className="profile-info">
        <p>
          <strong>Username:</strong> user123
        </p>
        <p>
          <strong>Email:</strong> user@example.com
        </p>
        {/* Add any extra features or user details here */}
      </div>
      <div className="user-features">
        <h2>Extra Features</h2>
        <ul>
          <li>Feature 1: View Order History</li>
          <li>Feature 2: Update Profile Information</li>
          <li>Feature 3: Saved Items</li>
          {/* List your extra features here */}
        </ul>
      </div>
    </div>
  );
};

export default UserProfilePage;
