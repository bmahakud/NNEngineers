import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import classes from "./TeamBlock.module.css";


const OneTeamMember=(props)=>{


return <div className={classes.ourTeamdetailContainer}>
            <img className={classes.developerPic2} src={props.image} alt="logo"></img>

            <div className={classes.developerName}> {props.name}</div>

            <div className={classes.developerRole}> {props.role}</div>

            <div className={classes.socialNetworking}>
              <FaFacebookF className={classes.pic1} />
              <BsTwitter className={classes.pic2} />
              <AiFillInstagram className={classes.pic3} />
            </div>
          </div>


}


export default OneTeamMember;
