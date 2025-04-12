// src/pages/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Login.css';  // Correct path to Login.css
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please enter both email and password!");
      return;
    }

    axios.post('/api/login', { email, password })
      .then(response => {
        if (response.data.success) {
          setErrorMessage('');
          alert('Logged in successfully!');
          // Redirect to dashboard or homepage after successful login
        } else {
          setErrorMessage('Invalid email or password.');
        }
      })
      .catch(() => {
        setErrorMessage('An error occurred. Please try again.');
      });
  };

  return (
    <div className="login-page container">
      <h2 className="display-4 text-center">Login</h2>
      <p className="lead text-center mb-4">Welcome back! Please log in to continue.</p>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>

      <p className="text-center mt-3">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <p className="text-center">
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  );
};

export default Login;
