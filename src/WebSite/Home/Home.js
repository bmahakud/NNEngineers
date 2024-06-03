import { useEffect, useState, useRef } from "react";

import classes from "./Home.module.css";
import IntroductionBlock from "./IntroductionBlock";
import CenterColumnLeftRightGrid from "./CenterColumnLeftRightGrid";
import Testimonial from "./Testimonial";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import TeamBlock from "./TeamBlock";
import Appointment from "./Apointment";
import BlogAndNewsBlock from "./BlogAndNewsBlock";
import LeftImageRightText from "./LeftImageRightText";
import OneNewsBlock from "../News/OneNewsBlock";

import innerDiv from "../Website.module.css";

import FirstBlock from "./FirstBlock";
import SecBlock from "./SecondBlock";

import imageNews1 from "../News/A11.png";
import imageNews2 from "../News/A2 .jpg";
import Exam from "./choose_topper.gif";
import Exam2 from "./book_session.gif";
import Exam3 from "./attend_session.gif";
import Services from "./Services";
import SAPServices from "./SAPServices";

import get1to1guidance from "./get1to1guidance.png";

import Exambox from "./Exambox";
import ToppersCard from "./ToppersCard";

import w1 from "./a_specialized_guidance.png";
import w2 from "./a_top_class_mentoring.png";
import w3 from "./a_exam_success.png";

import w4 from "./a_interactive learning.png";
import w5 from "./a_adaptive_learning.png";
import w6 from "./a_insights_from_toppers.png";

import ChooseTopper from "./choose_topper.gif";

import WhyHelloToppersCard from "./WhyHelloToppersCard";
import HowitWorks from "./HowitWorks";

import ExamBoxMain from "./ExamBoxMain";
import BoxSlide from "./ExamBoxSlideBibhu";
import ToppersCardSlide from "./ToppersCardSlideBibhu";

import BookIcon1 from "./choose_a_topper.png";
import BookingIcon from "./book_a_session.png";
import UserBooking from "./book_a_session.png";

import { useHistory } from "react-router-dom";

import cardImage1 from "./CATnew.jpg";
import cardImage2 from "./GATEnew.jpg";
import cardImage3 from "./UPSCnew.jpg";
import cardImage4 from "./NEETnew.jpg";

import topperImg1 from "./p2.jpg";
import topperImg2 from "./p2.jpg";
import topperImg3 from "./p2.jpg";
import topperImg4 from "./p2.jpg";
import Faqlist from "../Services/Faqlist";
import SolvingItChanllengesBlock from "./SolvingItChanllengesBlock";



import product1 from './product1.png';
import product3 from './product3.png';
import product4 from './product4.png';
import product5 from './product5.png';
import product6 from './product6.png';
import product7 from './product7.png';
import product8 from './product8.png';
import product9 from './product9.png';

import Newblock from './Newblock';






const cardsDataProduct = [
  {
    title: "Learning Management System",
    description: "",
    viewDetails: "View Details",
    color: "white",
    image: product1,
    link:"https://diracai.com/successstory/1"
  },
  {
    title: "Digital Books",
    description: "",
    viewDetails: "View Details",
    color: "white",
    image: product5,
    link: "https://diracai.com/successstory/5"
  },
  {
    title: "Institute Management System",
    description: "",
    viewDetails: "View Details",
    color: "white",
    image: product3,
    link:"https://diracai.com/successstory/2"
  },
  {
    title: "Exam management system",
    description: "",
    viewDetails: "View Details",
    color: "white",
    image: product4,
    link: "https://diracai.com/successstory/3"
  },
];
const steps = [
  {
    title: "Step 1 :",
    image: Exam,
    description:
      "Watch topper’s introduction profile and read reviews from other students",
  },
  {
    title: "Step 2 :",
    image: Exam2,
    description:
      "Schedule your 1:1 online session with your favourite topper at a time and date that suit you",
  },
  {
    title: "Step 3 :",
    image: Exam3,
    description:
      "Connect with your topper via a 1:1 online video session, and let the mentoring begin!",
  },
];






const cardDataTestimonial = [
  {
    title: "Arindam Choudhury",
    description:
      "As an RERA activist, I feel a deep sense of fulfillment in helping homebuyers navigate the complexities of the real estate market.    ",
    viewDetails:
      "Former Secretary (Trident Galaxy Residential Welfare Association)",
    color: "white",
    image: cardImage2,
  },
  {
    title: "Arindam Choudhury",
    description:
      "As an RERA activist, I feel a deep sense of fulfillment in helping homebuyers navigate the complexities of the real estate market.    ",
    viewDetails:
      "Former Secretary (Trident Galaxy Residential Welfare Association)",
    color: "white",
    image: cardImage2,
  },
  {
    title: "Arindam Choudhury",
    description:
      "As an RERA activist, I feel a deep sense of fulfillment in helping homebuyers navigate the complexities of the real estate market.    ",
    viewDetails:
      "Former Secretary (Trident Galaxy Residential Welfare Association)",
    color: "white",
    image: cardImage2,
  },
  {
    title: "Arindam Choudhury",
    description:
      "As an RERA activist, I feel a deep sense of fulfillment in helping homebuyers navigate the complexities of the real estate market.    ",
    viewDetails:
      "Former Secretary (Trident Galaxy Residential Welfare Association)",
    color: "white",
    image: cardImage2,
  },
];




const Home = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 5000); // Adjust the interval duration as needed (e.g., every 5 seconds)

    return () => clearInterval(intervalId);
  }, [steps.length]);

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    props.passMountInfo(true);

    return () => {
      isMounted.current = false;
      props.passMountInfo(false);
    };
  }, [props]);

  const history = useHistory();

  const getStartedHandler = () => {
    history.push("/contactus");
  };

  return (
    <div className={classes.homeParent}>

     <div className={innerDiv.innerDiv}>	  
      <Newblock />

      </div>	  
      <Services />

      <SAPServices  />

      <div className={innerDiv.innerDiv}>
        <div className={classes.mainExamTitle}>
          Our Products
        </div>
        <BoxSlide cardsData={cardsDataProduct} />

        {/* <BoxSlide cardsData={cardDataTestimonial} /> */}


        {/* <div className={classes.mainExamTitle}>
          Connect With Toppers Who Knows The Journey
        </div>
        <BoxSlide cardsData={cardsDataToppers}/> */}

        {/* <div className={classes.HowitWorksContainer}>
          <div className={classes.HowitworksTitle}>How It Works ?</div>

          <div className={classes.helloTopContainer}>
            <div className={classes.paarent}>
              <div className={classes.title}>Step 1 :</div>

              <div className={classes.logo}>
                <img src={BookIcon1} className={classes.imagesExam} />
              </div>
              <div className={classes.title}>Choose Your Topper</div>
              <div className={classes.description}>
                View the profile of all the toppers and select one that aligns
                with your needs.
              </div>
            </div>

            <div className={classes.paarent}>
              <div className={classes.title}>Step 2 :</div>

              <div className={classes.logo}>
                <img src={BookingIcon} className={classes.imagesExam} />
              </div>
              <div className={classes.title}>Book a Session:</div>
              <div className={classes.description}>
                Choose a time slot that suits you and book a session with the
                topper of your choice.
              </div>
            </div>

            <div className={classes.paarent}>
              <div className={classes.title}>Step 3 :</div>

              <div className={classes.logo}>
                <img src={get1to1guidance} className={classes.imagesExam} />
              </div>
              <div className={classes.title}>Get 1 to 1 Guidance:</div>
              <div className={classes.description}>
                Connect with topper via 1 to 1 online Video session and ask all
                your queries to succeed in your exam preparation.
              </div>
            </div>
          </div>
        </div> */}
 
	</div> 

       <div className={classes.SolvingItChanllengesBlockTitle}>
          Solving IT challenges in every industry, every day.
       </div>


	<div className={innerDiv.innerDiv}>  

        <SolvingItChanllengesBlock/>

        <TeamBlock />

        <Testimonial />



        <BlogAndNewsBlock/>

	  {/*  
        <Faqlist />
         */}

      </div>

      <div className={classes.bottombox}>
        <div className={classes.bTitle}>
	  Every month, several forward-thinking clients choose to be a part of our innovative software community.
        </div>
        <div className={classes.bdetails}>
          "Start your journey towards success by becoming a valued member of our growing clientele!"
        </div>
        <button
          className={classes.bbutton}
          type="button"
          onClick={getStartedHandler}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};




export default Home;
