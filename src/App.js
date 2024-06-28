import React, { useState, useEffect } from 'react';
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from './4.jpg';
import image5 from "./5.jpg";
import backgroundVideo from "./3D House Animation_1.mp4";
import "./App.css";
import s1 from "./s1.png";
import s2 from "./s2.png";
import s3 from "./s3.png";
import s4 from "./s4.png";
import s5 from './s5.png';
import s6 from "./s6.png";
import s7 from "./s7.png";
import s8 from "./s8.png";
import s9 from "./s9.png";
import s10 from "./s10.png";
import s11 from "./s11.png";
import s12 from "./s12.png";
import b4 from "./Safety First.png"; 
import classes from './App.module.css';
import s13 from './S13.png'
import Footer from './Footer';
import a1 from './tata-removebg-preview.png';
import a2 from './indianoil-removebg-preview (copy).png';
import a3 from './Aditya-removebg-preview (copy).png';
import a4 from './AMNS-removebg-preview.png';
import a5 from './imfa-removebg-preview.png';
import a6 from './mittal-removebg-preview.png';
import a7 from './igkc-removebg-preview (copy).png';
import a8 from './jindal-removebg-preview.png';
import a10 from './bgu-removebg-preview.png';
import a11 from './bimtech.png';
import a12 from './cpwd-removebg-preview.png';
import a13 from './dion-removebg-preview.png';
import a14 from './essar-removebg-preview.png';
import a17 from './pwd-removebg-preview.png';
import a18 from './ssu-removebg-preview.png';
import a19 from './vedant-removebg-preview (1).png';


const images = [image1, image2, image3, image4, image5];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const handleScroll = () => {
    const sixthBlock = document.querySelector(`.${classes.sixthBlock}`);
    if (sixthBlock && sixthBlock.getBoundingClientRect().top <= window.innerHeight) {
      sixthBlock.classList.add(classes.active);
    }
  };

  const clients = [
    a1,a2,  a3, a4, a5, a6, a7, a8,  a10, a11, a12,a13, a14, a17,a18
  ];
  return (
    <div className={classes.App}>
      <header className={classes.Appheader}>
        <div className={classes.slideshow}>
          <img src={images[currentIndex]} alt="slideshow" className={classes.slideshowimage} />
          <div className={classes.overlayText}>
            Building Tomorrow's Infrastructure Today
          </div>
        </div>
      </header>
      <section className={classes.videoSection}>
        <video autoPlay muted loop className={classes.backgroundVideo}>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={classes.videoOverlayText}>
          Building Tomorrow's Infrastructure Today<br />
          Your Trusted Partner for Innovative Solutions and Sustainable Development
          <button className={classes.knowMoreButton}>Know More</button>
        </div>
      </section>
      <section className={classes.imageSection}>
        <div className={classes.imageOverlayText}>
          We Make Your Vision Reality
        </div>
      </section>
      <section className={classes.fourthBlock}>
        <h1>Our Service And Product</h1>
        <div className={classes.serviceList}>
          <div className={classes.serviceColumn}>
            <div className={classes.serviceItem}>
              <img src={s1} alt="Icon" className={classes.icon} />
              <span>PEB Engineered Steel Building</span>
            </div>
            <div className={classes.serviceItem}>
              <img src={s5} alt="Icon" className={classes.icon} />
              <span>Structural Steel</span>
            </div>
            <div className={classes.serviceItem}>
              <img src={s8} alt="Icon" className={classes.icon} />
              <span>Rooftop Installation Service</span>
            </div>
          </div>
          <div className={classes.serviceColumn}>
            <div className={classes.serviceItem}>
              <img src={s11} alt="Icon" className={classes.icon} />
              <span>Warehouse Shed Fabrication Services</span>
            </div>
            <div className={classes.serviceItem}>
              <img src={s7} alt="Icon" className={classes.icon} />
              <span>Factory Shed Fabrication Services</span>
            </div>
            <div className={classes.serviceItem}>
              <img src={s9} alt="Icon" className={classes.icon} />
              <span>Pipeline Fabrication Services</span>
            </div>
          </div>
          <div className={classes.serviceColumn}>
            <div className={classes.serviceItem}>
              <img src={s7} alt="Icon" className={classes.icon} />
              <span>HILTi Anchoring Services</span>
            </div>
            <div className={classes.serviceItem}>
              <img src={s4} alt="Icon" className={classes.icon} />
              <span>Core Cutting Services</span>
            </div>
            <div className={classes.serviceItem}>
              <img src={s11} alt="Icon" className={classes.icon} />
              <span>HILTi Firestop</span>
            </div>
          </div>
          <div className={classes.serviceColumn}>
            <div className={classes.serviceItem}>
              <img src={s2} alt="Icon" className={classes.icon} />
              <span>Storage Solutions</span>
            </div>
            <div className={classes.serviceItem}>
              <img src={s13} alt="Icon" className={classes.icon} />
              <span>Chemical Anchor Installation</span>
            </div>
            <div className={classes.serviceItem}>
              <img src={s6} alt="Icon" className={classes.icon} />
              <span>Industrial Structural Painting</span>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.fifthBlock}>
        <div className={classes.safetyOverlayText}>
          Safety isn't expensive, it's priceless
        </div>
      </section>

      <div className={classes.sixthBlock}>
          <h1>Our Clients</h1>
          <div className={classes.clientImages}>
            {clients.map((client, index) => (
              <img key={index} src={client} alt={`Client ${index + 1}`} className={classes.clientImage} />
            ))}
          </div>
        </div>
        
      <Footer className={classes.footer}/>
    
    </div>
  );
};

export default App;
