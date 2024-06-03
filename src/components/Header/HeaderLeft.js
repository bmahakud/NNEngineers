import React,{useState} from 'react'; 
import classes from './HeaderLeft.module.css';
import {BsList} from 'react-icons/bs';
import CourseDropDown from './CourseDropDown';
import { useHistory } from "react-router-dom";

import {IoMdArrowRoundBack } from 'react-icons/io';


import {SiRedux} from 'react-icons/si';

import topperlogo from './topperlogo.png';

function HeaderLeft(props){

    let history = useHistory();
    const [courseDropDown, setCourseDropDown]=useState(false);


    const showCourses=()=>{
       setCourseDropDown(true);
    }


    const hideCourses=()=>{
      setCourseDropDown(false);
    }


   const dashClickHandler=()=>{
   
   history.push("../../dashboard/general/courses");	   

   }


   const backToDashboard=()=>{
     localStorage.removeItem('preferredCourseId');
     history.push('../../dashboard/general/courses');



   }	

   const homepageHandler=()=>{

    history.push("/");

   }




 console.log("userData: ", props.userData);


return (

 <div className={classes.headerLeft} > 


      { localStorage.getItem('preferredCourseId') !=null && 
      <button type="button" className={classes.backButton} onClick={backToDashboard}> <IoMdArrowRoundBack className={classes.BackIcon}/> </button>
      }



       <div className={classes.logoText} onClick={homepageHandler}>
          <img src={topperlogo} className={classes.topperLogo}/>

	</div>
       

      <button className={classes.ExpConButton} onClick={props.onPress}> 
	  <BsList className={classes.ExpConIcon} />
      </button>	

     <div >
        <span>Home </span> 
	{props.userData !==null && Number(props.userData.usertype.id) === 2  && <span style={{color:"grey"}}> : Topper Account</span> } 
        {props.userData !==null && Number(props.userData.usertype.id) === 3  && <span style={{color:"grey"}}> : Student Account</span> }
        {props.userData !==null && Number(props.userData.usertype.id) === 1  && <span style={{color:"grey"}}> : Admin Account</span> }

     </div>

  </div>

);


}

export default HeaderLeft;

