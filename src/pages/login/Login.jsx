import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../sass/__login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "john32" && password === "87654321") {
      localStorage.setItem("x-auth-token", "your-auth-token");
      navigate("/admin");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login__wrapper">
      <div className="header__container">
        <form onSubmit={handleLogin} className="login__section">
          <input
            type="text"
            placeholder="john32"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="87654321"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
