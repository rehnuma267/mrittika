import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">User login Form</h2>
        <div className="input-group">
          <input
            type="email"
            placeholder="Enter Your Email *"
            className="login-input"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Your Password *"
            className="login-input"
          />
        </div>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <button className="login-button">LOG IN</button>
        <div className="copyright">
          © 2017 Flaty User login Form. All rights reserved | Design by
          Walayouts
        </div>
      </div>
    </div>
  );
};

export default Login;
