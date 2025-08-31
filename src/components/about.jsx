import React from 'react';
import './about.css';
import aboutImage from '../images/about_image.svg';
import aboutVector1 from '../images/about_vector1.svg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            About <span className="about-title-highlight">Me</span>
          </h2>
        </div>
        
        <div className="about-main-content">
          <div className="about-intro">
            <div className="about-image-section">
              <div className="about-image-container">
                <img src={aboutImage} alt="Akash Gangurde" className="about-img" />
              </div>
              <div className="about-vector1">
                <img src={aboutVector1} alt="Vector 1" className="vector1-img" />
              </div>
            </div>
            
            <div className="about-mobile-info">
              <div className="about-info-item">
                <span className="info-icon">📧</span>
                <span className="info-text">Your info here</span>
              </div>
              <div className="about-info-item">
                <span className="info-icon">🌐</span>
                <span className="info-text">Your info here</span>
              </div>
              <div className="about-info-item">
                <span className="info-icon">📞</span>
                <span className="info-text">Your info here</span>
              </div>
            </div>
            
            <div className="about-text-section">
              <h3 className="about-name">Akash Gangurde</h3>
              <p className="about-description">
                I'm aspiring UI/UX designer passionate about crafting intuitive, 
                user-centered digital experiences. I have worked on projects like 
                CityFix, a civic-tech application, and a responsive grocery store website 
                that improves in-store product navigation. My design process 
                emphasizes user research, accessibility, and visual hierarchy to deliver 
                solutions that are both functional and engaging.
              </p>
              
              <div className="about-info">
                <div className="about-info-item">
                  <span className="info-icon">📧</span>
                  <span className="info-text">Your info here</span>
                </div>
                <div className="about-info-item">
                  <span className="info-icon">🌐</span>
                  <span className="info-text">Your info here</span>
                </div>
                <div className="about-info-item">
                  <span className="info-icon">📞</span>
                  <span className="info-text">Your info here</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-bottom-section">
            <div className="about-skills">
              <div className="skills-row">
                <div className="skills-column">
                  <h4 className="skills-title">UI Design</h4>
                  <ul className="skills-list">
                    <li>Visual Hierarchy</li>
                    <li>Typography</li>
                    <li>Color Theory</li>
                    <li>Design System</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                
                <div className="skills-column">
                  <h4 className="skills-title">Soft Skills</h4>
                  <ul className="skills-list">
                    <li>Teamwork</li>
                    <li>Time Management</li>
                    <li>Communication</li>
                    <li>Attention to detail</li>
                    <li>Adaptability</li>
                  </ul>
                </div>
              </div>
              
              <div className="skills-row">
                <div className="skills-column">
                  <h4 className="skills-title">UX Design</h4>
                  <ul className="skills-list">
                    <li>User Research</li>
                    <li>Wireframing</li>
                    <li>prototyping</li>
                    <li>User journey map</li>
                    <li>Usability Testing</li>
                  </ul>
                </div>
                
                <div className="skills-column">
                  <h4 className="skills-title">Languages</h4>
                  <ul className="skills-list">
                    <li>English</li>
                    <li>Hindi</li>
                    <li>Marathi</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="about-timeline">
              <div className="timeline-section">
                <h4 className="timeline-title">Experience</h4>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h5>Non-Technical Intern</h5>
                    <p className="company">Ideation labs, MIT</p>
                    <p className="timeline-date">Aug 2024 - Aug 2025</p>
                    <p className="timeline-location">Pune</p>
                  </div>
                </div>
              </div>
              
              <div className="timeline-section">
                <h4 className="timeline-title">Education</h4>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h5>B.u.s.c.a. Vishwakarma Institute Of Information Technology</h5>
                    <p className="course">Computer Science and Engineering (Artificial Intelligence)</p>
                    <p className="timeline-date">[Year] - [Year]</p>
                    <p className="timeline-location">Pursuing</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h5>K.A.N.M.S Science college</h5>
                    <p className="course">HSC (12th) State board</p>
                    <p className="timeline-date">[Year] - [Year]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
