import React from "react";

const Register = ({ toggleForm }) => {
    return (
        <div>
            <h2>Register</h2>
            <form>
                <label>Full Name:</label>
                <input type="text" placeholder="Enter your full name" required />
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" required />
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" required />
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <span onClick={toggleForm}>Login</span>
            </p>
        </div>
    );
};

export default Register;
