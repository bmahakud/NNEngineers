import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./App.module.css";
import "./App.css";
import Footer from "./Footer";
import icon from "./menu.png";
import search from "./search.png";
import logo from "./logo.png";
import backgroundVideo from "./3D House Animation_1.mp4";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";
import image7 from './5.png';
import image5 from "./7.jpg";
import image6 from "./6.png";
import p1 from "./P3.jpg";
import p2 from "./p4.jpeg";
import p3 from './N.png';
import p4 from './tag.png';
import s1 from "./s1.png";
import s2 from "./s2.png";
import s3 from "./s3.png";
import s4 from "./s4.png";
import s5 from "./s5.png";
import s6 from "./s6.png";
import s7 from "./s7.png";
import s8 from "./s8.png";
import s9 from "./s9.png";
import s10 from "./s10.png";
import s11 from "./s11.png";
import s12 from "./s12.png";
import s13 from "./s13.png";
import s14 from "./s14.png";
import b4 from "./b5.jpg";
import b5 from "./b6.jpeg";

import a1 from './tata.png';
import a2 from './indianoil.png';
import a3 from './Aditya.png';
import a4 from './AMNS.png';
import a5 from './imfa.jpg';
import a6 from './mittal.png';
import a7 from './igkc.png';
import a8 from './jindal.png';
import a9 from './jsw.png';
import a10 from './bgu.png';
import a11 from './bimtech.jpeg';
import a12 from './cpwd.png';
import a13 from './dion.png';
import a14 from './essar.png';
import a15 from './gail.png';
import a16 from './gupta power.png';
import a17 from './pwd.png';
import a18 from './Sri.png';
import a19 from './vedant.png';

const App = () => {
  const images = [image1, image2, image3,image4,image6];
 
   
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isFirstBlock, setIsFirstBlock] = useState(true);

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
    if (window.scrollY > window.innerHeight) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
  };

  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const clients = [
    a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11,
    a12, a13, a14, a15, a16, a17, a18, a19 ,  a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11,
    a12, a13, a14, a15, a16, a17, a18, a19,  a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11,
    a12, a13, a14, a15, a16, a17, a18, a19
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <div className={classes.container}>
      {/*  
      <div
        className={classes.header}
        style={{
          transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
          height: "100px",
        }}
      >
        <div className={classes.logoContainer}>
          <img src={logo} alt="Logo" className={classes.logo} />
        </div>
        <div className={classes.iconsContainer}>
          <button className={classes.searchButton} onClick={handleSearchClick}>
            <img
              src={search}
              alt="Search Icon"
              className={classes.searchIcon}
            />
          </button>
          <button className={classes.menuButton} onClick={handleMenuClick}>
            <img src={icon} alt="Menu Icon" className={classes.menuIcon} />
          </button>
        </div>
      </div>

*/}
      <div className={classes.FirstBlock}>
        {/* <div className={classes.stripeBackground}> </div> */}
     
       <div className={classes.text}>COMMITTED TO</div> 
        <div className={classes.text1}>#Excellence</div> 
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
          Your browser does not support the video tag.
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
          </div>
          <div className={classes.serviceColumn}>
            <div className={classes.serviceItem}>
              <img src={s12} alt="Icon" className={classes.icon} />
              Storage Solutions
            </div>
            <div className={classes.serviceItem}>
              <img src={s9} alt="Icon" className={classes.icon} />
              Chemical Anchor Installation
            </div>
            <div className={classes.serviceItem}>
              <img src={s3} alt="Icon" className={classes.icon} />
              Industrial Structural Painting
            </div>
          </div>
        </div>
      </div>
      <div className={classes.fifthBlock}>
        <h1>People</h1>
        <p>
          Health and safety take precedence over everything else— a belief we
          uphold and an ecosystem we nurture at NN Engineers.
        </p>
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
      <Footer />
    </div>
  );
}

export default App;
