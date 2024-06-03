import React, { useState, useEffect } from 'react';
import classes from './App.module.css';
import "./App.css";

import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
import image5 from './5.jpg';
import image6 from './6.jpg';
import icon from './menu.png';
import search from './search(1).png';
import logo from './logo.png';
import backgroundVideo from './3D House Animation_1.mp4';
import p1 from './P3.jpg';
import p2 from './p4.jpeg';

import s1 from './s1.png';
import s2 from './s2.png';
import s3 from './s3.png';
import s4 from './s4.png';
import s5 from './s5.png';
import s6 from './s6.png';
import s7 from './s7.png';
import s8 from './s8.png';
import s9 from './s9.png';
import s10 from './s10.png';
import s11 from './s11.png';
import s12 from './s12.png';
import s13 from './s13.png';
import s14 from './s14.png';
import b4 from './b5.jpg';
import t1 from './twitter.png';
import t2 from './whatsapp.png';
import t3 from './youtube.png';
import t4 from './instagram.png'
import t5 from './facebook (1).png';
import t6 from './linkedin.png';
import t7 from './Arrow.png';
function App() {
  const images = [image1, image3, image4, image5, image6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setError('');
    } else {
      setError('Please add Email');
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.header} style={{ transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)', height: '100px' }}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Logo" className={classes.logo} />
        </div>
        <div className={classes.iconsContainer}>
          <button className={classes.searchButton}>
            <img src={search} alt="Search Icon" className={classes.searchIcon} />
          </button>
          <button className={classes.menuButton}>
            <img src={icon} alt="Menu Icon" className={classes.menuIcon} />
          </button>
        </div>
      </div>
      <div className={classes.firstBlock}>
        <div className={classes.textContainer}>
          <div className={classes.boldText}>Committed</div>
          <span>To Excellence</span>
        </div>
        <div className={classes.tagline}>
          OUR GOAL THEN AND NOW IS TO PROVIDE QUALITY ON TIME PROJECT
        </div>
        <div className={classes.block}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`${classes.image} ${index === currentImageIndex ? classes.active : ''}`}
            />
          ))}
        </div>
      </div>
      <div className={classes.secondBlock}>
        <video autoPlay muted loop className={classes.backgroundVideo}>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={classes.overlay}></div>
        <div className={classes.block}>
          <h1 className={classes.secondBlockHeader}>Company</h1>
          <h2 className={classes.secondBlockSubheader}>NN Engineers</h2>
          <button className={classes.knowMoreButton}>KNOW MORE</button>
          <img src={image2} alt="Second Block Image" className={classes.image} />
        </div>
      </div>
      <div className={classes.thirdBlock}>
        <p className={classes.visionText}>WE MAKE YOUR VISION REALITY</p>
        <img src={p2} alt="Third Block Image" className={classes.image} />
      </div>
      <div className={classes.fourthBlock}>
        <h1>Our Service And Product</h1>
        <div className={classes.serviceList}>
          <div className={classes.serviceColumn}>
            <div className={classes.serviceItem}>
              <img src={s1} alt="Icon" className={classes.icon} />
              PEB-PRE-Engineered Steel Building
            </div>
            <div className={classes.serviceItem}>
              <img src={s2} alt="Icon" className={classes.icon} />
              Structural Steel
            </div>
            <div className={classes.serviceItem}>
              <img src={s4} alt="Icon" className={classes.icon} />
              Rooftop Installation Service
            </div>
            <div className={classes.serviceItem}>
              <img src={s3} alt="Icon" className={classes.icon} />
              Industrial Structural Painting
            </div>
          </div>
          <div className={classes.serviceColumn}>
            <div className={classes.serviceItem}>
              <img src={s6} alt="Icon" className={classes.icon} />
              Warehouse Shed Fabrication Services
            </div>
            <div className={classes.serviceItem}>
              <img src={s7} alt="Icon" className={classes.icon} />
              Factory Shed Fabrication Services
            </div>
            <div className={classes.serviceItem}>
              <img src={s8} alt="Icon" className={classes.icon} />
              Pipeline Fabrication Services
            </div>
            <div className={classes.serviceItem}>
              <img src={s9} alt="Icon" className={classes.icon} />
              Chemical Anchor Installation
            </div>
          </div>
          <div className={classes.serviceColumn}>
            <div className={classes.serviceItem}>
              <img src={s10} alt="Icon" className={classes.icon} />
              HILTi Anchoring Services
            </div>
            <div className={classes.serviceItem}>
              <img src={s13} alt="Icon" className={classes.icon} />
              Core Cutting Services
            </div>
            <div className={classes.serviceItem}>
              <img src={s11} alt="Icon" className={classes.icon} />
              HILTi Firestop
            </div>
            <div className={classes.serviceItem}>
              <img src={s12} alt="Icon" className={classes.icon} />
              Storage Solutions
            </div>
          </div>
          <div className={classes.serviceColumn}>
            <div className={classes.serviceItem}>
              <img src={s14} alt="Icon" className={classes.icon} />
              Technical Advisory Service
            </div>
          </div>
        </div>
      </div>
       
      <div className={classes.fifthBlock}>
       
        <h1>People</h1>
        <img src={b4} className={classes.image} alt="People Background" />
      </div>
       
      <div className={classes.sixthBlock}>
       
    
     </div>
     <div className={classes.container}>
      <footer className={classes.footer}>
        <div className={classes.footerContainer}>
          <div className={classes.footerTop}>
            <div className={classes.footerIcons}>
              <button className={classes.iconButton}><img src={t4} alt="Icon 1" className={classes.icon} /></button>
              <button className={classes.iconButton}><img src={t2} alt="Icon 2" className={classes.icon} /></button>
              <button className={classes.iconButton}><img src={t3} alt="Icon 3" className={classes.icon} /></button>
              <button className={classes.iconButton}><img src={t1} alt="Icon 4" className={classes.icon} /></button>
              <button className={classes.iconButton}><img src={t5} alt="Icon 5" className={classes.icon} /></button>
              <button className={classes.iconButton}><img src={t6} alt="Icon 6" className={classes.icon} /></button>
            </div>
            <div className={classes.newsletter}>
              {!isSubscribed ? (
                <div className={classes.emailSubscription}>
                  <span className={classes.emailLabel}>NEWS LETTER:</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="EMAIL"
                    className={classes.emailInput}
                  />
                  <button className={classes.subscribeButton} onClick={handleSubscribe}>
                    <img src={t7} alt="Subscribe" className={classes.blinkingArrow} />
                  </button>
                  {error && <span className={classes.errorMessage}>{error}</span>}
                </div>
              ) : (
                <span className={classes.thankYouMessage}>Thank You for Subscribing!</span>
              )}
            </div>
          </div>
          <div className={classes.footerSections}>
            <div className={classes.footerSection}>
              <h2>COMPANY</h2>
              <p>About Us</p>
              <p>Leadership</p>
              <p>Locations</p>
            </div>
            <div className={classes.footerSection}>
              <h2>PORTFOLIO</h2>
              <p>Applications</p>
              <p>Marquee Projects</p>
              <p>Steel Making Process</p>
            </div>
            <div className={classes.footerSection}>
              <h2>PEOPLE</h2>
              <p>She Makes Steel Smarter</p>
              <p>Vision 2030</p>
              <p>Careers</p>
            </div>
            <div className={classes.footerSection}>
              <h2>SOCIETY</h2>
              <p>Brighter Futures</p>
            </div>
            <div className={classes.footerSection}>
              <h2>NEWSROOM</h2>
              <p>Press Releases</p>
            </div>
            <div className={classes.footerSection}>
              <h2>STORIES</h2>
              <p>Blogs</p>
            </div>
            <div className={classes.footerSection}>
              <h2>MISCELLANEOUS</h2>
              <p>CONTACT US</p>
              <p>DISCLAIMER</p>
              <p>STATUTORY DOCUMENTATION</p>
              <p>POLICIES</p>
            </div>
          </div>
          <div className={classes.footerBottom}>
            © 2024 - NN Engineers. All rights reserved.
          </div>
        </div>
      </footer>
    </div>



    </div>
  );
}

export default App;
