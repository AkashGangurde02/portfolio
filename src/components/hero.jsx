import React, { useEffect, useRef } from 'react';
import './hero.css';
import heroImage from '../images/hero_image.svg';
import heroArrow from '../images/hero_arrow.svg';
import heroVector2 from '../images/hero_vector2.svg';
import heroVector3 from '../images/hero_vector3.svg';
import heroVector4 from '../images/hero_vector4.svg';
import heroVector5 from '../images/hero_vector5.svg';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  scaleIn, 
  floatingAnimation, 
  parallaxEffect, 
  textReveal,
  buttonHover 
} from '../utils/gsapAnimations';

const Hero = () => {
  const greetingRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const arrowRef = useRef(null);
  const vector2Ref = useRef(null);
  const vector3Ref = useRef(null);
  const vector4Ref = useRef(null);
  const vector5Ref = useRef(null);
  const resumeBtnRef = useRef(null);
  const hireBtnRef = useRef(null);

  useEffect(() => {
    // Text animations
    textReveal(greetingRef.current, 0.2);
    textReveal(nameRef.current, 0.4);
    fadeInUp(titleRef.current, 0.6);
    fadeInUp(buttonsRef.current, 0.8);

    // Image animations
    scaleIn(imageRef.current, 1);
    fadeInUp(arrowRef.current, 1.2);

    // Vector animations with parallax effect
    parallaxEffect(vector2Ref.current, -0.3);
    parallaxEffect(vector3Ref.current, -0.2);
    parallaxEffect(vector4Ref.current, -0.4);
    parallaxEffect(vector5Ref.current, -0.1);

    // Floating animations for vectors
    floatingAnimation(vector2Ref.current);
    floatingAnimation(vector4Ref.current);

    // Button hover animations
    if (resumeBtnRef.current) buttonHover(resumeBtnRef.current);
    if (hireBtnRef.current) buttonHover(hireBtnRef.current);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 ref={greetingRef} className="hero-greeting">Hi! I'm</h1>
            <h1 ref={nameRef} className="hero-name">AKASH GANGURDE</h1>
            <p ref={titleRef} className="hero-title">UI/UX Designer</p>
            <div ref={buttonsRef} className="hero-buttons">
              <a ref={resumeBtnRef} href="/assets/Akash_Gangurde_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-btn resume-btn">Resume</a>
              <a ref={hireBtnRef} href="#contact" className="hero-btn hire-btn">Hire me</a>
            </div>
          </div>
          <div className="hero-image">
            <div ref={imageRef} className="hero-image-container">
              <img src={heroImage} alt="Akash Gangurde" className="hero-img" />
            </div>
          </div>
        </div>
        <div ref={arrowRef} className="hero-arrow">
          <img src={heroArrow} alt="Arrow" className="arrow-img" />
        </div>
        <div ref={vector2Ref} className="hero-vector2">
          <img src={heroVector2} alt="Vector 2" className="vector2-img" />
        </div>
        <div ref={vector3Ref} className="hero-vector3">
          <img src={heroVector3} alt="Vector 3" className="vector3-img" />
        </div>
        <div ref={vector4Ref} className="hero-vector4">
          <img src={heroVector4} alt="Vector 4" className="vector4-img" />
        </div>
        <div ref={vector5Ref} className="hero-vector5">
          <img src={heroVector5} alt="Vector 5" className="vector5-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
