"use client";
import React, { useState } from 'react';
import './book.css'; // Ensure this path is correct

function BookNow() {
  const [formData, setFormData] = useState({
    destination: '',
    goingDate: '',
    comingDate: '',
    members: '',
    adults: '',
    healthIssue: '',
    adhar: '',
    mobile: '',
    age: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    alert('Booking successful!');
    // Clear the form fields
    setFormData({
      destination: '',
      goingDate: '',
      comingDate: '',
      members: '',
      adults: '',
      healthIssue: '',
      adhar: '',
      mobile: '',
      age: ''
    });
  };

  return (
    <div className="mainX book-now-container">
      <form onSubmit={handleSubmit} className="book-now-form">
        <h2>Book Now</h2>
        <div className="form-row">
          <div className="form-col">
            <label>
              Destination Name:
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Enter destination"
                required
              />
            </label>
            <label>
              Going Date:
              <input
                type="date"
                name="goingDate"
                value={formData.goingDate}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Adhar (ID):
              <input
                type="text"
                name="adhar"
                value={formData.adhar}
                onChange={handleChange}
                placeholder="Enter Adhar ID"
                required
              />
            </label>
          </div>
          <div className="form-col">
            <label>
              Coming Date:
              <input
                type="date"
                name="comingDate"
                value={formData.comingDate}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Members:
              <input
                type="number"
                name="members"
                value={formData.members}
                onChange={handleChange}
                placeholder="Enter number of members"
                required
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                required
              />
            </label>
          </div>
        </div>
        <label>
          Adults:
          <input
            type="number"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            placeholder="Enter number of adults"
            required
          />
        </label>
        <label>
          Any Health Issue:
          <input
            type="text"
            name="healthIssue"
            value={formData.healthIssue}
            onChange={handleChange}
            placeholder="Enter health issues"
          />
        </label>
        <label>
          Mobile No:
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
            required
          />
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookNow;
