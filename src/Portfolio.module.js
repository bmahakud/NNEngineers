import React from 'react';
import classes from './Portfolio.module.css';

function Portfolio() {
  return (
    <section className={classes.portfolio}>
      <h2>Portfolio</h2>
      <div className={classes.products}>
        <div>Hot Rolled Steel</div>
        <div>Cold Rolled Steel</div>
        <div>Colour Coated Steel</div>
        <div>Galvanized Steel</div>
        <div>Chequered Steel</div>
        <div>HRPO</div>
        <div>Welded Pipes</div>
        <div>Steel Plates</div>
      </div>
    </section>
  );
}

export default Portfolio;
