import React from 'react';
import "../components/styles/Footer.css";

const Footer = () => {
  return (
    <footer>
    <div class="footer-container">
      <div class="footer-section">
        <h4>About Us</h4>
        <p>We are a family-owned restaurant that is dedicated to providing quality food and excellent customer service.</p>
      </div>
      <div class="footer-section">
        <h4>Opening Hours</h4>
        <ul>
          <li>Monday - Friday: 11am - 9pm</li>
          <li>Saturday: 12pm - 10pm</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Contact Us</h4>
        <ul>
          <li>123 Main Street</li>
          <li>New York, NY 10001</li>
          <li>Phone: (123) 456-7890</li>
          <li>Email: info@littlelemon.com</li>
        </ul>
      </div>
    </div>
    <div class="bottom-footer">
      <p>&copy; 2023 Little Lemon Restaurant. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
