import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Optional for adding styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Our Bookstore</h3>
          <p>Your one-stop destination for books that inspire, educate, and entertain. Discover the best reads across all genres.</p>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact Information</h3>
          <p>Address: 123 Book Lane, Chennai, Tamil Nadu, 600095</p>
          <p>Phone: +91 9876 543 210</p>
          <p>Email: info@ourbookstore.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Our Bookstore | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
