// import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Trvler Platform</h1>
      <div className="nav-links">
        <Link href="/">
          <span className="active">Home</span>
        </Link>
        <Link href="/destination">
          <span>Destination</span>
        </Link>
        <Link href="/login">
          <span className="login">Login</span>
        </Link>
        <Link href="/signup">
          <span className="signup">Sign-up</span>
        </Link>
        <Link href="/book">
          <span className="sign">Book Now</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
