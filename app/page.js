"use client";
import React, { useState } from 'react';
import Footer from "./components/footer";
import Fetchdata from "./components/fetchdataAll";
import Signup from './signup/page.js';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);

  const handleClick = () => {
    setShowSignup(true);
  };

  return (
    <div className="app" onClick={handleClick}>
      <div className="video-container">
        <video autoPlay loop muted className="video">
          <source src="https://cdn.pixabay.com/video/2020/09/02/48898-457717326_large.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 className="holidays">Search Your Holidays</h1>
      <Fetchdata />
      {showSignup && <Signup />}
      <Footer />
      <div className="overlay">Click anywhere to show the signup form</div>
    </div>
  );
}
