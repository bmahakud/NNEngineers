import classes from "./Newblock.module.css";

import IMG1 from "./nb1.png";
import IMG2 from "./nb2.png";
import IMG3 from "./nb3.png";
import IMG4 from "./nb4.png";

function Newblock() {
  return (
    <div className={classes.threeCardContainer}>
      <div className={classes.card1}>
        <div className={classes.contentContainer}>
          <img src={IMG1} className={classes.img} />
          <div className={classes.title}>Cost-effectiveness</div>
          <div className={classes.details}>
            "We offer affordable IT solutions that help you reduce costs and
            improve your bottom line.
          </div>
        </div>
      </div>
      <div className={classes.card2}>
        <div className={classes.contentContainer}>
          <img src={IMG2} className={classes.img} />
          <div className={classes.title}>Innovative Technology</div>
          <div className={classes.details}>
            We stay up-to-date with the latest technology trends and offer
            innovative solutions that help you stay ahead of the competition.
          </div>
        </div>
      </div>
      <div className={classes.card3}>
        <div className={classes.contentContainer}>
          <img src={IMG3} className={classes.img} />
          <div className={classes.title}>Industry Expertise</div>
          <div className={classes.details}>
            We specialize in serving specific industries, such as healthcare,
            finance, or manufacturing, and offer tailored solutions that meet
            your unique needs.
          </div>
        </div>
      </div>

      <div className={classes.card4}>
        <div className={classes.contentContainer}>
          <img src={IMG4} className={classes.img} />
          <div className={classes.title}>Scalability</div>
          <div className={classes.details}>
            Our solutions are scalable and can grow with your business, ensuring
            that you get the most value out of your investment.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newblock;
