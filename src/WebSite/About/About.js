import { useEffect, useState, useRef } from "react";

import classes from "./About.module.css";

import LeftImageRightText from "./LeftImageRightText";
import RightImageLeftText from "./RightImageLeftText";

import office from "./Block2.jpg";
import aboutimage2 from "./aboutimage2.jpg";
import p1 from "./p1.png";

import aboutimage3 from "./aboutimage3.jpg";

import checklist from "./checklist.png";

import Team from "./TeamBlock";
import StartUpIndia from "./StartUpIndia.png";
import StartUpOdisha from "./StartUpOdisha.png";
import AboutImage1 from "./AboutImage1.jpg";
import innerDiv from "../Website.module.css";

const About = (props) => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    props.passMountInfo(true);

    return () => {
      isMounted.current = false;
      props.passMountInfo(false);
    };
  }, [props]);

  return (
    <div className={classes.about}>



       <div className={classes.topBlockAbout}>	 
	   <div className={innerDiv.innerDiv}>
              <div className={classes.topTitle}>
                   <h1>About  Us</h1>
	           <div style={{fontSize:"18px"}}>Shaping the Future of Technology with Innovative Software Solutions.
                   </div>
              </div>	  
           </div>
       </div>	  





     <div className={innerDiv.innerDiv}>

        <div className={classes.aboutbox}>
           <div className={classes.leftBox}>
               <img
                  className={classes.OfficeImageContainer}
                  src={AboutImage1}
                  alt="logo"
                  ></img>

               <div className={classes.whyChooseUsDescription}>
	         {/*TGRWA being awarded by Sulochana Das, Mayor - Bhubaneswar for their contributions during the pandemic*/}
               </div>
           </div>


           <div className={classes.RightBox}>
               <div className={classes.p1}>
                     Welcome to DiracAI, a forward-thinking software development company at the intersection of technology and innovation. Our journey is defined by a relentless commitment to empowering businesses and organizations with cutting-edge software solutions that transcend expectations. 
	       </div>

               <div className={classes.p2}>

                  <b> <h3>Who We Are:</h3> </b>
                       DiracAi is not just a software development company; we are a collective of visionaries, engineers, and innovators united by a passion for pushing the boundaries of what's possible. Our diverse team brings together a wealth of expertise, creativity, and a shared dedication to driving positive change through technology.


               </div>

           </div>
        </div>

      <div className={classes.aboutbox2}>
        <div className={classes.RightBox1}>
          <div className={classes.p1}>
           <h3> What Sets Us Apart</h3>
              

	  </div>

          <div className={classes.p2}>

            <ol>
              <li><b>Innovation at the Core:</b> DiracAi is driven by a culture of innovation. We embrace emerging technologies, adopt industry best practices, and constantly seek new ways to deliver software solutions that stand out in a rapidly evolving landscape.</li>

              <li><b>Collaborative Approach:</b> We believe in the power of collaboration. Our client partnerships are built on transparent communication, mutual trust, and a shared commitment to achieving exceptional results. Your success is our success.</li>

              <li><b>Agile Methodology:</b> DiracAI embraces an agile development methodology. This flexible and iterative approach allows us to respond quickly to changing requirements, ensuring that our solutions align perfectly with your evolving needs.</li>
            </ol>

	  </div>

          <div className={classes.p3}>
          </div>

        </div>

        <div className={classes.leftBox1}>
          <img
            className={classes.OfficeImageContainer}
            src={StartUpIndia}
            alt="logo"
          ></img>
        </div>
      </div>





      

      <div className={classes.whyChooseUsTitle}>Mission </div>
      
      <div className={classes.whyChooseUsDescription}>
       Our mission is clear — to empower businesses, startups, and organizations with bespoke software solutions that foster growth, efficiency, and success. We strive to be the strategic partner that transforms ideas into reality and challenges into triumphs. 
     </div>
     


      {/*
      <div className={classes.whyChooseUsContainer}>



        <div className={classes.block1st}>
          <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>

            <div className={classes.boxTitle}>Community Well-being</div>

            <div className={classes.boxDesc}>
	      To enhance the overall quality of life for residents by fostering a sense of belonging, safety, and well-being within the community.
            </div>
          </div>


          <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>

            <div className={classes.boxTitle}>Maintenance and Infrastructure:</div>

            <div className={classes.boxDesc}>
	       To ensure the upkeep and improvement of common areas, facilities, and infrastructure to meet residents' needs and expectations.
            </div>
          </div>
        </div>

      </div>
     */}






      <div className={classes.whyChooseUsTitle}>Vision</div>

      <div className={classes.whyChooseUsDescription}>
       At DiracAI, we envision a future where technology becomes a seamless enabler, breaking barriers, and transforming challenges into opportunities. We aspire to be the catalyst that propels businesses into the next era of digital excellence.

      </div>



      {/*
      <div className={classes.whyChooseUsContainer}>

          <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>
            <div className={classes.boxTitle}>Sustainable Living: </div>
            <div className={classes.boxDesc}>
	      To create a sustainable and environmentally responsible community that conserves resources and promotes eco-friendly practices.
            </div>
          </div>


          <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>
            <div className={classes.boxTitle}> Inclusivity: </div>
            <div className={classes.boxDesc}>
	      To foster an inclusive and diverse community where residents of all backgrounds feel welcome and valued.
            </div>
          </div>

           <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>
            <div className={classes.boxTitle}> Community Empowerment: </div>
            <div className={classes.boxDesc}>
	      To empower residents to actively participate in decision-making processes and contribute to the betterment of the community.
            </div>
        </div>

      </div>
    */}

    {/*
     <div className={classes.whyChooseUsContainer}>

          <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>
            <div className={classes.boxTitle}> Quality Living: </div>
            <div className={classes.boxDesc}>
	      To continually improve the quality of life by maintaining high standards of cleanliness, aesthetics, and services.
            </div>
          </div>


          <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>
            <div className={classes.boxTitle}> Resident Engagement: </div>
            <div className={classes.boxDesc}>
	     To encourage residents to take pride in their community, actively participate in RWA activities, and contribute to the overall betterment of the neighborhood.
            </div>
          </div>

           <div className={classes.box1}>
            <img className={classes.boxImg} src={checklist} alt="logo"></img>
            <div className={classes.boxTitle}> Safety and Security: </div>
            <div className={classes.boxDesc}>
	       To establish a reputation for being a safe and secure place to live, where residents can enjoy peace of mind.
            </div>
        </div>

      </div>
      */}



      {/*
      <div className={classes.whyChooseUsDescription}>
	  It's important to note that the specific mission and vision of TGRWA may evolve over time in response to changing community needs and priorities. Therefore, regular communication and feedback from residents are essential to ensure that the RWA's mission and vision align with the current desires and expectations of the community members.
      </div>
      */}





	<Team/>





      <div className={classes.process}>
        <div className={classes.processBox1}>
	  
          <div className={classes.processTitle}> Our Expertise</div>

          <div className={classes.processDesc}>
	    DiracAi specializes in a range of services, including:
          </div>


          <img className={classes.processImage} src={StartUpOdisha} alt="logo"></img>
	  
        </div>

        <div className={classes.processBox2}>
	  
          <div className={classes.processCard}>
            <img className={classes.cardIcon} src={p1} alt="logo"></img>

            <div className={classes.processContent}>
              <div className={classes.title}> Custom Software Development</div>

              <div className={classes.processDesc}>
	        Custom Software Development: Crafting tailor-made solutions that address your unique business challenges.
              </div>
            </div>
          </div>

	  
          <div className={classes.processCard}>
            <img className={classes.cardIcon} src={p1} alt="logo"></img>

            <div className={classes.processContent}>
              <div className={classes.title}> Web and Mobile App Development</div>

              <div className={classes.processDesc}>
                Web and Mobile App Development: Creating user-centric, scalable, and innovative applications for web and mobile platforms.
              </div>
            </div>
          </div>

	  
          <div className={classes.processCard}>
            <img className={classes.cardIcon} src={p1} alt="logo"></img>

            <div className={classes.processContent}>
              <div className={classes.title}> Data Analytics: </div>

              <div className={classes.processDesc}>
	        Data Analytics: Leveraging data to derive actionable insights that drive informed decision-making.
              </div>
            </div>
          </div>
	  
        </div>
	


      {/*
      <div className={classes.aboutLastSection}>
        <div className={classes.lastSectionTitle1}> Contact Us Today</div>

        <div className={classes.lastSectiondesc1}>
	  Ready to embark on a transformative journey with DiracAi? Contact us today to explore how our innovative software solutions can elevate your business to new heights.
        </div>

      </div>
     */}


     </div>


     </div>	  


    </div>
  );
};

export default About;
