import React from "react";
import classes from "./ProfileUnitBlock.module.css";
//import ProfileImage from "./ProfileImage";
//import ProfileImageInfo from "./ProfileImageInfo";

import ProfileInformationAndSetting from './ProfileInformationAndSetting';


const ProfileUnitBlock = (props)=>{


return (

<div className={classes.profileImageSec}>
        
	<ProfileInformationAndSetting userData={props.userData} rerender={props.rerender}/>
</div>

);

}

export default ProfileUnitBlock;






