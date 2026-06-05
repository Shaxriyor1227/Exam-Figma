import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Xatoni tozalash
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            We consider all the drivers of change gives you the components<br />
            you need to change to create a truly happens.
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          {isSubmitted && (
            <div className="success-message">
              ✓ Your message has been sent successfully!
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={`form-input ${errors.subject ? 'error' : ''}`}
                placeholder="Write a subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <span className="error-text">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                placeholder="Write your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <h4 className="info-title">Call Us:</h4>
            <a href="tel:+12345678900" className="info-phone">
              +1-234-567-8900
            </a>
          </div>

          <div className="info-item">
            <h4 className="info-title">Hours:</h4>
            <p className="info-text">Mon-Fri: 11am - 8pm</p>
            <p className="info-text">Sat, Sun: 9am - 10pm</p>
          </div>

          <div className="info-item">
            <h4 className="info-title">Our Location:</h4>
            <p className="info-text">123 Bridge Street</p>
            <p className="info-text">Nowhere Land, LA 12345</p>
            <p className="info-text">United States</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;