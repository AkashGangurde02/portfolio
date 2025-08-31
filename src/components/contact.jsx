import React, { useState, useEffect, useRef } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+91',
    subject: '',
    message: ''
  });

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const countries = [
    { code: '+91', flag: '🇮🇳', name: 'India' },
    { code: '+1', flag: '🇺🇸', name: 'USA' },
    { code: '+44', flag: '🇬🇧', name: 'UK' },
    { code: '+234', flag: '🇳🇬', name: 'Nigeria' },
    { code: '+86', flag: '🇨🇳', name: 'China' },
    { code: '+81', flag: '🇯🇵', name: 'Japan' },
    { code: '+49', flag: '🇩🇪', name: 'Germany' },
    { code: '+33', flag: '🇫🇷', name: 'France' },
    { code: '+61', flag: '🇦🇺', name: 'Australia' },
    { code: '+971', flag: '🇦🇪', name: 'UAE' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCurrentCountry = () => {
    return countries.find(country => country.code === formData.countryCode) || countries[0];
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCountrySelect = (countryCode) => {
    setFormData({
      ...formData,
      countryCode: countryCode
    });
    setShowCountryDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Contact <span className="contact-title-highlight">Me</span>
          </h2>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Williams"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. JohnW@gmail.com"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <div className="phone-input-wrapper">
                  <div 
                    ref={dropdownRef}
                    className="country-code" 
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  >
                    <span className="flag">{getCurrentCountry().flag}</span>
                    <span className="code">{getCurrentCountry().code}</span>
                    <svg className={`dropdown-icon ${showCountryDropdown ? 'open' : ''}`} width="12" height="8" viewBox="0 0 12 8">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {showCountryDropdown && (
                      <div className="country-dropdown">
                        {countries.map((country) => (
                          <div 
                            key={country.code}
                            className={`dropdown-item ${formData.countryCode === country.code ? 'selected' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCountrySelect(country.code);
                            }}
                          >
                            <span className="flag">{country.flag}</span>
                            <span className="code">{country.code}</span>
                            <span className="name">{country.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="8023456789"
                    className="phone-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="i.e. I need help for ...."
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Placeholder"
                className="form-textarea"
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
