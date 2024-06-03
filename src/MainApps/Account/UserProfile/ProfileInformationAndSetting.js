import React,{useState} from 'react';
import classes from "./ProfileInformationAndSetting.module.css";
import UserProfileContentBasic from './Basic/UserProfileContentBasic';


const ProfileInformationAndSetting=(props)=>{




return (

<div className={classes.profileInformationAndSetting}>

    	

   <UserProfileContentBasic  userData={props.userData} rerender={props.rerender}/> 



</div>
);

}


export default ProfileInformationAndSetting;
