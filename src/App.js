// App.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./App.module.css";
import "./App.css";
import Footer from "./Footer";
import backgroundVideo from "./3D House Animation_1.mp4";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from './4.jpg';
import image6 from "./5.jpg";
import image7 from './b6.jpeg';
import p2 from "./p4.jpg";
import s1 from "./s1.png";
import s2 from "./s2.png";
import s3 from "./s3.png";
import s4 from "./s4.png";
import s6 from "./s6.png";
import s5 from './s5.png';
import s7 from "./s7.png";
import s8 from "./s8.png";
import s9 from "./s9.png";
import s10 from "./s10.png";
import s11 from "./s11.png";
import s12 from "./s12.png";
import b4 from "./Safety First.png";
import s13 from './S13.png'

import a1 from './tata-removebg-preview.png';
import a2 from './indianoil.png';
import a3 from './Aditya-removebg-preview (copy).png';
import a4 from './AMNS-removebg-preview.png'  ;
import a5 from './imfa-removebg-preview.png';
import a6 from './mittal-removebg-preview.png';
import a7 from './igkc-removebg-preview (copy).png';
import a8 from './jindal-removebg-preview.png';

import a10 from './bgu-removebg-preview.png';
import a11 from './bimtech.jpeg';
import a12 from './cpwd-removebg-preview.png';
import a13 from './dion-removebg-preview.png';
import a14 from './essar-removebg-preview.png';

import a17 from './pwd-removebg-preview.png';
import a18 from './Sri_Sri-removebg-preview.png';
import a19 from './vedant-removebg-preview (1).png';

const App = () => {
  const images = [image1, image2, image3, image6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/menu");
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
    <div className={classes.container}>
      <div className={classes.mainContent}>
        <div className={classes.FirstBlock}>
          <div className={classes.tag}>Building Tomorrow's Infrastructure Today</div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={classes.image}
              style={{
                animationDelay: `${index * 0.5}s`,
                opacity: index === currentImageIndex ? 1 : 0,
              }}
            />
          ))}
        </div>

        <div className={classes.secondBlock}>
          <video autoPlay muted loop className={classes.backgroundVideo}>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className={classes.overlay}></div>
          <div className={classes.block}>
            <h1 className={classes.secondBlockHeader}>Company</h1>
            <h2 className={classes.secondBlockSubheader}>NN ENGINEERS</h2>
            <button className={classes.knowMoreButton}>KNOW MORE</button>
            <h2 className={classes.subheader}>
              Building Tomorrow's Infrastructure Today, Your Trusted Partner for
              Innovative Solutions and Sustainable Development
            </h2>
          </div>
        </div>
        <div className={classes.thirdBlock}>
          <div className={classes.text2}>WE MAKE YOUR VISION A REALITY </div>
        </div>

        <div className={classes.fourthBlock}>
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
        </div>

        <div className={classes.fifthBlock}>
          <h1>People</h1>
          <img src={b4} className={classes.image} alt="People Background" />
        </div>

        <div className={classes.sixthBlock}>
          <h1>Our Clients</h1>
          <div className={classes.clientImages}>
            {clients.map((client, index) => (
              <img key={index} src={client} alt={`Client ${index + 1}`} className={classes.clientImage} />
            ))}
          </div>
        </div>
      </div>
      <Footer className={classes.footer}/>
    </div>
  );
}

export default App;

