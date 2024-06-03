import classes from "./SolvingItChanllengesBlock.module.css";
import innerDiv from "../Website.module.css";
import IMG1 from "./ab3.png";
import IMG2 from "./ab2.png";
import IMG3 from "./ab1.png";

function SolvingItChanllengesBlock() {
  return (

    <div className={classes.threeCardContainer}>
      <div className={classes.card1}>
        <div className={classes.contentContainer}>
          <img src={IMG1} className={classes.img} />
          <div className={classes.title}>Educational Institutions</div>
        </div>
      </div>
      <div className={classes.card2}>
        <div className={classes.contentContainer}>
          <img src={IMG2} className={classes.img} />
          <div className={classes.title}>Manufacturing Industries</div>
        </div>
      </div>
      <div className={classes.card3}>
        <div className={classes.contentContainer}>
          <img src={IMG3} className={classes.img} />
          <div className={classes.title}>Startup eco-system</div>
        </div>
      </div>
   </div>
  );
}

export default SolvingItChanllengesBlock;
