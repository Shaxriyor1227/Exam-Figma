import React, { useState } from 'react';
import './Book.css';

// Assets import
import mapImage from '../../assets/Map.png';

const Book = () => {
  const [formData, setFormData] = useState({
    date: '04/03/2021',
    time: '08:30 PM',
    name: '',
    phone: '',
    persons: '1 Person'
  });

  const [errors, setErrors] = useState({});
  const [isBooked, setIsBooked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9+\-\s()]{7,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    
    if (!formData.time) {
      newErrors.time = 'Time is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Booking submitted:', formData);
      setIsBooked(true);
      
      setTimeout(() => setIsBooked(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="book-section">
      {/* Map Background */}
      <div className="map-background">
        <img 
          src={mapImage} 
          alt="Location map" 
          className="map-image"
        />
        <div className="map-overlay"></div>
      </div>

      <div className="book-container">
        {/* Header */}
        <div className="book-header">
          <h2 className="book-title">Book A Table</h2>
          <p className="book-subtitle">
            We consider all the drivers of change gives you the components<br />
            you need to change to create a truly happens.
          </p>
        </div>

        {/* Booking Form Card */}
        <div className="book-form-card">
          {isBooked && (
            <div className="success-message">
              ✓ Table booked successfully! We'll contact you soon.
            </div>
          )}
          
          <form className="book-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date" className="form-label">Date</label>
                <div className="input-wrapper">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className={`form-input ${errors.date ? 'error' : ''}`}
                    value={formData.date}
                    onChange={handleChange}
                  />
                  <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                {errors.date && <span className="error-text">{errors.date}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="time" className="form-label">Time</label>
                <div className="input-wrapper">
                  <select
                    id="time"
                    name="time"
                    className={`form-input form-select ${errors.time ? 'error' : ''}`}
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <option value="08:00 AM">08:00 AM</option>
                    <option value="08:30 AM">08:30 AM</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="09:30 AM">09:30 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="01:30 PM">01:30 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="05:30 PM">05:30 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="06:30 PM">06:30 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                    <option value="07:30 PM">07:30 PM</option>
                    <option value="08:00 PM">08:00 PM</option>
                    <option value="08:30 PM">08:30 PM</option>
                    <option value="09:00 PM">09:00 PM</option>
                    <option value="09:30 PM">09:30 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                  </select>
                  <svg className="select-arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
                {errors.time && <span className="error-text">{errors.time}</span>}
              </div>
            </div>

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
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  placeholder="x-xxx-xxx-xxxx"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="persons" className="form-label">Total Person</label>
              <div className="input-wrapper">
                <select
                  id="persons"
                  name="persons"
                  className="form-input form-select"
                  value={formData.persons}
                  onChange={handleChange}
                >
                  <option value="1 Person">1 Person</option>
                  <option value="2 Persons">2 Persons</option>
                  <option value="3 Persons">3 Persons</option>
                  <option value="4 Persons">4 Persons</option>
                  <option value="5 Persons">5 Persons</option>
                  <option value="6 Persons">6 Persons</option>
                  <option value="7 Persons">7 Persons</option>
                  <option value="8 Persons">8 Persons</option>
                  <option value="9 Persons">9 Persons</option>
                  <option value="10 Persons">10 Persons</option>
                  <option value="10+ Persons">10+ Persons</option>
                </select>
                <svg className="select-arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
            </div>

            <button type="submit" className="book-btn">
              Book A Table
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Book;