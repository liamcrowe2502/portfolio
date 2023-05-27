import React from 'react';
import './FooterStyles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="footer-icons">
        <i className="fab fa-instagram"></i> {/* Instagram icon */}
        <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
        <i className="fab fa-github"></i> {/* GitHub icon */}
        <i className="fab fa-twitch"></i> {/* Twitch icon */}
      </div>
      <p>Copyright ©2023 All rights reserved</p>
    </footer>
  );
}

export default Footer;
