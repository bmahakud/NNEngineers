import React, { useState,useEffect } from 'react';
import classes from './ContentDivUserProfile.module.css';
import ProfileImageSec from './ProfileImageSec/ProfileImageSec';
//import ProfileInformationAndSetting from './ProfileInformationAndSetting';
import {getuser} from '../../../CommonApps/AllAPICalls';

import ProfileUnitBlock from './ProfileUnitBlock';


const ContentDivUserProfile=(props)=>{



return (

<div className={classes.contentDivUserProfile}>
  	
  <ProfileImageSec  userData={props.userData} rerender={props.rerender}/>
  
  <ProfileUnitBlock userData={props.userData} rerender={props.rerender} />
  
</div>

);

}


export default ContentDivUserProfile;
