"use client";
import React, { useState } from 'react';
import './login.css';
import Footer from '../footer/footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Show an alert with a success message
    alert('Login successful!');
    // Clear the form fields
    setEmail('');
    setPassword('');
    // You can add more logic here to handle the login process
  };

  return (
    <>
      <div className="mainy form-container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter email"
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Login;
