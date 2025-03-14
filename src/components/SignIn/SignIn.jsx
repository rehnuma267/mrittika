// SignIn.jsx
import React, { useState } from "react";
import login from "../Login/Login";
import "./SignIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5002/user/signup", {
        username,
        email,
        password,
      });

      if (response.data.message === "User registered successfully") {
        alert("User registered successfully");
        navigate("/login"); // Redirect to the dashboard or homepage
      }
    } catch (error) {
      alert(error.response?.data?.message || "Sign-up failed");
    }
  };

  return (
    <div className="signIn-container">
      <div className="signIn-box">
        <h2 className="signIn-title">User SignUp Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter Your Username *"
              className="signIn-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter Your Email *"
              className="signIn-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Your Password *"
              className="signIn-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signIn-button">
            Sign Up
          </button>
        </form>
        <div className="copyright">
          © 2017 Flaty User SignUp Form. All rights reserved | Design by
          Walayouts
        </div>
      </div>
    </div>
  );
};

export default SignIn;
