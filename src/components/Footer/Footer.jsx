import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

import footer1 from "../../assets/footer1.png";
import footer2 from "../../assets/footer2.png";
import footer3 from "../../assets/footer3.png";
import footer4 from "../../assets/footer4.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* LEFT - Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="Bistro Bliss Logo" className="footer__logo-icon" />
            <span className="footer__logo-text">Bistro Bliss</span>
          </div>
          <p className="footer__tagline">
            In the new era of technology we look at the future with certainty and pride to for our company and.
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social-btn" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="footer__social-btn" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="footer__social-btn" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="footer__social-btn" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* MIDDLE - Pages */}
        <div className="footer__nav">
          <h4 className="footer__nav-title">Pages</h4>
          <ul className="footer__nav-list">
            {["Home", "About", "Menu", "Pricing", "Blog", "Contact", "Delivery"].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* MIDDLE - Utility Pages */}
        <div className="footer__nav">
          <h4 className="footer__nav-title">Utility Pages</h4>
          <ul className="footer__nav-list">
            {["Start Here", "Styleguide", "Password Protected", "404 Not Found", "Licenses", "Changelog", "View More"].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* RIGHT - Instagram */}
        <div className="footer__instagram">
          <h4 className="footer__nav-title">Follow Us On Instagram</h4>
          <div className="footer__instagram-grid">
            {[footer1, footer2, footer3, footer4].map((img, i) => (
              <a href="#" key={i} className="footer__instagram-item">
                <img src={img} alt={`Instagram post ${i + 1}`} />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;