import React, { useState, useEffect } from "react";
import classes from "./ClassViewShort_v2.module.css";
import { BsFillCheckSquareFill,BsPerson  } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import {
  BsFillTrashFill,
  BsPeopleFill,
  BsFillCameraVideoFill,
  BsLink45Deg,
  BsThreeDotsVertical,
  BsClockFill,
  BsCheck,
  BsCheck2
} from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { GiHazardSign } from "react-icons/gi";
//import {FiExternalLink} from 'react-icons/fi';
//import {getuserbyId, deletedashboardcourses} from '../../../../../CommonApps/AllAPICalls';

import { MdDoubleArrow } from "react-icons/md";

import { GiCheckMark } from "react-icons/gi";


import ClassCardDropDown from './ClassCardDropDown';
import { RiMoneyDollarCircleLine } from "react-icons/ri";



const formatLocalTime = ({datetime}) => {

    //const [userTimeZone, setUserTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);        


    let userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const utcDate = new Date(datetime);
    const localDate = new Date(utcDate.toLocaleString('en-US', { timeZone: userTimeZone }));
    const formattedDate = localDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const formattedTime = localDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return `${formattedTime}, ${formattedDate}`;
  };








const ClassViewShort = (props) => {
  let history = useHistory();
  const [style, setStyle] = useState({
    primary: "lightgrey",
    secondary: "lightgrey",
    topBarBottomColor: "lightgrey",
    boxBkgColor: "white",
    rightButtonColor: "var(--themeColor)",
    codeColor: "grey",
    subjectColor: "grey",
    boxShadow: "grey 0px 3px 8px",
    fieldColor: "grey",
    fieldValueColor: "grey",
    borderColor: "lightgrey",
  });

  const courseSwitchHandler = () => {
    localStorage.setItem("selectedClassId", props.Class.id);
    props.rerender();
    history.push("/class/detail");
  };

  const [selectedClass, setSelectedClass] = useState(
    localStorage.getItem("selectedClassId")
  );

  //const [statusBkgColor, setStatusBkgColor] = useState('#25D366');

  const [showSelectScreen, setShowSelectScreen] = useState(false);

  const moveToSubject = () => {
    //   if(Number(props.Course.id) === Number(selectedCourse)){
    //   history.push('/class/detail');
    //  }
    //  if(Number(props.Course.id) !== Number(selectedCourse) ){
    //     setShowSelectScreen(true);
    // }
  };

  const closeSelectScreen = () => {
    setShowSelectScreen((showSelectScreen) => false);
  };

  //const ApproveHandler = (userId)=>{
  //let enrollId = userId;
  //let courseId = props.Course.id;
  //enrolledstudents.push(enrollId);
  //putcourseenroll({courseId, enrolledstudents});
  //showEnrollStatus(false);
  //}

  const courseSwitchAndMoveHandler = () => {
    //localStorage.setItem('preferredCourseId', props.Course.id);
    //setShowSelectScreen(showSelectScreen=>false);
    //localStorage.setItem('preferredCourseId', props.Course.id);
    // moveToSubject();
    props.rerender();
    history.push("/class/detail");
  };

  //selectedCourse !== null && Number(selectedCourse) === props.Course.id &&

  /*    
    useEffect(()=>{
       let deepColor='#00AFF0';
       let lessDeep='#9de2fc';
       let lightColor='white';


      if(selectedClass !== null && Number(selectedClass) === props.Class.id){
            setStyle(style=>({
		    primary: deepColor, 
		    secondary: lightColor,
		    topBarBottomColor:lessDeep,
		    boxBkgColor: lightColor,
		    rightButtonColor: deepColor,
		    codeColor: deepColor,
		    subjectColor: deepColor,
		    boxShadow: `grey 0px 3px 8px`,
		    fieldColor: deepColor,
		    fieldValueColor:deepColor,
		    borderColor:lessDeep

	    }));
      };


    return()=>{
       

    }


    },[props.Class.id, selectedClass]);
    */

  const deleteCourseHandler = () => {};

  const enrollInfoButtonHandler = () => {};

  //const [enrollRequests,setEnrollRequests] = useState(false);
  //const [enrollStatus, setEnrollStatus] = useState(false);

  let NumToMonth = [
    "N/A",
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const classcardHandler = () => {
    console.log("class card click");
  };

  const joinClassHandler = () => {
    console.log("join class handler");
  };

  const viewClassDetailHandler = () => {
     let classId = props.oneClass.id;
     props.classDetailHandler({classId});
  };




  const openMeetingRoomHandler = () => {
    let meetingLink = props.oneClass.meetingLink;
    window.open(meetingLink, "_blank");
  };

    const [showDropDownButtons, setShowDropDownButtons] = useState(false);

  const DropDownButtonsHandler=()=>{

     setShowDropDownButtons(showDropDownButtons=>true);

  }


  const closeDropDownHandler=()=>{


   setShowDropDownButtons(showDropDownButtons=>false);

  }



  let datetime = props.oneClass.datetime;


  return (
    <div className={classes.courseViewDashboard} >
      <div className={classes.titleDiv}>
        <div className={classes.leftInfo}>
          <div className={classes.classInfo}>

            <div className={classes.classDataAll}>
	        {/*
                  <BsClockFill className={classes.clockIcon} />
	        */}
              <div className={classes.timeAll}> 
	          <span className={classes.dateText}> {formatLocalTime({datetime})}</span>
	          <span className={classes.minduration}> {props.oneClass.duration+" mins"}</span>
	      </div>
            </div>


                  {/*
	          <div className={classes.classId}> {props.Class.id} </div>
		  */}
          </div>
          <div className={classes.topicsTitle}>
            <div className={classes.classNum}>#{props.oneClass.id}</div>
            <div className={classes.todayTopic}>
              {" "}
            </div>

            <div
              className={classes.todayTopicDetail}
              style={{ color: "grey", fontStyle: "normal" }}
            >
             


            </div>
          </div>
        </div>
        <div className={classes.toprightBoxes}>

             { props.oneClass.status ==="scheduled" &&
                <div className={classes.classStatus} style={{color:"var(--themeColor)"}}>{props.oneClass.status}</div>
             }

             { props.oneClass.status ==="postponed" &&
                <div className={classes.classStatus} style={{color:"orange"}}>{props.oneClass.status}</div>
             }

             { props.oneClass.status ==="cancelled" &&
                <div className={classes.classStatus} style={{color:"red"}}>{props.oneClass.status}</div>
             }

             { props.oneClass.status ==="completed" &&
               <div className={classes.classStatus} style={{color:"green"}}>{props.oneClass.status} <BsCheck2/></div>
             }


           <div className={classes.rightDotsDiv}>


          <button type="button" className={classes.dotsButton} onClick={DropDownButtonsHandler}>
            {" "}
            <BsThreeDotsVertical />{" "}
          </button>

          { showDropDownButtons &&  props.userData.id !==null && props.userData.usertype === 2 &&
          <ClassCardDropDown userData={props.userData}
                             setDropDown={closeDropDownHandler}
                             oneClass={props.oneClass}
                             rerender={props.rerender}
                             />

          }

        </div>

        </div>
      </div>

      <div className={classes.lowerDiv}>
        <div className={classes.leftLowerDiv}>
          <div className={classes.authorDiv}> 
	    <span>No. of Students: </span>
            <div className={classes.studentNo}> 1 </div>
            <div className={classes.paymentStatus}> Payment: 
	     <span style={{color:"#50C878"}}> <GiCheckMark/> </span>
	    </div>

	  </div>
	  {/*
          <div className={classes.addressDiv}>
            <span> $ : </span>
            <span className={classes.classTime}>
              {" "}{props.oneClass.address !=="" && <> 
                          
			      {props.oneClass.address}
                               </>
	      }

              { (props.oneClass.address ===null || props.oneClass.address ==="" ) && <>

                              {"N/A"}
                               </>
              }

            </span>
          </div>
	  */}
        </div>

        <div className={classes.rightLowerDiv}>
          <button
            type="button"
            className={classes.joinClassButton}
            onClick={openMeetingRoomHandler}
          >
            {" "}
            <BsFillCameraVideoFill />
            <div className={classes.joinText}>Join Meeting</div>{" "}
          </button>
          
	  {/*
          <button
            type="button"
            className={classes.viewClassButton}
            onClick={viewClassDetailHandler}
	    disabled={true}
          >
            <span>View Detail</span>
            <MdDoubleArrow className={classes.viewdetailIcon} />
          </button>
	  */}
        </div>
      </div>

      {/*
        <div className={classes.middleDiv}> 
	  <div className={classes.authorDiv}> by: Dr. Bibhuprasad Kuumaram Mahakud</div>
	  <div className={classes.redirButtons}>
	       
              <button type="button" className={classes.joinClassButton}>Join Class </button>
              <button type="button" className={classes.viewClassButton}> 
	            <span>View Detail</span> 
	            <MdDoubleArrow className={classes.viewdetailIcon}/> 
	      </button>
	      
	  </div>
	</div>
        
        <div className={classes.addressDiv}>Address: Room 23, H Section </div>
        */}
    </div>
  );
};

export default ClassViewShort;
