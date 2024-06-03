import React from "react";
import classes from "./ProfileImageSec.module.css";
import ProfileImage from "./ProfileImage";
import ProfileImageInfo from "./ProfileImageInfo";



import {BsYoutube,BsLinkedin, BsTwitter} from 'react-icons/bs';
	




const ProfileImageSec = (props)=>{



return (

<div className={classes.profileImageSec}>



      <div className={classes.unitColumn}>
	
	<div className={classes.profileImageSec__pseudo}>


            <ProfileImage userData={props.userData} rerender={props.rerender}/>
	    
            <ProfileImageInfo userData={props.userData}/>
             
        </div>
        
     </div>


     

</div>

);

}

export default ProfileImageSec;






