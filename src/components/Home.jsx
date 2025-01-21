// Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Style the Home page

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to MedVita Health Care</h1>
      <p>
        MedVita Health Care Management System ensures the best patient care and streamlined management
        for medical professionals and administrators.
      </p>
      <div className="home-buttons">
        <Link to="/login-register" className="btn-primary">
          Login/Register
        </Link>
        <a href="#about" className="btn-secondary">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Home;
