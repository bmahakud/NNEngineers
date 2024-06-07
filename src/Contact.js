import React from "react";
import classes from './Contact.module.css';
import Footer from "./Footer";
import "./App.css";
import './contact.jpg';

function ContactPage() {
  
  const companyContact = {
    email: "contact@company.com",
    phone: "123-456-7890",
    address: "123 Main Street, Cityville",
  };

  return (
    <div className={classes.ContactPage}>
      
    
      <div className={classes.ContactForm}>
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className={classes.ContactDetails}>
        <div className={classes.ContactBox}>
          <p className={classes.ContactLabel}>Address</p>
          <p className={classes.ContactInfo}>{companyContact.address}</p>
        </div>
        <div className={classes.ContactBox}>
          <p className={classes.ContactLabel}>Phone</p>
          <p className={classes.ContactInfo}>{companyContact.phone}</p>
        </div>
        <div className={classes.ContactBox}>
          <p className={classes.ContactLabel}>Email</p>
          <p className={classes.ContactInfo}>{companyContact.email}</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactPage;
