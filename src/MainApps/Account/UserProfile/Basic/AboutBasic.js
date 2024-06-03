import React from "react";
import classes from './AboutBasic.module.css';


import UnitBar from './UnitBar';
import UnitBarFirstName from './UnitBarFirstName';
import UnitBarLastName from './UnitBarLastName';
import UnitBarRole from './UnitBarRole';
import UnitBarEMail from './UnitBarEMail';

import UnitBarClass from './UnitBarClass';
import UnitBarSchool from './UnitBarSchool';
import UnitBarCity from './UnitBarCity';
import UnitBarState from './UnitBarState';
import UnitBarCountry from './UnitBarCountry';
import UnitBarTitle from './UnitBarTitle';


import UnitBarGenDOB from './UnitBarGenDOB';
import UnitBarGender from './UnitBarGender';
import UnitBarPosiEmail from './UnitBarPosiEmail';


import UnitAboutIcon from './UnitAboutIcon';
import UnitEducationIcon from './UnitEducationIcon';
import UnitContactIcon from './UnitContactIcon';
import UnitBarInstDegree from './UnitBarInstDegree';




import UnitBarAchievement from './UnitBarAchievement';

import UnitSkillIcon from '../Advanced/UnitSkillIcon';



const AboutBasic=(props)=>{



   const dateformat=(date)=>{

    let date_=String(date);
   
    if (date_ !==null){

        let year=date_.split("-").at(0);
        let month=date_.split("-").at(1);
        let day= date_.split("-").at(2);
  
	let monthMap = {"01":"Jan", "02":"Feb","03":"March",
		"04":"April","05":"May","06":"Jun","07":"July",
		"08":"Sept","09":"Oct","10":"Oct",  "11":"Nov","12":"Dec"}    
        let monthName= monthMap[month];   
 
	let reObj = monthName+" "+year;    

      return reObj;

      }



     return "N/A"


   }



  console.log("userData::::::::::: ", props.userData);	



return (


<div className={classes.about_Basic}>	

   	
    	

    <UnitBar/>
     
    <UnitAboutIcon  userDataUpdated={props.userDataUpdated} userData={props.userData} rerender={props.rerender}/>
    
  


    <div className={classes.aboutInfoContainer}>

        <div className={classes.InfoBoxLeft}>

            <div className={classes.oneFieldInfo}>
	            <span className={classes.fieldTitle}> Firstname: </span> 
	            <span className={classes.fieldValue}> {props.userData.firstname} </span>  
	    </div>

            <div className={classes.oneFieldInfo}>
                    <span className={classes.fieldTitle}> Lastname: </span>
                    <span className={classes.fieldValue}> {props.userData.lastname} </span>
            </div>



         
            <div className={classes.oneFieldInfo}>
                    <span className={classes.fieldTitle}> Gender: </span>
                    <span className={classes.fieldValue}>
                         {props.userData.gender }
                    </span>
            </div>

            <div className={classes.oneFieldInfo}>
                    <span className={classes.fieldTitle}> Email: </span>
                    <span className={classes.fieldValue}>
                         {props.userData.email }
                    </span>
            </div>

            <div className={classes.oneFieldInfo}>
                    <span className={classes.fieldTitle}> PhoneNo: </span>
                    <span className={classes.fieldValue}>
                         {props.userData.phoneno }
                    </span>
            </div>

            <div className={classes.oneFieldInfo}>
                    <span className={classes.fieldTitle}> Languages: </span>
                    <span className={classes.fieldValue}>
                         {props.userData.languages }
                    </span>
            </div>








	</div>


        <div className={classes.InfoBoxRight}>

        <div className={classes.oneFieldInfo}>
                    <span className={classes.fieldTitle}> Date of Birth: </span>
                    <span className={classes.fieldValue}>
                         {props.userData.dateofbirth }
                    </span>
         </div>




         <div className={classes.oneFieldInfo}>
                    <span className={classes.fieldTitle}> Target Exam/Yr: </span>
                    <span className={classes.fieldValue}>
                         {props.userData.targetexam+"-"+props.userData.targetyear }
                    </span>
         </div>


         <div className={classes.oneFieldInfo}>
                    <span className={classes.fieldTitle}> Current Institute: </span>
                    <span className={classes.fieldValue}>
                         {props.userData.institute }
                    </span>
         </div>


	<div className={classes.oneFieldInfo}>
                    <span className={classes.fieldTitle}> Current City: </span>
                    <span className={classes.fieldValue}>
                         {props.userData.city }
                    </span>
        </div>


        <div className={classes.oneFieldInfo}>
                    <span className={classes.fieldTitle}> Current State: </span>
                    <span className={classes.fieldValue}>
                         {props.userData.state }
                    </span>
        </div>




        <div className={classes.oneFieldInfo}>
                    <span className={classes.fieldTitle}> Hobby:  </span>
                    <span className={classes.fieldValue}>
                         {props.userData.hobby }
                    </span>
         </div>




          


        </div>


    </div>


    <UnitBar/>


  <UnitEducationIcon/>	


     <div className={classes.aboutInfoContainer}>

         <div className={classes.InfoBoxLeft}>

                 { props.userData.educationDegrees.length > 0 &&
                    props.userData.educationDegrees.map((degree, index)=>{

                    let startYear= degree.startYear;
                    let endYear = degree.endYear

                    return  <UnitBarInstDegree  key={index}
			         id={degree.id}
                                 degree = {degree.degreename} 
                                 institute={ degree.institute}
                                 duration={startYear +" - "+ endYear}
			         marks = {degree.marks}
                                 />

                    })

                 }


         </div>

     </div>



   <UnitBar/>

   <UnitSkillIcon userData={props.userData}/>

   <div className={classes.aboutInfoContainer}>

     <div className={classes.InfoBoxLeft}>


               {/*
                    props.data.achievements.map((achievement, index)=>{

                    return  <UnitBarAchievement  key={index}
                                 achievementId={achievement.id}
                                 achievementname={achievement.name}
                                 duration={achievement.startDate+" - "+achievement.endDate}
                                 logo={props.userData.profile_image}
                                 />





                    })



              */}





     </div>	  

   </div>


   




</div>	

);


}


export default AboutBasic;
