import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/global.js";
import LogoD from "../components/Logo_Dark";

import "./LoginRegister.css";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post(`${API_URL}/login`, formData);
            if (!response.data) {
                alert(
                    "Wrong password!\nTry again or click 'Forgot password' to reset it."
                );
            } else if (response.data === "Server Busy") {
                alert("Verify your email id");
            } else if (response?.status) {
                localStorage.setItem("userInfo", JSON.stringify(response.data));
                navigate("/");
            }
        } catch (e) {
            console.error("Error during Login: ", e);
        }

    }


    return (
        <div className="login-register">
            <div className="form-container" onSubmit={handleSubmit}>
                <div className="logo">
                    <LogoD />
                </div>
                <h2>Login</h2>
                <form>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account?&nbsp;<Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
