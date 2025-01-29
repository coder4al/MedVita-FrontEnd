// LoginRegister.js
import React, { useState } from "react";
import "./LoginRegister.css";
import LogoD from "../components/Logo_Dark";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-register">
      <div className="form-container">
        <div className="logo">
          <LogoD />
        </div>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        {isLogin ? (
          <form>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
            <button type="submit">Login</button>
          </form>
        ) : (
          <form>
            <label>Full Name:</label>
            <input type="text" placeholder="Enter your full name" required />
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
            <button type="submit">Register</button>
          </form>
        )}
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleForm}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;
