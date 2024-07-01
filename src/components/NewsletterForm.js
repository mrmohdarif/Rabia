// src/components/NewsletterForm.js

import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would add your form submission logic, e.g., sending the email to your backend
    setSubmitted(true);
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #2e8555',
    width: '100%',
    maxWidth: '300px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: '1px solid #2e8555',
    backgroundColor: '#2e8555',
    color: '#fff',
    cursor: 'pointer',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '20px 0',
  };

  return (
    <div style={containerStyle}>
      {submitted ? (
        <p style={{ color: '#28a745' }}>Thank you for subscribing!</p>
      ) : (
        <form style={formStyle} onSubmit={handleSubmit}>
          <h2>Subscribe to our Newsletter</h2>
          <p>Stay updated with the latest articles and insights.</p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Subscribe</button>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
