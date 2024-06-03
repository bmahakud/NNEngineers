// import { useState } from "react";
import React, { useState, useEffect } from "react";

import classes from "./Website.module.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./Header";
import HeaderAddressBar from "./HeaderAddressBar";

import Footer from "./Footer";
import Home from "./Home/Home";
//import About from "./FindToppers/About";
import About from "./About/About";

import ProjectIntern from "./Jobs/About"

import TopperProfile from "./FindToppers/TopperProfile/App";
import News from "./News/News";

import Blog1 from "./News/Blog1.json";
import Blog2 from "./News/Blog2.json";
import Blog3 from "./News/Blog3.json";
import Blog4 from "./News/Blog4.json";
import Blog5 from "./News/Blog5.json";
import Blog6 from "./News/Blog6.json";
import Blog7 from "./News/Blog7.json";

import AAServices1 from "./Home/AAServices1.json";
import AAServices2 from "./Home/AAServices2.json";
import AAServices3 from "./Home/AAServices3.json";
import AAServices4 from "./Home/AAServices4.json";
import AAServices5 from "./Home/AAServices5.json";
import AAServices6 from "./Home/AAServices6.json";

import w1 from "./Home/s1.png";
import w2 from "./Home/s2.png";
import w3 from "./Home/s3.png";
import w4 from "./Home/s4.png";
import w5 from "./Home/s5.png";
import w6 from "./Home/s6.png";

import Image1 from "./News/Learning_management_sys.png";
import Image2 from "./News/Institute_management_sys.png";
import Image3 from "./News/Exam_management_sys.png";
import Image4 from "./News/Student_assesment_sys.png";
import Image5 from "./News/Digital_book.png";
import Image6 from "./News/Ticketing_apps.png";
import Image7 from "./News/Online_meeting_apps.png";

import ContactUs from "./Contactus/ContactUs";

import HomeBuyer from "./ClientPage1/HomeBuyer";
import Notices from "./ClientPage1/Notices";
import Services from "./Services/JoinAsTopper";
import Blogs from "./Home/BlogAndNewsBlock";

import Projects from "./ClientPage1/Projects/Projects";
import Booking from "./ClientPage1/Booking";
import SaleDeed from "./ClientPage1/SaleDeed";
import Possession from "./ClientPage1/Posession";
import Association from "./ClientPage1/Association";
import Maintenance from "./ClientPage1/Maintenance";

import IntroductionBlock from "./Home/IntroductionBlock";

import TermsofUse from "./TermsofUse";
import CookiesPolicy from "./CookiesPolicy";
import Disclaimer from "./Disclaimer";
import Privacypolicy from "./Privacypolicy";
import SuccessStoryDetails from "./News/SuccessStoryDetails";

import ServicesDetails from "./Home/ServicesDetails";

//import AboutUs from "./AboutUs";
import HelpCenter from "./HelpCenter";
import ReraAct from "./ClientPage1/ReraAct";



import EATechData from "./EATechData";







const Website = () => {
  const images = [
    //"https://cdn.pixabay.com/photo/2020/03/31/11/06/crowd-4987226_1280.jpg",
    //"https://media.istockphoto.com/id/625736338/photo/stack-of-hands-showing-unity.jpg?s=2048x2048&w=is&k=20&c=m0q5TaMHzRZEzojxhGIFsFMCwWdHdkFwqtAAi1Bf67Q=",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const registerHandler = () => {
    window.open("createaccount", "_blank");
  };

  const loginHandler = () => {
    window.open("app/dashboard/general/exams", "_blank");
  };

  const history = useHistory();

  //const [showHome, setShowHome] = useState(true);
  //const [showAbout, setShowAbout] = useState(false);
  //const [showNews, setShowNews] = useState(false);
  // const [showHomeBuyer, setShowHomeBuyer] = useState(false);
  // const [showContactUs, setShowContactUs] = useState(false);

  const [homeMounted, setHomeMounted] = useState(false);
  const [aboutMounted, setAboutMounted] = useState(false);
  const [newsMounted, setNewsMounted] = useState(false);
  const [homeBuyerMounted, setHomeBuyerMounted] = useState(false);
  const [actsMounted, setActsMounted] = useState(false);
  const [contactUsMounted, setContactUsMounted] = useState(false);

  const [noticesMounted, setNoticesMounted] = useState(false);
  const [rulesAndRegulationsMounted, setRulesAndRegulationsMounted] =
    useState(false);
  const [blogsMounted, setBlogsMounted] = useState(false);
  const [projectsMounted, setProjectsMounted] = useState(false);
  const [bookingMounted, setBookingMounted] = useState(false);
  const [saleDeedMounted, setSaleDeedMounted] = useState(false);
  const [possessionMounted, setPossessionMounted] = useState(false);
  const [associationMounted, setAssociationMounted] = useState(false);
  const [maintenanceMounted, setMaintenanceMounted] = useState(false);
  const [reraactMounted, setReraActMounted] = useState(false);

  //Footer Pages
  const [termsofuseMounted, setTermsofUseMounted] = useState(false);
  const [privacyPolicyMounted, setPrivacypolicyMounted] = useState(false);
  const [cookiesPolicyMounted, setCookiesPolicyMounted] = useState(false);
  const [disclaimerMounted, setDisclaimerMounted] = useState(false);
  const [SuccessStoryDetailsMounted, setSuccessStoryDetailsMounted] =
    useState(false);

  const [ServicesDetailsMounted, setServicesDetailsMounted] = useState(false);

  const [AboutusMounted, setAboutusMounted] = useState(false);
  const [HelpCenterMounted, setHelpCenterMounted] = useState(false);


  const [jobsMounted, setJobsMounted] = useState(false);


  const homeBuyerNoticeMountHandler = () => {
    setHomeBuyerMounted(true);
    setNoticesMounted(true);
  };

  const homeHandler = () => {
    history.push("/");
  };

  const aboutHandler = () => {
    history.push("/about");
  };

  const newsHandler = () => {
    history.push("/products");
  };

  const homeBuyerHandler = () => {};

  const actsHandler = () => {
    console.log("click acts");
    history.push("/acts");
  };

  const contactUsHandler = () => {
    history.push("/contactus");
  };

  const noticesHandler = () => {
    history.push("/homebuyer/notices");
  };

  const isAnyVariableTrue = (...variables) => {
    return variables.some((variable) => !!variable);
  };

  const [topperId, setTopperId] = useState(null);
  const [profilePath, setProfilePath] = useState(null);
  const goToClassHandler = ({ topperId }) => {
    setTopperId(topperId);
    setProfilePath(`/topperprofile/${topperId}`);
    history.push(`/topperprofile/${topperId}`);
  };

  useEffect(() => {
    const url = window.location.href;
    // Define a regular expression pattern to match the URL pattern
    const pattern = /\/topperprofile\/(\d+)\//;

    // Use the exec method to find the match in the URL
    const match = pattern.exec(url);

    // Check if a match is found
    if (match) {
      // Extract the integer value from the match
      const topper_id = parseInt(match[1], 10);
      console.log("Integer value:", topper_id);
      setTopperId(topper_id);
      setProfilePath(match[0]);
      console.log("match: ", match);
    } else {
      console.log("No match found.");
    }
  }, []);

  const [showDropDownHeader, setShowDropDownHeader] = useState(false);

  const showDropDownHeaderHandler = () => {
    setShowDropDownHeader(true);
  };

  const closeDropDownHeaderHandler = () => {
    setShowDropDownHeader(false);
  };

  //console.log("match:  ", match);

  return (
    <div className={classes.website}>
      <HeaderAddressBar
        showDropDownHeaderHandler={showDropDownHeaderHandler}
        showDropDownHeader={showDropDownHeader}
        closeDropDownHeaderHandler={closeDropDownHeaderHandler}
      />

      {homeMounted && (
        <div className={classes.backgroundImage}>
          <div className="carousel">
            <div className="carousel-content">
              <Header
                homeHandler={homeHandler}
                homeMounted={homeMounted}
                aboutHandler={aboutHandler}
                newsHandler={newsHandler}
                newsMounted={newsMounted}
                aboutMounted={AboutusMounted}
                AboutusMounted={AboutusMounted}
                showDropDownHeader={showDropDownHeader}
                homeBuyerHandler={homeBuyerHandler}
                homeBuyerMounted={isAnyVariableTrue(
                  noticesMounted,
                  rulesAndRegulationsMounted,
                  reraactMounted,
                  blogsMounted,
                  projectsMounted,
                  bookingMounted,
                  saleDeedMounted,
                  possessionMounted,
                  associationMounted,
                  maintenanceMounted
                )}
                noticesMounted={noticesMounted}
                contactUsHandler={contactUsHandler}
                contactUsMounted={contactUsMounted}
              />

              <div className={classes.mainContainer}>
                <IntroductionBlock />
              </div>
            </div>
          </div>
        </div>
      )}

      {!homeMounted && (
        <Header
          homeHandler={homeHandler}
          homeMounted={homeMounted}
          aboutHandler={aboutHandler}
          aboutMounted={aboutMounted}
          newsHandler={newsHandler}
          newsMounted={newsMounted}
          aboutMounted={aboutMounted}
          showDropDownHeader={showDropDownHeader}
          homeBuyerHandler={homeBuyerHandler}
          homeBuyerMounted={isAnyVariableTrue(
            noticesMounted,
            rulesAndRegulationsMounted,
            reraactMounted,
            blogsMounted,
            projectsMounted,
            bookingMounted,
            saleDeedMounted,
            possessionMounted,
            associationMounted,
            maintenanceMounted
          )}
          noticesMounted={noticesMounted}
          actsMounted={actsMounted}
          actsHandler={() => actsHandler}
          contactUsHandler={contactUsHandler}
          contactUsMounted={contactUsMounted}
          disclaimerMounted={disclaimerMounted}
          privacyPolicyMounted={privacyPolicyMounted}
          cookiesPolicyMounted={cookiesPolicyMounted}
          termsofuseMounted={termsofuseMounted}
          SuccessStoryDetailsMounted={SuccessStoryDetailsMounted}
          ServicesDetails={ServicesDetailsMounted}
          AboutusMounted={AboutusMounted}
          HelpCenterMounted={HelpCenterMounted}
        />
      )}

      <Route exact path="/">
        <Home passMountInfo={setHomeMounted} />
      </Route>

      {topperId !== null && (
        <Route exact path={profilePath}>
          <TopperProfile topperId={topperId} />
        </Route>
      )}

      {/*resultStr  &&
      <Route exact path={profilePath}>
            <About passMountInfo={setAboutMounted} />
      </Route>
      */}

      {/* 
         <Route exact path='/resident/notices' >
              <Notices passMountInfo = {setNoticesMounted}/>
         </Route>


         <Route exact path='/resident/memberregistration' >
             <RulesAndRegulations passMountInfo={setRulesAndRegulationsMounted}/>
         </Route>


         <Route exact path='/resident/blogs' >
            <Blogs passMountInfo={setBlogsMounted}/>
         </Route>
       */}

      <Route exact path="/services">
        <Services passMountInfo={setActsMounted} />
      </Route>

      <Route exact path="/products">
        <News passMountInfo={setNewsMounted} />
      </Route>

      <Route exact path="/about">
        <About passMountInfo={setAboutMounted} />
      </Route>

      <Route exact path="/jobs1">
           <ProjectIntern passMountInfo={setJobsMounted} />
      </Route>





      <div className={classes.innerDiv}>
        <Switch>
          <Route exact path="/contactus">
            <ContactUs passMountInfo={setContactUsMounted} />
          </Route>

          <Route exact path="/Disclaimer">
            <Disclaimer passMountInfo={setDisclaimerMounted} />
          </Route>

          <Route exact path="/Privacypolicy">
            <Privacypolicy passMountInfo={setPrivacypolicyMounted} />
          </Route>

          <Route exact path="/TermsofUse">
            <TermsofUse passMountInfo={setTermsofUseMounted} />
          </Route>

          <Route exact path="/CookiesPolicy">
            <CookiesPolicy passMountInfo={setCookiesPolicyMounted} />
          </Route>

          <Route exact path="/CookiesPolicy">
            <CookiesPolicy passMountInfo={setCookiesPolicyMounted} />
          </Route>

          <Route exact path="/successstory/1">
            <SuccessStoryDetails
              passMountInfo={setSuccessStoryDetailsMounted}
              Blog={Blog1}
              Image={Image1}
            />
          </Route>

          <Route exact path="/successstory/2">
            <SuccessStoryDetails
              passMountInfo={setSuccessStoryDetailsMounted}
              Blog={Blog2}
              Image={Image2}
            />
          </Route>

          <Route exact path="/successstory/3">
            <SuccessStoryDetails
              passMountInfo={setSuccessStoryDetailsMounted}
              Blog={Blog3}
              Image={Image3}
            />
          </Route>

          <Route exact path="/successstory/4">
            <SuccessStoryDetails
              passMountInfo={setSuccessStoryDetailsMounted}
              Blog={Blog4}
              Image={Image4}
            />
          </Route>

          <Route exact path="/successstory/5">
            <SuccessStoryDetails
              passMountInfo={setSuccessStoryDetailsMounted}
              Blog={Blog5}
              Image={Image5}
            />
          </Route>

          <Route exact path="/successstory/6">
            <SuccessStoryDetails
              passMountInfo={setSuccessStoryDetailsMounted}
              Blog={Blog6}
              Image={Image6}
            />
          </Route>

          <Route exact path="/successstory/7">
            <SuccessStoryDetails
              passMountInfo={setSuccessStoryDetailsMounted}
              Blog={Blog7}
              Image={Image7}
            />
          </Route>

          <Route exact path="/servicesDetails/1">
            <ServicesDetails
              passMountInfo={setSuccessStoryDetailsMounted}
              Service={AAServices1}
              Image={w1}
            />
          </Route>

          <Route exact path="/servicesDetails/2">
            <ServicesDetails
              passMountInfo={setSuccessStoryDetailsMounted}
              Service={AAServices2}
              Image={w2}
            />
          </Route>

          <Route exact path="/servicesDetails/3">
            <ServicesDetails
              passMountInfo={setSuccessStoryDetailsMounted}
              Service={AAServices3}
              Image={w3}
            />
          </Route>

          <Route exact path="/servicesDetails/4">
            <ServicesDetails
              passMountInfo={setSuccessStoryDetailsMounted}
              Service={AAServices4}
              Image={w4}
            />
          </Route>

          <Route exact path="/servicesDetails/5">
            <ServicesDetails
              passMountInfo={setSuccessStoryDetailsMounted}
              Service={AAServices5}
              Image={w5}
            />
          </Route>

          <Route exact path="/servicesDetails/6">
            <ServicesDetails
              passMountInfo={setSuccessStoryDetailsMounted}
              Service={AAServices6}
              Image={w6}
            />
          </Route>

          <Route exact path="/HelpCenter">
            <HelpCenter passMountInfo={setHelpCenterMounted} />
          </Route>





        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default Website;
