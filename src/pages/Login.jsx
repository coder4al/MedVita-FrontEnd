import React from "react";

const Login = ({ toggleForm }) => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" required />
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" required />
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <span onClick={toggleForm}>Register</span>
            </p>
        </div>
    );
};

export default Login;
