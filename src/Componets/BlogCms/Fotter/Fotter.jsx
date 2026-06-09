import './Fotter.css';
import { Link } from 'react-router-dom'
import { FiInstagram, FiHeart, FiStar, FiCamera } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🍽️</span>
            <span className="logo-text">Bistro Bliss</span>
          </div>
          <p className="footer-desc">
            In the new era of technology we look a in the future with certainty and pride to for our company end.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-btn">𝕏</a>
            <a href="#" className="social-btn">f</a>
            <a href="#" className="social-btn">📷</a>
            <a href="#" className="social-btn">🎵</a>
          </div>
        </div>

        {/* Pages */}
        <div className="footer-col">
          <h4 className="footer-heading">Pages</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Delivery</a></li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div className="footer-col">
          <h4 className="footer-heading">Utility Pages</h4>
          <ul className="footer-links">
            <li><a href="#">Start Here</a></li>
            <li><a href="#">Styleguide</a></li>
            <li><a href="#">Password Protected</a></li>
            <li><a href="#">404 Not Found</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">View More</a></li>
          </ul>
        </div>

        {/* Icons */}
        <div className="footer-col footer-icons">
          <h4 className="footer-heading">Quick Links</h4>
          <div className="footer-icon-grid">
            <div className="footer-icon-item">
              <FiInstagram />
              <span>Instagram</span>
            </div>
            <div className="footer-icon-item">
              <FiHeart />
              <span>Favorites</span>
            </div>
            <div className="footer-icon-item">
              <FiStar />
              <span>Top Rated</span>
            </div>
            <div className="footer-icon-item">
              <FiCamera />
              <span>Gallery</span>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;