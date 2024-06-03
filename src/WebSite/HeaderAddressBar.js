import classes from "./Header.module.css";
import { FaBars } from "react-icons/fa";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsEnvelope,
} from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import {useHistory} from 'react-router-dom';

import logoImage from './topperlogo.png';

import Logo from '../CommonApps/Logo';



const HeaderAddressBar = (props) => {


  const history = useHistory();


  const faceBookHandler = () => {
    window.open(
      "https://www.facebook.com/diracai",
      "_blank"
    );
  };

  const xHandler = () => {
    window.open(
      "https://twitter.com/DiracAI1",
      "_blank"
    );
  };

  const youTubeHandler = () => {
    window.open(
      "https://www.youtube.com/@DiracAIVlogs",
      "_blank"
    );
  };

  const linkedinHandler = () => {
    window.open(
      "https://www.linkedin.com/company/diracai-services/?viewAsMember=true",
      "_blank"
    );
  };


  

  


   const loginHandler=()=>{

    history.push('/app/home/slots'); 

   }


   const registerHandler=()=>{

    history.push('/registerasstudent');

   }


   const homePageHandler=()=>{

     history.push('/');

   }


   const dropDownHandler=()=>{

     props.showDropDownHeaderHandler();

   }


   const closeDropDownHandler=()=>{

    props.closeDropDownHeaderHandler();

   }





  return (
    <div className={classes.topbar}>

      <div className={classes.inner_topbar}>
        <div className={classes.rightContainer}>

          <div className={classes.firstTopContainer}>
	    {/*
	    <Logo/>
	    <div className={classes.helloToppersText}>Hello Toppers </div>
	    */}
	    
             <div className={classes.logoCSS} style={{color:"var(--themeColor)"}} onClick={homePageHandler}>	     
                  {/* <img src={logoImage} className={classes.logoImage}/>*/}
                  <Logo/>                  
                  <span className={classes.companyName}> DiracAI </span>
             </div>
	    
	      {/*
               <div className={classes.textEmail}>
                 pradhanbimalendu@gmail.com
               </div>
	      */}
          </div>

               {/*
                 <div className={classes.secTopContainer}>
                  <div className={classes.mobileIcon}></div>
                  <div className={classes.mobileNumber}>+91 929399494959</div>
                 </div>
	       */}
        </div>

        <div className={classes.socialiconContainer}>
	  <div className={classes.innerSocialMediaContainer}>
          <button className={classes.fbicon} onClick={faceBookHandler}>
             <FaFacebookF size={20} />
          </button>
          <button className={classes.fbicon} onClick={xHandler}>
             <BsTwitter size={20} />
          </button>
          <button className={classes.fbicon} onClick={linkedinHandler}>
             <FaLinkedinIn size={20} />
          </button>
          <button className={classes.fbicon} onClick={youTubeHandler}>
             <BsYoutube size={25} />
          </button>
         </div>

         {/*
         <button type="button" className={classes.registrationButton} onClick={registerHandler}>
             Register
         </button>


         <button type="button" className={classes.loginButton} onClick={loginHandler}>
             Login
         </button>
	 */}


        { !props.showDropDownHeader &&        
	 <button type="button" className={classes.dropDownBarButton} onClick={dropDownHandler}>
             <FaBars/>
         </button>
	}

       { props.showDropDownHeader &&
         <button type="button" className={classes.dropDownBarButton} onClick={closeDropDownHandler}>
             <BsXLg/>
         </button>
        }






        </div>
      </div>
    </div>
  );
};

export default HeaderAddressBar;
