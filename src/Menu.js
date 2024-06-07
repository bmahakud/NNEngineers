import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Menu.module.css';
import Header from './header';
import t1 from "./twitter.png";
import t2 from "./whatsapp.png";
import t3 from "./youtube.png";
import t4 from "./instagram.png";
import t5 from "./facbook(1).png";
import t6 from "./linkedin.png";

function Menu() {
  return (
    <div className={classes.pageContainer}>
      <div className={classes.head}>
        <button className={classes.closebutton}>
          <Link to="/" className={classes.closeLink}>
            CLOSE
          </Link>
        </button>
      </div>

      <div className={classes.menuContainer}>
        <ul className={classes.menuItems}>
          <li>
            <span className={classes.number}>01.</span>
            <Link to="/" className={classes.text}>Home</Link> 
          </li>
          <li>
            <span className={classes.number}>02.</span>
            <Link to="/about" className={classes.text}>About</Link> 
          </li>
          <li>
            <span className={classes.number}>03.</span>
            <Link to="/services" className={classes.text}>Services</Link> 
          </li>
          <li>
            <span className={classes.number}>04.</span>
            <Link to="/project" className={classes.text}>Projects/Clients</Link>
          </li>
          <li>
            <span className={classes.number}>05.</span>
            <Link to="/team" className={classes.text}>Team</Link> 
          </li>
          <li>
            <span className={classes.number}>06.</span>
            <Link to="/contact" className={classes.text}>Contact</Link> 
          </li>
        </ul>
      </div>

      <div className={classes.socialIcons}>
        <img src={t1} alt="Twitter" className={classes.socialIcon} />
        <img src={t2} alt="WhatsApp" className={classes.socialIcon} />
        <img src={t3} alt="YouTube" className={classes.socialIcon} />
        <img src={t4} alt="Instagram" className={classes.socialIcon} />
        <img src={t5} alt="Facebook" className={classes.socialIcon} />
        <img src={t6} alt="LinkedIn" className={classes.socialIcon} />
      </div>
    </div>
  );
}

export default Menu;
