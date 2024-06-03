import classes from "./SuccessStoryDetails.module.css";

import imageNews1 from "./placeholder.jpg";

import { BsCalendar2EventFill } from "react-icons/bs";

const SuccessStoryDetails = (props) => {
  console.log("images: ----", props.Blog);
  return (
    <div className={classes.parent}>
      <div className={classes.leftContainer}>
        <div className={classes.imgAndHeading}>
          <img className={classes.mainImg} src={props.Image} alt="logo"></img>
        </div>

        <div className={classes.title}>{props.Blog.title}</div>

        <div className={classes.details}>{props.Blog.longDescription}</div>
      </div>
    </div>
  );
};

export default SuccessStoryDetails;
