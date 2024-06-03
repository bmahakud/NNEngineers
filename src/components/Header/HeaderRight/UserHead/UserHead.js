import React,{useState, useEffect} from 'react';
import classes from './UserHead.module.css';
import { FaCaretDown } from "react-icons/fa";
import UserHeadDropDown from './UserHeadDropDown';
//import basewebURL from '../../../../basewebURL';
//import {getuser} from '../../../../CommonApps/AllAPICalls';
//import Greeting from './Greeting';



const UserHead =(props)=>{

   const [dropDown, setDropDown] = useState(false);


   const clickHandler = () =>{
     setDropDown(true);
   }


   const clickItem = ()=>{
     setDropDown(false);
   }


   let imageurl;
   imageurl= (props.userData !==null ? props.userData.profile_image: null);






return (



<div className={classes.UserHeadDiv}>




<button className={classes.UserHeadButton} onClick={clickHandler}>
  <i className={classes.UserFirstName}> 
    	{  ( props.userData !==null && props.userData.firstname ==="") ? props.userData.phoneno : props.userData.firstname +" "+ props.userData.lastname}

  </i>	
	
  <FaCaretDown className={classes.UsersIconHead} />
         
	<img className={classes.userImage} src={imageurl} alt='edr Logo' />
</button>

  { dropDown && <UserHeadDropDown  buttonClick={dropDown} clickItem={clickItem} setDropDown={setDropDown}   />}


</div>


);

}


export default UserHead;

