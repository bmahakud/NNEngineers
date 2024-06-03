import classes from "./Home.module.css";

import w1 from "./s1.png";
import w2 from "./s2.png";
import w3 from "./s3.png";

import w4 from "./s4.png";
import w5 from "./s5.png";
import w6 from "./s6.png";
import innerDiv from "../Website.module.css";

import SAPLogo from './SAP_logo.png';


const Services = (props) => {



  const dataanalyticsHandler=()=>{

   window.open("https://diracai.com/servicesDetails/1","__blank");

  }


  const webdevHandler=()=>{
 
   window.open("https://diracai.com/servicesDetails/2","__blank");	  
  
  }


  const mobdevhandler=()=>{

    window.open("https://diracai.com/servicesDetails/3","__blank");	  

  }	


  const edtechHandler=()=>{

   window.open("https://diracai.com/servicesDetails/4","__blank");

  }


  const databasehandler=()=>{

   window.open("https://diracai.com/servicesDetails/5","__blank");

  }


  const softtrainHandler=()=>{

   window.open("https://diracai.com/servicesDetails/6","__blank");

  }




  return (
    <div className={classes.mainWhytoppersContainer} style={{backgroundColor: "white"}}>
      <div className={innerDiv.innerDiv}>
        <div className={classes.whyToppersTitle} style={{backgroundColor: "white"}}>Our SAP Services</div>

        <div className={classes.whyToppersContainer} style={{backgroundColor: "white"}}>


          <div className={classes.paarent} >
            <div className={classes.logo}>
              <img src={SAPLogo} className={classes.imagesSAP} />
            </div>
            <div className={classes.title}>Implementation</div>
            <div className={classes.description}>
	      Leveraging our extensive SAP expertise, we develop templates and accelerators to streamline projects, resulting in quicker delivery times and reduced expenses
	    </div>
          </div>




          <div className={classes.paarent} >
            <div className={classes.logo}>
              <img src={SAPLogo} className={classes.imagesSAP} />
            </div>
            <div className={classes.title}>Support:</div>
            <div className={classes.description}>
	     Empower your SAP journey with our comprehensive support services, ensuring seamless operations and optimized performance for your business.
	    </div>
          </div>

          <div className={classes.paarent} >
            <div className={classes.logo}>
              <img src={SAPLogo} className={classes.imagesSAP} />
            </div>
            <div className={classes.title}>Resourcing</div>
            <div className={classes.description}>
             Elevate SAP initiatives with tailored resourcing, driving efficiency and success within your organization through skilled professionals
	    </div>
          </div>

         

          <div className={classes.paarent} >
            <div className={classes.logo}>
              <img src={SAPLogo} className={classes.imagesSAP} />
            </div>
            <div className={classes.title}>Competency Building</div>
            <div className={classes.description}>
	      Empower your team with our SAP competency building services to excel in SAP and maximize business potential.
	    </div>
          </div>

          <div className={classes.paarent} >
            <div className={classes.logo}>
              <img src={SAPLogo} className={classes.imagesSAP} />
            </div>
            <div className={classes.title}>Training</div>
            <div className={classes.description}>
	    Unlock SAP's potential with our comprehensive training, equipping your team to leverage technologies for business success.
	    </div>
          </div>

          <div className={classes.paarent} >
            <div className={classes.logo}>
              <img src={SAPLogo} className={classes.imagesSAP} />
            </div>
            <div className={classes.title}>Roll-out</div>
            <div className={classes.description}>
	      Efficient SAP roll-outs replicate fresh implementations across business units, ensuring standardized systems for daily operations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
