import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Trvler Platform</h1>
      <div className="nav-links">
        <a href="/" className="active">Home</a>
        <a href="/destination">Destination</a>
        <a className="hotel" href="hotel">Hotel</a>
        <a className="login" href="#Login">Login</a>
        <a className="sign" href="#Sign up">Sign-up</a>
      </div>
    </div>
  );
};

export default Navbar;
