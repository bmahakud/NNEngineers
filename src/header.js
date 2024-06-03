// src/Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./header.module.css";
import icon from "./menu.png";
import search from "./search.png";
import logo from "./logo.png";

function Header() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <div className={classes.header} style={{ height: "100px" }}>
      <div className={classes.logoContainer}>
        <img src={logo} alt="Logo" className={classes.logo} />
      </div>
      <div className={classes.iconsContainer}>
        <button className={classes.searchButton} onClick={handleSearchClick}>
          <img src={search} alt="Search Icon" className={classes.searchIcon} />
        </button>
        <button className={classes.menuButton} onClick={handleMenuClick}>
          <img src={icon} alt="Menu Icon" className={classes.menuIcon} />
        </button>
      </div>
    </div>
  );
}

export default Header;
