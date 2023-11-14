import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3>About Us</h3>
            <p>We are a news website dedicated to delivering the latest news and updates on various topics such as business, finance, technology, and politics.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li>123 Main St, New York, NY 10001</li>
              <li>(123) 456-7890</li>
              <li>contact@newswebsite.com</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com"><FaFacebook /></a>
              <a href="https://www.instagram.com"><FaInstagram /></a>
              <a href="https://www.youtube.com"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <p>&copy; 2023 News Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
