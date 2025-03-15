import React from "react";
import "./Sidebar.css";
//import images from "../../assets/images.jpg"; // Assuming you have a tomato logo image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import {
  faPlusCircle,
  faListUl,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons"; // Import icons

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item active">
          <a href="#dashboard">
            <i className="fas fa-home menu-icon"></i>{" "}
            {/* Example Font Awesome home icon - you can replace */}
            Dashboard
          </a>
        </li>
        <li className="menu-item">
          <a href="#add-item">
            <FontAwesomeIcon icon={faPlusCircle} className="menu-icon" />{" "}
            {/* Add Item Icon */}
            Add Items
          </a>
        </li>
        <li className="menu-item">
          <a href="#list-items">
            <FontAwesomeIcon icon={faListUl} className="menu-icon" />{" "}
            {/* List Items Icon */}
            List Items
          </a>
        </li>
        <li className="menu-item">
          <a href="#orders">
            <FontAwesomeIcon icon={faClipboardList} className="menu-icon" />{" "}
            {/* Orders Icon */}
            Orders
          </a>
        </li>
        <li className="menu-item">
          <a href="#settings">
            <i className="fas fa-cog menu-icon"></i>{" "}
            {/* Example Font Awesome settings icon - you can replace */}
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
