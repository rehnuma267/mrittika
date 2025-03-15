import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About_us/About_us";
import Contact from "./pages/Contact_us/Contact_us";
import Login from "./components/Login/Login";
import BlogDetail from "./pages/Blog/BlogDetail";
import SignIn from "./components/SignIn/SignIn";
import Team from "./pages/Team/Team";
import UserProfilePage from "./components/UserProfilePage/UserProfilePage";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname === "/admin"; // Dynamically change Navbar based on this

  return (
    <div className="app">
      <Navbar isAdminArea={isAdminRoute} />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/team" element={<Team />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/admin" element={<AdminDashboard />} />{" "}
          {/* ✅ Added inside Routes */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
