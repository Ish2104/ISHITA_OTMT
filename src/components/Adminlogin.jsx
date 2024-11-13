import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Adminlogin.css'; // Ensure you have the correct CSS for your login page

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    // Replace these with your actual admin credentials or authentication method
    const adminCredentials = {
        username: "admin",
        password: "12345678910"
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Check the credentials
        if (username === adminCredentials.username && password === adminCredentials.password) {
            // Set login status to localStorage (or context) to track user
            localStorage.setItem("isAdminLoggedIn", true); // You can also use context here if you prefer

            // Redirect to Admin Dashboard after successful login
            navigate("/admin");
        } else {
            setErrorMessage("Invalid username or password.");
        }
    };

    return (
        <div className="login-page">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default AdminLogin;
