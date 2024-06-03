import { useHistory } from "react-router-dom";

import classes from "./ServicesTwo.module.css";

import w1 from "./s1.png";
import w2 from "./s2.png";
import w3 from "./s3.png";
import w4 from "./s4.png";
import w5 from "./s5.png";
import w6 from "./s6.png";

import AAservice1 from "./AAServices1.json"
import AAservice2 from "./AAServices2.json"
import AAservice3 from "./AAServices3.json"
import AAservice4 from "./AAServices4.json"
import AAservice5 from "./AAServices5.json"
import AAservice6 from "./AAServices6.json"


import OneServiceBlock from "./OneServiceBlock";

const ServicesTwo = (props) => {
  const history = useHistory();

  const detailsHandler = () => {
    history.push("/servicesDetails/" + props.Service.id);
  };

  return (
    <div className={classes.mainWhytoppersContainer}>
      <div className={classes.whyToppersTitle}> Our App Development and Data Analytics Services</div>




      <div className={classes.whyToppersContainer}>
        <OneServiceBlock Service={AAservice1} image={w6} />
        <OneServiceBlock Service={AAservice2} image={w1} />
        <OneServiceBlock Service={AAservice3} image={w2} />
        <OneServiceBlock Service={AAservice4} image={w4} />
        <OneServiceBlock Service={AAservice5} image={w5} />
        <OneServiceBlock Service={AAservice6} image={w3} />





{/* 
        <button
          type="button"
          className={classes.paarent}
          onClick={detailsHandler}
        >
          <div className={classes.logo}>
            <img src={w6} className={classes.imagesExam} />
          </div>
          <div className={classes.title}>Data Analytics</div>
          <div className={classes.description}>
            Unlock actionable insights with our cutting-edge data analytics
            services, empowering your business decisions with precision
          </div>
        </button>

        <button
          type="button"
          className={classes.paarent}
          onClick={detailsHandler}
        >
          <div className={classes.logo}>
            <img src={w1} className={classes.imagesExam} />
          </div>
          <div className={classes.title}>Custom Web Development</div>
          <div className={classes.description}>
            Elevate your online presence with tailored excellence through our
            bespoke custom web development solutions.
          </div>
        </button>

        <button
          type="button"
          className={classes.paarent}
          onClick={detailsHandler}
        >
          <div className={classes.logo}>
            <img src={w2} className={classes.imagesExam} />
          </div>
          <div className={classes.title}>Mobile Development</div>
          <div className={classes.description}>
            Transforming your vision into dynamic and user-friendly reality, our
            mobile web development crafts captivating and engaging experiences.
          </div>
        </button>

        <button
          type="button"
          className={classes.paarent}
          onClick={detailsHandler}
        >
          <div className={classes.logo}>
            <img src={w4} className={classes.imagesExam} />
          </div>
          <div className={classes.title}>Ed-Tech Platform Development</div>
          <div className={classes.description}>
            Shape the future of education with our Ed-Tech platform, seamlessly
            blending innovation and accessibility for enriched learning."
          </div>
        </button>

        <button
          type="button"
          className={classes.paarent}
          onClick={detailsHandler}
        >
          <div className={classes.logo}>
            <img src={w5} className={classes.imagesExam} />
          </div>
          <div className={classes.title}>Database management</div>
          <div className={classes.description}>
            Optimize your data landscape with our expert database management for
            streamlined operations and reliable information retrieval.
          </div>
        </button>

        <button
          type="button"
          className={classes.paarent}
          onClick={detailsHandler}
        >
          <div className={classes.logo}>
            <img src={w3} className={classes.imagesExam} />
          </div>
          <div className={classes.title}>Software Training</div>
          <div className={classes.description}>
            Master cutting-edge technologies with our specialized software
            training to elevate your professional expertise.
          </div>
        </button> */}



      </div>
    </div>
  );
};

export default ServicesTwo;
