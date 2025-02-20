// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoL from "./Logo_Light";
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
   

    return (
        <header className="header">
            <LogoL />
            
            <nav className="nav">
                <ul>
                    <li onClick={scrollToTop} style={{ cursor: "pointer" }}>
                        Home
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
                        <Link to="/login" className="btn-primary">
                            Login/Register
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
