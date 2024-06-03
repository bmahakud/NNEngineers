import classes from "./Home.module.css";

import w1 from "./s1.png";
import w2 from "./s2.png";
import w3 from "./s3.png";

import w4 from "./s4.png";
import w5 from "./s5.png";
import w6 from "./s6.png";
import innerDiv from "../Website.module.css";




const Services = () => {



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
    <div className={classes.mainWhytoppersContainer}>
      <div className={innerDiv.innerDiv}>
        <div className={classes.whyToppersTitle}>Our App Development and Data Analytics Services</div>

        <div className={classes.whyToppersContainer}>


          <div className={classes.paarent} onClick={dataanalyticsHandler}>
            <div className={classes.logo}>
              <img src={w6} className={classes.imagesExam} />
            </div>
            <div className={classes.title}>Data Analytics</div>
            <div className={classes.description}>
            Unlock actionable insights with our cutting-edge data analytics services, empowering your business decisions with precision
	    </div>
          </div>




          <div className={classes.paarent} onClick={webdevHandler}>
            <div className={classes.logo}>
              <img src={w1} className={classes.imagesExam} />
            </div>
            <div className={classes.title}>Custom Web Development:</div>
            <div className={classes.description}>
              Elevate your online presence with tailored excellence through our bespoke custom web development solutions.
	    </div>
          </div>

          <div className={classes.paarent} onClick={mobdevhandler}>
            <div className={classes.logo}>
              <img src={w2} className={classes.imagesExam} />
            </div>
            <div className={classes.title}>Mobile Development</div>
            <div className={classes.description}>
              Transforming your vision into dynamic and user-friendly reality, our mobile web development crafts captivating and engaging experiences.
            </div>
          </div>

         

          <div className={classes.paarent} onClick={edtechHandler}>
            <div className={classes.logo}>
              <img src={w4} className={classes.imagesExam} />
            </div>
            <div className={classes.title}>Ed-Tech Platform Development</div>
            <div className={classes.description}>
             Shape the future of education with our Ed-Tech platform, seamlessly blending innovation and accessibility for enriched learning."
	    </div>
          </div>

          <div className={classes.paarent} onClick={databasehandler}>
            <div className={classes.logo}>
              <img src={w5} className={classes.imagesExam} />
            </div>
            <div className={classes.title}>Database management</div>
            <div className={classes.description}>
	      Optimize your data landscape with our expert database management for streamlined operations and reliable information retrieval.
            </div>
          </div>

          <div className={classes.paarent} onClick={softtrainHandler}>
            <div className={classes.logo}>
              <img src={w3} className={classes.imagesExam} />
            </div>
            <div className={classes.title}>Software Training</div>
            <div className={classes.description}>
	      Master cutting-edge technologies with our specialized software training to elevate your professional expertise.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
