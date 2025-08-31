import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>Akash Gangurde.</h2>
        </div>
        <ul className={`navbar-menu ${isOpen ? 'navbar-menu-open' : ''}`}>
          <li><a href="#home" className="navbar-link" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" className="navbar-link" onClick={toggleMenu}>About Me</a></li>
          <li><a href="#projects" className="navbar-link" onClick={toggleMenu}>Projects</a></li>
          <li>
            <a href="https://your-blog-url.com" className="navbar-link blog-link" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
          </li>
          <li><a href="#contact" className="navbar-link" onClick={toggleMenu}>Contact Me</a></li>
          <li className="navbar-resume-mobile">
            <a href="/assets/Akash_Gangurde_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn" onClick={toggleMenu}>Resume</a>
          </li>
        </ul>
        <div className="navbar-resume">
          <a href="/assets/Akash_Gangurde_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">Resume</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isOpen ? 'line1' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'line2' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'line3' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
