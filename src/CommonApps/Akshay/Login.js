import { useState, useEffect, CSSProperties, useRef } from "react";
import classes from "./Login.module.css";
import flag from "./flag.jpeg";
import cover from "./a_login_page.jpg";
import { BsGoogle, BsFacebook, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { checkifuserexist, sendotpemail, sendotpphoneno } from "../AllAPICalls";
import FadeLoader from "react-spinners/BarLoader";
import basewebURL from "../../basewebURL";
import { useHistory } from "react-router-dom";
import { changepassword } from "../AllAPICalls";
import OTPscreen from "./OTP";
import { FaHome } from "react-icons/fa";
import topperlogo from './topperlogo.png';
import img1 from "./registerimg.jpg";
import img2 from "./a_login_page.jpg";




const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  return [htmlElRef, setFocus];
};

function areAllDigits(str) {
  return /^\d+$/.test(str);
}

const InputFieldType = (formData) => {
  if (
    formData.inputfield.includes("+") &&
    areAllDigits(formData.inputfield.replace("+", ""))
  ) {
    return "phoneno";
  }

  if (formData.inputfield.includes("@")) {
    return "email";
  }
  return "none";
};

const TnSHandler = () => {
  window.open("https://hellotoppers.com/TermsofUse", "_blank");
};

const privacyHandler = () => {
  window.open("https://hellotoppers.com/Privacypolicy", "_blank");
};

const contanctUs = () => {
  window.open("https://hellotoppers.com/contactus");
};

const App = (props) => {
  let color = "var(--themeColor)";

   const inActiveColor = {color: "grey",
    backgroundColor:"lightgrey",
    borderStyle:"none",
    borderWidth:"1px"}

    const activeColor = {color: "white",
    backgroundColor:"var(--themeColor)",
    borderStyle:"none",
    borderWidth:"1px"}








  const initialFormData = {
    inputfield: props.loadedUsername,
    inputfieldtype: "",
    username: null,
    email: null,
    phoneno: "",
    usernamelength: 8,
  };

  const [formData, updateFormData] = useState(initialFormData);

  const [loginState, setLoginState] = useState("OTPnotrequested"); //OTPnotrequested
  const [inputRef1, setInputFocus1] = useFocus();
  const [inputRef2, setInputFocus2] = useFocus();
  const [inputRef3, setInputFocus3] = useFocus();
  const [inputRef4, setInputFocus4] = useFocus();
  const [inputRef5, setInputFocus5] = useFocus();

  const [userExists, setUserExists] = useState(false);

  const history = useHistory();

  useEffect(() => {
    let userinput = "+91"+formData.phoneno;
    checkifuserexist({ setUserExists, userinput });
  }, [formData.phoneno]);


   console.log("userExists Login: ", userExists);

  const handleChangeInputHandler = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmitGetOTP = (e) => {
    e.preventDefault();

    if(!userExists){

    alert("Your mobile number is not registered yet. Kindly Register now ");
      return null;
    }


   //  if (props.loadedUsername === null && !userExists) {
   //   alert("User does not exists");
   //   return null;
   // }

    //console.log("phoneno: ", InputFieldType(formData));

       console.log("formData OTP after register: ",formData);
       setLoginState((loginState) => "OTPsending");
       sendotpphoneno({ formData, setLoginState });
    
  };

  const createAccountPageHandler = () => {
    history.push("/registerasstudent");
  };

   let homeButtonHandler=()=>{

    history.push("/");

  }





  let input = formData.inputfield;
  console.log("formData: ", formData);

  console.log("loadedUsername: ", props.loadedUsername);

  return (
    <div className={classes.mainDiv}>

      <div className={classes.homebuttonDiv}>
          <button type="button" onClick={homeButtonHandler} className={classes.homeRedirectButton}>
               <FaHome size={25}/>
          </button>
      </div>



      {(loginState === "OTPnotrequested" || loginState === "OTPsending") && (
        <>
          <div className={classes.subMainDiv}>
            <div className={classes.image}>
              <img className={classes.coverImg} src={img2} alt="logo"></img>
            </div>

            <div className={classes.parentdiv}>
              <div className={classes.topBar}>
               <div className={classes.logoDiv}> <img src={topperlogo} className={classes.logoImage}/>
              </div>
              <div className={classes.loginTitle}> Welcome to HelloToppers </div>
            </div>



              <div className={classes.midContent}>
                <div className={classes.loginTitleText}>Type Your Mobile Number to Login</div>

                 <div className={classes.mainContainer}>
                 <div className={classes.flagcode}>
                     <img className={classes.flagImg} src={flag} alt="logo"/>
                     <div className={classes.countryCode}> +91 </div>
                 </div>
                 <input
                     className={classes.editmobileNuBox}
                     type="number"
                     placeholder=" Mobile Number.."
                     onChange={handleChangeInputHandler}
                     name="phoneno"
                     />
                 </div>




               
                  <div className={classes.fieldtype}>

                    {userExists && (
                      <span
                        className={classes.userExistSymbol}
                        style={{ fontSize: "13px" }}
                      >
                        {" "}
                        Mobile number registered{" "}
                      </span>
                    )}

                    {!userExists && formData.phoneno !=="" &&(
                      <span
                        className={classes.userExistSymbol2}
                        style={{ fontSize: "13px" }}
                      >
                        {" "}
                        Mobile number not registered{" "}
                      </span>
                    )}
                  </div>
               

                {loginState === "OTPnotrequested" && (
                  <button
                    className={classes.createBtn}
                    type="button"
                    onClick={handleSubmitGetOTP}
		    style={formData.phoneno.length === 10 ? activeColor : inActiveColor }
                    disabled = {formData.phoneno.length === 10 ? false : true }
                  >
                    Send OTP
                  </button>
                )}

                {loginState === "OTPsending" && (
                  <button
                    className={classes.createBtn}
                    type="button"
                    disabled={true}
                  >
                    Sending... OTP
                  </button>
                )}

                {loginState === "OTPsending" && (
                  <>
                    <FadeLoader
                      color={color}
                      loading={true}
                      css={override}
                      size={50}
                    />
                  </>
                )}



       

             {/*
                <div className={classes.horizontalContainer}>
                  <div className={classes.leftLine}></div>
                  <div className={classes.orText}>Topper</div>
                  <div className={classes.rightLine}></div>
                </div>
             */}

              <div className={classes.bottomTopBar} style={{marginTop:"10px"}}>
                  <div className={classes.texttitle}>Don't Have Account ?</div>
                  <button
                    className={classes.create}
                    onClick={createAccountPageHandler}
                    type="button"
                  >
                    Register Now
                  </button>
                </div>




              </div>

              <div className={classes.bottomBar}>


                <div className={classes.textTitleBottom}>
                  <button className={classes.contactUS} onClick={contanctUs}>
                    Contact US
                  </button>
                  <button
                    className={classes.termOfService}
                    onClick={TnSHandler}
                  >
                    Terms Of Service
                  </button>
                  <button
                    className={classes.privacyText}
                    onClick={privacyHandler}
                  >
                    Privacy Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {loginState === "OTPsent" && (
        <>
          <OTPscreen
            inputfield={"+91"+formData.phoneno}
            setLoggedIn={props.setLoggedIn}
          />
        </>
      )}
    </div>
  );
};

export default App;
