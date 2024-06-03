// Testimonials.js
import React from 'react';
import classes from './Servicepage.module.css';

const testimonials = [
  {
    name: "John Doe",
    text: "The service was excellent and the team was very professional."
  },
  {
    name: "Jane Smith",
    text: "Great experience working with this company. Highly recommend their services."
  }
];

function Testimonials() {
  return (
    <section className={`${classes.section} ${classes.testimonials}`}>
      <h2>Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={classes.testimonialItem}>
          <p>"{testimonial.text}"</p>
          <p><strong>- {testimonial.name}</strong></p>
        </div>
      ))}
    </section>
  );
}

export default Testimonials;
