import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/global.js";
import LogoD from "../components/Logo_Dark";

import "./LoginRegister.css";

function Register() {
    const navigate = useNavigate();

    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/signup/verify`, FormData);
            if (response.data === "verifyUserAdded") {
                alert("Registeration link has sent to your email id");
                navigate("/login");
            } else if (response.data === "verifyUserExist") {
                alert("Registeration link already sent to your email id");
            } else if (response.data === "userExist") {
                alert("User already exist");
            } else if (response.data === "Server Busy") {
                alert("Verify your email id");
            }
        } catch (e) {
            console.error("Error during registeration: ", e);
        }
    };
    return (
        <div className="login-register">
            <div className="form-container">
                <div className="logo">
                    <LogoD />
                </div>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={FormData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={FormData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={FormData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Register</button>
                </form>

                <p>
                    Already have an account?&nbsp;<Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
