import classes from "./Testimonial.module.css";
import React, { useRef, useEffect } from "react";

import bookAppointment from "./bookAppointment.jpg";
import t1 from "./t1.jpg";
import t2 from "./t2.jpeg";
import t3 from "./t3.jpg";

import Arindam from "./Arindam.jpeg";

import Debansh from "./debansh.jpeg";
import Santosh from "./Santosh.jpeg"

import { AiFillTwitterCircle } from "react-icons/ai";

function Testimonial() {
  // const divRef = useRef(null);

  // // Automatically scroll the div to the right on component mount
  // useEffect(() => {
  //   const scrollDiv = divRef.current;
  //   if (scrollDiv) {
  //     scrollDiv.scrollLeft = scrollDiv.scrollWidth - scrollDiv.clientWidth;
  //   }
  // }, []);

  return (
    <div className={classes.TestimonialParent}>
      <div className={classes.ourClientDetails}>
        {/* <div className={classes.clientTitle}> Voices of Change </div> */}
        <div className={classes.clientSubTitle}>
          {" "}
          Words from Our Clients..
        </div>

        <div className={classes.clientFeedbackContainer}>


          <div className={classes.aboutClinetBox}>

            <div className={classes.clientFeedback}>
              <img className={classes.clientImg} src={Arindam} alt="logo"></img>

              <AiFillTwitterCircle className={classes.socialNetworkImage} />
            </div>

            <div className={classes.clientDetails}>
	      DiracAI transformed our vision into a captivating website, exceeding our expectations with their expertise and professionalism.
            </div>

            <div className={classes.clientName}>Arindam Choudhury</div>

            <div className={classes.clientStatus}>
              Former Secretary (Trident Galaxy Residential Welfare Association)
            </div>
          </div>




          <div className={classes.aboutClinetBox}>
            <div className={classes.clientFeedback}>
              <img className={classes.clientImg} src={Debansh} alt="logo"></img>

              <AiFillTwitterCircle className={classes.socialNetworkImage} />
            </div>
            <div className={classes.clientDetails}>
	      Thanks to DiracAI, our data-driven decisions have never been more strategic and impactful, revolutionizing the way we operate.
            </div>

            <div className={classes.clientName}>Debansh Das Sharma</div>

            <div className={classes.clientStatus}>
              Founder, ClassyStreet
            </div>
          </div>

          <div className={classes.aboutClinetBox}>
            <div className={classes.clientFeedback}>
              <img className={classes.clientImg} src={Santosh} alt="logo"></img>

              <AiFillTwitterCircle className={classes.socialNetworkImage} />
            </div>
            <div className={classes.clientDetails}>
	      The web development expertise of DiracAI turned our online presence into a user-friendly masterpiece, driving engagement and boosting our brand.
            </div>

            <div className={classes.clientName}>Santosh M.</div>

            <div className={classes.clientStatus}>Sales & Marketing, HILTI</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
