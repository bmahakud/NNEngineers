import classes from "./ServicesDetails.module.css"
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';


const ServicesDetails = (props) => {




  return (
    <div className={classes.parentNews}>
     

      <div className={classes.newsContainer}>
        <div className={classes.newsBlock1}>

          <div className={classes.imgAndHeading}>
            <img className={classes.mainImg} src={props.Image} alt="logo"></img>
          </div>

          <div className={classes.contentDetails}>
            <div className={classes.mainTitle}>{props.Service.title}</div>

            <div className={classes.newsDetails}>
              {props.Service.longDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
