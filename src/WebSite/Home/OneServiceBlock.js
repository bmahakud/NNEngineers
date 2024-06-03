import classes from "./OneServiceBlock.module.css";
import { useHistory } from "react-router-dom";


import w1 from "./s1.png";
import w2 from "./s2.png";
import w3 from "./s3.png";

import w4 from "./s4.png";
import w5 from "./s5.png";
import w6 from "./s6.png";




const OneServiceBlock = (props) => {
  const readNewsHandler = () => {
    window.open(props.link, "_blank");
  };

  const history = useHistory();

  const detailsHandler = () => {
    history.push("/servicesDetails/"+props.Service.id);
  };

  return (
    <button type="button" className={classes.paarent} onClick={detailsHandler}>
      <div className={classes.logo}>
        <img src={props.image} className={classes.imagesExam} />
      </div>
      <div className={classes.title}>{props.Service.title}</div>
      <div className={classes.description}>
      {props.Service.shortDescription}
      </div>
    </button>
  );
};
export default OneServiceBlock;
