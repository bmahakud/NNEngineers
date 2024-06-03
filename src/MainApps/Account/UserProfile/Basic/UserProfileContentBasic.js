import React from 'react';
import classes from './UserProfileContentBasic.module.css';
import AboutBasic from './AboutBasic';



const UserProfileContentBasic =(props)=>{

//console.log("userData::::::::::: ", props.userData !==null && props.userData.firstname);

return (

<div className={classes.userProfileContentBasic}>
	

<AboutBasic userData={props.userData} rerender={props.rerender}/>


</div>
);	

}


export default UserProfileContentBasic;
