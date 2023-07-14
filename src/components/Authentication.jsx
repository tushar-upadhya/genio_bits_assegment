import { useState } from "react";

const Authentication = ({ onSignUp, onLogin, onLogout }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        onSignUp(username, password);
    };

    const handleLogin = () => {
        onLogin(username, password);
    };

    const handleLogout = () => {
        onLogout();
    };

    return (
        <div className="container">
            <h2>Authentication</h2>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="btn-group">
                <button className="btn btn-primary" onClick={handleSignUp}>
                    Sign Up
                </button>
                <button className="btn btn-primary" onClick={handleLogin}>
                    Log In
                </button>
                <button className="btn btn-danger" onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Authentication;
