// Header.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/MedVita_Logo.svg"
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo ">
                <h1> <img src={logo} width={50} height={50} alt="" />
                    MedVita</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#departments">Departments</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact-us">Contact Us</a>
                    </li>
                    <li>
                        <Link to="/login-register" className="btn-primary">
                            Login/Register
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
