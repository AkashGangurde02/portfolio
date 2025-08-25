import React from 'react';
import './hero.css';
import heroImage from '../images/hero_image.svg';
import heroArrow from '../images/hero_arrow.svg';
import heroVector2 from '../images/hero_vector2.svg';
import heroVector3 from '../images/hero_vector3.svg';
import heroVector4 from '../images/hero_vector4.svg';
import heroVector5 from '../images/hero_vector5.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-greeting">Hi! I'm</h1>
            <h1 className="hero-name">AKASH GANGURDE</h1>
            <p className="hero-title">UI/UX Designer</p>
            <div className="hero-buttons">
              <a href="#resume" className="hero-btn resume-btn">Resume</a>
              <a href="#contact" className="hero-btn hire-btn">Hire me</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <img src={heroImage} alt="Akash Gangurde" className="hero-img" />
            </div>
          </div>
        </div>
        <div className="hero-arrow">
          <img src={heroArrow} alt="Arrow" className="arrow-img" />
        </div>
        <div className="hero-vector2">
          <img src={heroVector2} alt="Vector 2" className="vector2-img" />
        </div>
        <div className="hero-vector3">
          <img src={heroVector3} alt="Vector 3" className="vector3-img" />
        </div>
        <div className="hero-vector4">
          <img src={heroVector4} alt="Vector 4" className="vector4-img" />
        </div>
        <div className="hero-vector5">
          <img src={heroVector5} alt="Vector 5" className="vector5-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
