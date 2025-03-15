import React from "react";
import "./AdminDashboard.css";
import Sidebar from "./Sidebar";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
//import Orders from "./Orders";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-content">
        {/* Navbar is now rendered in App.jsx, no need to render it here */}
        {/* **Removed Navbar import and rendering from here** */}
        <div className="dashboard-body">
          <h1>Dashboard</h1>
          <AddItem />
          <ListItem />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
