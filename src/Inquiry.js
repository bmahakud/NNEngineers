
import React, { useState } from 'react';
import classes from './Inquiry.module.css';
import "./App.css";
function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
  
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  return (
    <div className={classes.enquiry}>
    <h2>Enquiry Form</h2>
    <form className={classes.enquiryForm} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
    {isSubmitted && (
      <div className={classes.thankYouNote}>
        <p>Thank you for your enquiry! We will get back to you soon.</p>
      </div>
    )}
  </div>
  );
}

export default InquiryForm;
