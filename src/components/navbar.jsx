import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>Akash Gangurde.</h2>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home" className="navbar-link">Home</a></li>
          <li><a href="#about" className="navbar-link">About Me</a></li>
          <li><a href="#projects" className="navbar-link">Projects</a></li>
          <li><a href="#contact" className="navbar-link">Contact Me</a></li>
        </ul>
        <div className="navbar-resume">
          <a href="#resume" className="resume-btn">Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
