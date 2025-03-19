import React, { useState } from "react";
import "./LoginRegister.css";
import LogoD from "../components/Logo_Dark";
import Login from "./Login";
import Register from "./Register";

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
        {isLogin ? <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />}
      </div>
    </div>
  );
};

export default LoginRegister;
