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
                   <h1>Jobs: Project Intern Opportunity</h1>
	           <div style={{fontSize:"18px"}}>Shaping the Future of Technology with Innovative Software Solutions.
                   </div>
              </div>	  
           </div>
       </div>	  





     <div className={innerDiv.innerDiv}>


      <div className={classes.aboutbox2}>
        <div className={classes.RightBox1}>
          <div className={classes.p1}>
           <h3>  Market Research and Feasibility Study for AI-Powered Learning Management System (LMS) and ERP for Educational Institutes</h3>
              

	  </div>


            <div className={classes.p1}>
               
We are an innovative technology company dedicated to developing advanced solutions for the education sector. Our flagship product is an AI-powered Learning Management System (LMS) integrated with Enterprise Resource Planning (ERP) functionalities, specifically designed for educational institutions. We are seeking motivated MBA interns to join our team and contribute to a comprehensive market survey and feasibility study.
            </div>


           <p className={classes.p1}>
            <b> Project Overview: </b>
              The selected interns will undertake a critical project to assess the market potential and feasibility of our AI-powered LMS cum ERP application. This project aims to test the usefulness of our application, gather client feedback for further improvement, and analyze the market landscape to identify target segments, pricing strategies, and market size.
	   
            </p>

	   <p className={classes.p1}> <b>Project Intern Responsibilities:</b> </p>




          <div className={classes.p2}>

            <ol>

              <li><b>Market Survey and Feasibility Analysis:</b> 
   
	         <ol>
                 <li>Design and conduct a comprehensive market survey targeting various sections of educational institutions (schools, colleges, universities, training centers, etc.).</li>
	         <li>Develop and distribute survey instruments (questionnaires, interviews) to current and potential clients.</li>
                 <li>Analyze the survey results to gauge the usefulness of our application and identify areas for improvement based on client feedback.</li>
                </ol>

	      </li>

              <li><b>Market Segmentation and Targeting:</b>
	          <ol>
                  <li> Identify and categorize different segments within the educational sector that could benefit from our application.</li>
                  <li> Conduct in-depth research to understand the specific needs and challenges of each segment.</li>
	          </ol>
	      </li>
	    
	      <li><b>Competitive Analysis and Pricing Strategy:</b> 
	        <ol>
                 <li> Research and analyze current pricing structures and value propositions offered by competitors in the market.</li>
	         <li> Assess how much educational institutions are currently paying for similar solutions and determine if our product offers a better value for money.</li>
	         <li> Develop pricing strategies and value propositions tailored to different market segments.</li>
                </ol>
	      </li>

	      <li><b>Market Size and Serviceable Market Estimation:</b> 
	        <ol>
       	         <li> Estimate the overall market size for AI-powered LMS and ERP solutions in the education sector.</li>
                 <li> Determine the serviceable market and potential market share for our application.</li>
                 <li> Provide detailed reports and presentations on market size, growth potential, and strategic recommendations.</li>
                </ol>
	      </li>

	      <li><b>Client Interaction and Feedback Collection:</b> 
                
                 <ol>
                    <li> Engage with current and prospective clients to gather detailed feedback on our application.</li>
                    <li> Organize and participate in client meetings, presentations, and demos to showcase the features and benefits of our product.</li>
	            <li> Summarize client feedback and suggest modifications to enhance the application’s effectiveness and user experience.</li>
	         </ol>

	      </li>

            </ol>

	  </div>


          <div className={classes.p2}>
            <p> <b>Qualifications </b></p>

             <ol>

               <li> Currently pursuing an MBA with a focus on Marketing, Business Development, Market Research, or a related field.</li>
	       <li> Strong analytical skills with the ability to interpret complex data and make strategic recommendations.</li>
	      <li> Excellent communication and interpersonal skills for engaging with clients and stakeholders.</li>
	      <li> Proficiency in using survey tools, data analysis software, and presentation tools.</li>
	       <li> Self-motivated, detail-oriented, and capable of working independently as well as part of a team.</li>

             </ol>
          </div>

          <div className={classes.p3}>
          </div>




          <div className={classes.p2}>
            <p> <b>Internship Duration: </b></p>
 
	      <p>3 to 6 months, with the possibility of extension based on performance and project requirements. </p>

          </div>


	  <div className={classes.p2}>
            <p> <b>Location: </b></p>

              <p>Hybrid: Office Address: HIG-306, Kalinga Vihar, Bhubaneswar </p>

          </div>


          <div className={classes.p2}>
            <p> <b>Benifits </b></p>

             <ol>

               <li> Hands-on experience in market research and business strategy development.</li>
               <li> Opportunity to work on a high-impact project with real-world applications.</li>
              <li> Mentorship from experienced professionals in the tech and education sectors.</li>
              <li> Potential for full-time employment based on performance and company needs.</li>

             </ol>
          </div>


          <div className={classes.p2}>
            <p> <b>How to Apply: </b></p>

              <p> Interested candidates should submit their resume, cover letter, and a brief statement of interest outlining their relevant experience and skills to email <span style={{color:"var(--themeColor)"}}>contact@diracai.com</span> and contact by whatsapp to +917008639757 .

Join us in revolutionizing the education sector with cutting-edge technology! </p>

          </div>











        </div>


       











     </div>


      
    </div>





    </div>
  );
};

export default About;
