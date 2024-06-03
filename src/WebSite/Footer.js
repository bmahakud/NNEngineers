import classes from "./Footer.module.css";

import { MdOutlineWatchLater } from "react-icons/md";

import { AiOutlineMail } from "react-icons/ai";

import {
  MdCall,
  MdAccessTimeFilled,
  MdEmail,
  MdLocationPin,
} from "react-icons/md";

import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsEnvelope,
} from "react-icons/bs";

import { useHistory } from "react-router-dom";

function Footer() {
  const redirectDiracAIHandler = () => {
    window.open("https://diracai.com/services/", "_blank");
  };

  const history = useHistory();

  const homePageHandler = () => {
    history.push("/Privacypolicy");
  };

  const aboutPageHandler = () => {
    history.push("/TermsofUse");
  };

  const newsHandler = () => {
    history.push("/CookiesPolicy");
  };

  const contactusHandler = () => {
    history.push("/contactus");
  };

  const aboutusPageHandler = () => {
    history.push("/AboutUs");
  };

  const helpcenterPageHandler = () => {
    history.push("/HelpCenter");
  };

  const twitterHandler = () => {
    window.open(
      "https://twitter.com/bpradhanodisha?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      "_blank"
    );
  };

  return (
    <div className={classes.footer}>
      <div className={classes.mainFooterContainer}>
        <div className={classes.block1}>
          <div className={classes.otherLink}>DiracAI</div>
          {/*onClick={homePageHandler}*/}
          <button className={classes.cont1} onClick={aboutusPageHandler}>
            {/* <div className={classes.cont1Icon}></div> */}
            <div className={classes.cont1Text}>
	       <div>HIG-306, K-5, Kalinga Vihar,</div>
	       <div>Bhubaneswar, Odisha, India</div>
	    </div>
          </button>

          {/*onClick={aboutPageHandler}*/}
          <button className={classes.cont1} onClick={helpcenterPageHandler}>
            {/* <div className={classes.cont1Icon}></div> */}
            <div className={classes.cont1Text}>Pin : 751007</div>
          </button>

          {/*onClick={newsHandler}*/}
          <button className={classes.cont1} onClick={contactusHandler}>
            {/* <div className={classes.cont1Icon}></div> */}
            <div className={classes.cont1Text}>Phone : +91 7008639757</div>
          </button>

          <button className={classes.cont1} onClick={contactusHandler}>
            {/* <div className={classes.cont1Icon}></div> */}
            <div className={classes.cont1Text}>Email : contact@diracai.com</div>
          </button>

          {/* <button className={classes.cont1} onClick={contactusHandler}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>Disclaimer</div>
          </button> */}

          {/*onClick={contactusHandler}*/}
          {/* <button className={classes.cont1} >
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>Contact Us</div>
          </button> */}
        </div>

        <div className={classes.block2}>
          <div className={classes.otherLink}>Terms of Service</div>
          {/*onClick={homePageHandler}*/}
          <button className={classes.cont1} onClick={homePageHandler}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>Privacy Policy</div>
          </button>

          {/*onClick={aboutPageHandler}*/}
          <button className={classes.cont1} onClick={aboutPageHandler}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>Terms of Use</div>
          </button>

          {/*onClick={newsHandler}*/}
          <button className={classes.cont1} onClick={newsHandler}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>Cookies Policy</div>
          </button>

          <button className={classes.cont1} onClick={contactusHandler}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>Disclaimer</div>
          </button>

          <button className={classes.cont1} onClick={aboutusPageHandler}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>About Us</div>
          </button>

          {/*onClick={aboutPageHandler}*/}
          <button className={classes.cont1} onClick={helpcenterPageHandler}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>Help Center</div>
          </button>

          {/*onClick={contactusHandler}*/}
          {/* <button className={classes.cont1} >
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>Contact Us</div>
          </button> */}
        </div>

        <div className={classes.block3}>
          <div className={classes.otherLink}>Services</div>

          <div className={classes.cont2}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>Custom Web Development</div>
          </div>

          <div className={classes.cont2}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>Mobile Development</div>
          </div>

          <div className={classes.cont2}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>Data Analytics Solutions</div>
          </div>

          <div className={classes.cont2}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>
              Ed-Tech Platform Development
            </div>
          </div>

          <div className={classes.cont2}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>Database management</div>
          </div>

          <div className={classes.cont2}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>Software Training</div>
          </div>

          {/* <div className={classes.cont2}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>Transparency Crusader</div>
          </div>

          <div className={classes.cont2}>
            <div className={classes.cont1Icon}></div>
            <div className={classes.cont1Text}>
            Consumer Rights Defender

            </div>
          </div> */}
        </div>
        <div className={classes.block4}>
          <div className={classes.otherLink}>Contact Us</div>

          <div className={classes.cont4} onClick={twitterHandler}>
            <BsTwitter className={classes.cont4Icon} />
            <BsFacebook className={classes.cont4Icon} />
            <BsYoutube className={classes.cont4Icon} />
            <BsLinkedin className={classes.cont4Icon} />
          </div>
        </div>
      </div>

      {/* <div className={classes.bottomBar}>
        <div className={classes.horiLine}></div>

        <div className={classes.text1}>
          Copyright 2023 © hellotoppers.com All rights reserved.
        </div>
      </div> */}
    </div>
  );
}

export default Footer;
