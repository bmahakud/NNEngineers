import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./IntroductionBlock.module.css";
import bookAppointment from "./Topper1.jpg";
import page1 from "./index_img.jpg";
//import deal from "./House2.png";
//import map from "./mp.svg";

import duplicateMain from './HomeImage1.png';
import originalMain from './originalMain.jpg';

import Iphone1 from "./firstblockImg1.png";
import Iphone2 from "./firstblockImg2.png";

//import { OptionField } from "../../CommonApps/FormInputObjects";
import { FaAngleLeft } from "react-icons/fa"; // Import the left arrow icon from react-icons
import { BsChevronDown } from "react-icons/bs";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import OptionField from "./OptionField";

const IntroductionBlock = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [width, setWidth] = useState(0);
  const searchboxRef = useRef(null);

  const [searchedUsers, getSearchedUsers] = useState(null);
  const [searchString, setSearchString] = useState("UPSC");
  const [pageNo, setPageNo] = useState(1);

  const handleChange = (e) => {
    e.preventDefault();
    console.log("e.target.value: ", e.target.value);
    setSearchString((searchString) => e.target.value);
  };

  const [classRank, setClassRank] = useState([
    { id: "IIT JEE", name: "Online IIT JEE Mentoring" },
    { id: "UPSC", name: "Online UPSC Mentoring" },
    { id: "CAT", name: "Online CAT Mentoring" },
    { id: "NEET", name: "Online NEET Mentoring" },
    { id: "GATE", name: "Online GATE Mentoring" },
  ]);

  useEffect(() => {
    // Calculate and set the width of the searchboxmaterial
    if (searchboxRef.current) {
      setWidth(searchboxRef.current.offsetWidth);
    }
  }, [searchboxRef]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();
  const contactPageHandler = () => {
    history.push("/contactus");
  };

  const hitSearchButtonHandler = () => {
    history.push("/findtoppers");
  };


  const [showMobNum, setShowMobileNum] = useState(false);

  const scheduleConsultationHandler=()=>{

   setShowMobileNum(showMobNum => !showMobNum);

  }










  return (
    <div className={classes.MainIntroductionBlockParent}>

      <div className={classes.IntroductionBlockParent}>
        <div className={classes.leftBox}>
          <div className={classes.mainCard}>
            <div className={classes.mainheadings}>
              We Handle the Tech, You Lead the Business.  
            </div>

            <div className={classes.subHead}> Seamless Software Development and Data Analysis Solutions. </div>
	    {/* <div className={classes.searchboxmaterial}>
	      
              <OptionField
                handleChange={handleChange}
                label=""
                name="classname"
                options={classRank}
                requirement=""
                width="100%"
                defaultValue="Select Exam"
              />
	      
            </div> */}
           { !showMobNum &&
            <button
              className={classes.btnTitle}
              type="button"
              onClick={scheduleConsultationHandler}
            >
              Schedule a Free Consultation
            </button>
           }


	    { showMobNum &&
            <button
              className={classes.btnTitle}
              type="button"
              onClick={scheduleConsultationHandler}
            >
              Call +91 7008639757
            </button>
           }



          </div>
        </div>

        <div className={classes.rightBox}>
	   	   
          <img src={originalMain} className={classes.imgOneBig} />	  
	  {/* 	   
	  <img src={duplicateMain} className={classes.imgOneBig} />
           */}
	  {/*
	  <img src={Iphone1} className={classes.img1} />
          <img src={Iphone2} className={classes.img2} />
	  */}

        </div>


      </div>
    </div>
  );
};

export default IntroductionBlock;
