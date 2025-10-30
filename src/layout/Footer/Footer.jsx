import React from 'react'
import "./Footer.css";
import footerLogo from "/src/assets/images/footer-logo.png";

function Footer() {
  return (
   <footer className="footer-container">
      <div className="footer-main-content">
        <div className="footer-column brand-contact">
          <img src={footerLogo} className="footer-logo"></img>
          
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-item">
           
            <div className="contact-details">
              <span>Whats App</span>
              <a href="tel:+12029182132">+1 202-918-2132</a>
            </div>
          </div>
          <div className="contact-item">
          
            <div className="contact-details">
              <span>Call Us</span>
              <a href="tel:+12029182132">+1 202-918-2132</a>
            </div>
          </div>

          <h3 className="footer-heading download-heading">Download App</h3>
          <div className="app-badges">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="" alt="Download on the App Store" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
        <div className="footer-column links-column">
          <h3 className="footer-heading underline">Most Popular Categories</h3>
          <ul>
            <li><a href="#">Staples</a></li>
            <li><a href="#">Beverages</a></li>
            <li><a href="#">Personal Care</a></li>
            <li><a href="#">Home Care</a></li>
            <li><a href="#">Baby Care</a></li>
            <li><a href="#">Vegetables & Fruits</a></li>
            <li><a href="#">Snacks & Foods</a></li>
            <li><a href="#">Dairy & Bakery</a></li>
          </ul>
        </div>
        <div className="footer-column links-column">
          <h3 className="footer-heading underline">Customer Services</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">E-waste Policy</a></li>
            <li><a href="#">Cancellation & Return Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom-bar">
        <p>© 2025 All rights reserved. Reliance Retail Ltd.</p>
      </div>
    </footer>
  )
}

export default Footer
