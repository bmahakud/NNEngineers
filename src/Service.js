import React, { useState } from 'react';
import classes from './service.module.css';
import Header from './header'; 
import Footers from './Footer';
import InquiryForm from './Inquiry';

import p1 from './abc.jpg';
import p2 from './r1.jpg';
import p3 from './r2.jpg';
import p4 from './r3.jpg';
import p5 from './r4.jpg';
import p6 from './r5.jpg';
import p7 from './r6.jpg';
import p8 from './r.jpg';
import p9 from './r7.jpg';
import p10 from './r8.jpg';
import p11 from './r9.jpg';
import p12 from './r11.jpg';
import p13 from './r10.jpg';
import p14 from './r12.jpg';
import p15 from './r13.jpg';
import p16 from './r14.jpg';

import s1 from './ppl.jpg';
import s2 from './ppl1.jpg';
import s3 from './ppl2.jpg';
import s4 from './ppl3.jpg';

function ServicesPage() {
  

  return (
    <div className={classes.container}>
      <Header /> 
      <div className={classes.hero}>
        <img src={p1} className={classes.heroImage} alt="Hero" />
        <div className={classes.heroText}> Our services</div>
      </div>
      
      <div className={classes.services}>
        <h2>Our Services</h2>
        <div className={classes.serviceGrid}>
          <div className={classes.serviceItem}>
            <img src={p10} alt="PEB" className={classes.serviceIcon} />
            <p>PEB-PRE-Engineered Steel Building</p>
          </div>
          <div className={classes.serviceItem}>
            <img src={p7} alt="Structural Steel" className={classes.serviceIcon} />
            <p>Structural Steel</p>
          </div>
          <div className={classes.serviceItem}>
            <img src={p11} alt="Rooftop Installation" className={classes.serviceIcon} />
            <p>Rooftop Installation Service</p>
          </div>
          <div className={classes.serviceItem}>
            <img src={p8} alt="Industrial Painting" className={classes.serviceIcon} />
            <p>Industrial Structural Painting</p>
          </div>
          <div className={classes.serviceItem}>
            <img src={p6} alt="Warehouse Shed Fabrication" className={classes.serviceIcon} />
            <p>Warehouse Shed Fabrication Services</p>
          </div>
          <div className={classes.serviceItem}>
            <img src={p12} alt="Factory Shed Fabrication" className={classes.serviceIcon} />
            <p>Factory Shed Fabrication Services</p>
          </div>
          <div className={classes.serviceItem}>
            <img src={p13} alt="Pipeline Fabrication" className={classes.serviceIcon} />
            <p>Pipeline Fabrication Services</p>
          </div>
          <div className={classes.serviceItem}>
            <img src={p16} alt="Chemical Anchor Installation" className={classes.serviceIcon} />
            <p>Chemical Anchor Installation</p>
          </div>
          <div className={classes.serviceItem}>
            <img src={p2} alt="HILTi Anchoring Services" className={classes.serviceIcon} />
            <p>HILTi Anchoring Services</p>
          </div>
          <div className={classes.serviceItem}>
            <img src={p5} alt="Core Cutting Services" className={classes.serviceIcon} />
            <p>Core Cutting Services</p>
          </div>
          <div className={classes.serviceItem}>
            <img src={p14} alt="HILTi Firestop" className={classes.serviceIcon} />
            <p>HILTi Firestop</p>
          </div>
          <div className={classes.serviceItem}>
            <img src={p15} alt="Storage Solutions" className={classes.serviceIcon} />
            <p>Storage Solutions</p>
          </div>
          {/*  
          <div className={classes.serviceItem}>
            <img src={p9} alt="Technical Advisory Service" className={classes.serviceIcon} />
            <p>Technical Advisory Service</p>
          </div>
*/}
        </div>
      </div>
      <div className={classes.testimonials}>
  <h2>Testimonials</h2>
  <div className={classes.testimonialGrid}>
    <div className={classes.testimonialItem}>
      <img src={s1} alt="Person" className={classes.testimonialImage} />
      <p className={classes.testimonialName}>Jack</p>
      <p className={classes.testimonialComment}>"NN Engineers provided exceptional service. The quality of their work on our warehouse project was outstanding and completed on time."</p>
    </div>
    <div className={classes.testimonialItem}>
      <img src={s2} alt="Person" className={classes.testimonialImage} />
      <p className={classes.testimonialName}>Jane Smith</p>
      <p className={classes.testimonialComment}>"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
    </div>
    <div className={classes.testimonialItem}>
      <img src={s3} alt="Person" className={classes.testimonialImage} />
      <p className={classes.testimonialName}>Alice Johnson</p>
      <p className={classes.testimonialComment}>"The team at NN Engineers was professional and reliable. They handled our factory shed fabrication with great attention to detail."</p>
    </div>
    <div className={classes.testimonialItem}>
      <img src={s4} alt="Person" className={classes.testimonialImage} />
      <p className={classes.testimonialName}>Bob Brown</p>
      <p className={classes.testimonialComment}>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
    </div>
  </div>
</div>

<InquiryForm />
      <Footers />
    </div>
  );
}

export default ServicesPage;
