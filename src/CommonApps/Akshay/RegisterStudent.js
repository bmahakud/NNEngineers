import React, { useState, useEffect, CSSProperties } from "react";
import LoginHeader from "../LoginHeader";
import classes from "./Login.module.css";
//import {OptionField} from './OptionField';
import {createaccountstudent, checkuserexist, checkifuserexist} from '../AllAPICalls';
import FadeLoader from "react-spinners/FadeLoader";
import {BsCheckLg} from 'react-icons/bs';
import { useHistory } from "react-router-dom";
import cover from "./a_Register_as_a_student banner.jpg";
import { BsGoogle, BsFacebook, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Login from './Login';
import basewebURL from '../../basewebURL';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import Logo from '../Logo';

import img1 from './registerimg.jpg';
import { FaHome } from "react-icons/fa";

import flag from './india.png';

import topperlogo from './topperlogo.png';


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


function areAllDigits(str) {
  return /^\d+$/.test(str);
}




  const InputFieldType = (formData) => {

      if(formData.inputfield.includes("+") && areAllDigits(formData.inputfield.replace('+','')) ){
       return "phoneno"
      }

     if (formData.inputfield.includes("@")){
      return "email"	     
     }	  
     return "none"
    
  };







const Register=()=>{


    const [loading, setLoading] = useState("notcreated");

    const inActiveColor = {color: "grey",
    backgroundColor:"lightgrey",
    borderStyle:"none",
    borderWidth:"1px"}

    const activeColor = {color: "white",
    backgroundColor:"var(--themeColor)",
    borderStyle:"none",
    borderWidth:"1px"}




    const history = useHistory(); 	
    let color="var(--themeColor);";
    const initialFormData = {
	        inputfield: '',
	        inputfieldtype:'',
                username:null,
	        email:null,
	        phoneno:"",
	        usernamelength:8
        };

    const [formData, updateFormData] = useState(initialFormData);



    const handleChangeInputHandler=(event)=>{

	console.log("formData.phoneno.length: ", formData.phoneno.length);    

     updateFormData({
                        ...formData,
                        [event.target.name]: event.target.value.trim(),
                });

    }




    const handleSubmit=()=>{

       //onChangeCaptchaHandler();

       if(userExists){
         alert("Phone number is already registered. Login instead");
        return null;       
       }
             
      // if(!captchaResult){
      //    alert("Check the captcha");
      //	  return null;
      // }

      //if(formData.phoneno.length !==10){

       //  alert("Only 10 digit mob nos are allowed")
       //   return null;
      //}

	    
     // console.log("formData:::", formData);    
      setLoading(loading=>"creating");
      createaccountstudent({formData, setLoading});

       //if( !userExists )
	    {/*
           if(InputFieldType(formData) ==="email"){
             formData['email']= formData.inputfield;	
            }		   

            if(InputFieldType(formData) ==="phoneno"){
             formData['phoneno']= formData.inputfield;
            } 

            console.log("formdata create account: ", formData);

           setLoading(loading=>"creating");
	   createaccountstudent({formData, setLoading});
           */}
    }



   

    const [userExists, setUserExists] = useState(false);
      
       useEffect(()=>{
         
	  let userinput = "+91"+formData.phoneno;
          checkifuserexist({setUserExists, userinput });

       },[formData.phoneno]);
       

     console.log("userExists: ", userExists);


    //let classRank=["+91","+353","+49"]
    //<OptionField handleChange={handleChange}  label="+91" name="countrycode"  options={classRank}/>
    const [login, setLogin] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleRedirectLogin=()=>{     	    
     //history.push('app/home/tools/');
     setLogin(true);

    }

    const [captchaResult, setCaptchaResult] = useState(false);

    const onChangeCaptchaHandler=(value)=>{

      //console.log('Captcha value:', value);
     fetch(`${basewebURL}/api/verifycaptcha/`, {
         method: 'POST',
         body: JSON.stringify({ 'captcha_value': value }),
         headers: { 'Content-Type': 'application/json' }
     })
     .then(res => {
        if (!res.ok) {
                throw new Error('Network response was not ok');
         }
        return res.json();
     })
      .then(data => {
         if (data && data.captcha && typeof data.captcha.success === 'boolean') {
              console.log("captcha value:", data.captcha.success);
              setCaptchaResult(data.captcha.success);
      } else {
         console.error("Invalid response format from the server");
            }
      })
      .catch(error => {
         console.error("An error occurred:", error);
           // Handle the error here, e.g., show an error message to the user
      });

    }



    const TnSHandler=()=>{
      window.open("https://hellotoppers.com/TermsofUse", "_blank");
    }


    const privacyHandler=()=>{
      window.open("https://hellotoppers.com/Privacypolicy", "_blank");
    }


   const contactUsHandler =()=>{
    window.open("https://hellotoppers.com/contactus", "_blank");
   }




   let input = formData.inputfield;

  const loginHandler=()=>{

     window.open("https://hellotoppers.com/app/home/slots","_blank");

  }


  let homeButtonHandler=()=>{

    history.push("/");	  

  }
   

return (

<div className={classes.mainDiv}>

  { loading !=="created" &&	
    <div className={classes.homebuttonDiv}>
     <button type="button" onClick={homeButtonHandler} className={classes.homeRedirectButton}>
        <FaHome size={25}/>
     </button>
   </div>
  }
	  

    { loading==="creating" &&  
          <div className={classes.registerDiv}>
	       <div className={classes.titleDiv}> <h2>Creating ... </h2> </div>
	       <div style={{margin:'auto'}}>
                   <FadeLoader color={color} loading={true} css={override} size={50}   />
	       </div>
          </div>
    }



   { loading ==="created" && !login &&

      <div className={classes.registerDiv}>

           <div className={classes.titleDiv}> <h2><BsCheckLg style={{color:"green"}}/> Account created successfully! </h2> </div>


            <div className={classes.submitButtonDiv}>

                <button type="button" onClick={handleRedirectLogin} className={classes.sendOTPButton} > <b> Login Now</b>  </button>

            </div>



      </div>

   }


   { login &&

     <Login setLoggedIn={setLoggedIn} loadedUsername={formData.inputfield}/>

   }


  { loading==="notcreated" && 

     <div className={classes.subMainDiv}>
          
            <div className={classes.image}>
              <img className={classes.coverImg} src={cover} alt="logo"></img>
            </div>

        <div className={classes.parentdiv}>
          <div className={classes.topBar}>
	    <div className={classes.logoDiv}> <img src={topperlogo} className={classes.logoImage}/> 
	    </div>
            <div className={classes.loginTitle}> Register as Student </div>
          </div>

          <div className={classes.midContent}>

              <div className={classes.loginTitleText}>Type Your Mob Number to Register</div>

              <div className={classes.mainContainer}>
                 <div className={classes.flagcode}>		     
                     <img className={classes.flagImg} src={flag} alt="logo"/> 
                     <div className={classes.countryCode}> +91 </div>
	         </div>   
                 <input
                     className={classes.editmobileNuBox}
                     type="number"
                     placeholder=" Mobile Number.."
	             onChange={handleChangeInputHandler}
	             name="phoneno"
                     />         		      
              </div>


              <button className={classes.createBtn} 
	              type="button" 
	              onClick={handleSubmit} 
	              style={formData.phoneno.length === 10 ? activeColor : inActiveColor }
	              disabled = {formData.phoneno.length === 10 ? false : true }
		      >
		  Register
	      </button>

              <div className={classes.alreadyRegisteredDiv}> Already registered? 
	          <button className={classes.alreadyloginnow} type="button" onClick={loginHandler}>  Login Now </button>
	      </div>             
          </div>


          <div className={classes.bottomBar}>        
            <div className={classes.textTitleBottom1}>
              <button className={classes.contactUS} onClick={contactUsHandler}>Contact US</button>
              <button className={classes.termOfService} onClick={TnSHandler}>
                Terms Of Service
              </button>
              <button className={classes.privacyText} onClick={privacyHandler}>
                Privacy Policy
              </button>
            </div>
          </div>



        </div>
      </div>




  }




</div>

);

}

export default Register;
