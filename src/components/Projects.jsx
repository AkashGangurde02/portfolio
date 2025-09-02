import React, { useEffect, useRef } from 'react';
import './projects.css';
import cityfixImg from '../images/cityfix.svg';
import airmaxImg from '../images/airmax.svg';
import courserImg from '../images/courser.svg';
import dualsenseImg from '../images/dualsense.svg';
import { 
  fadeInUp, 
  staggerFadeIn, 
  textReveal, 
  buttonHover, 
  scaleIn 
} from '../utils/gsapAnimations';

const projects = [
  {
    title: 'CityFix Application',
    desc: 'A Civic Issues Reporting application that helps citizens report and track municipal problems in their city.',
    img: cityfixImg,
    link: '#',
  },
  {
    title: 'AirMax Landing Page',
    desc: 'A modern and responsive landing page design for AirMax sneaker brand.',
    img: airmaxImg,
    link: '#',
  },
  {
    title: 'Courser Platform',
    desc: 'An educational platform landing page with clean design and user-friendly interface.',
    img: courserImg,
    link: '#',
  },
  {
    title: 'DualSense Controller',
    desc: 'A product showcase design for PlayStation DualSense controller with interactive elements.',
    img: dualsenseImg,
    link: '#',
  },
];

const Projects = () => {
  const titleRef = useRef(null);
  const projectCardsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Title animation
    textReveal(titleRef.current);

    // Project cards stagger animation
    if (projectCardsRef.current.length > 0) {
      staggerFadeIn(projectCardsRef.current, 0.5, 1, 0.3);
    }

    // Button animation and hover effect
    if (buttonRef.current) {
      fadeInUp(buttonRef.current, 1.2);
      buttonHover(buttonRef.current);
    }

    // Add hover animations to project cards
    projectCardsRef.current.forEach((card) => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          scaleIn(card, 0, 0.3);
        });
      }
    });
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 ref={titleRef} className="projects-title">
            Case Stu<span className="orange">dies</span>
            <span className="paper-plane"></span>
          </h2>
        </div>
        <div className="projects-scroll">
          {projects.map((proj, idx) => (
            <div 
              ref={el => projectCardsRef.current[idx] = el} 
              className="project-card" 
              key={idx}
            >
              <div className="project-img-wrap">
                <img src={proj.img} alt={proj.title} className="project-img" />
              </div>
              <div className="project-info">
                <h3 className="project-name">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <a href={proj.link} className="project-link">View Details</a>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-footer">
          <button ref={buttonRef} className="all-projects-btn">View all projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
