import React, { useState } from 'react';
import classes from './Project.module.css';
import pic from './c.jpg';
import completeProject1 from './c4.jpg';
import completeProject2 from './c5.jpeg';
import completeProject3 from './c6.jpeg';
import  completeProject4 from './c7.jpeg'; 
import currentProject1 from './c1.jpeg';
import currentProject2 from './c2.jpeg';
import currentProject3 from './c3.jpeg';
import currentProject4 from './c8.jpeg';

const ProjectHeading = () => {
  const [activeTab, setActiveTab] = useState('complete');

  return (
    <section className={classes.projectheading}>
      <h2>Our Projects</h2>
      <div className={classes.hero}>
        <div className={classes.herotext}>
          <h1>We Complete <span>Multiple Projects</span> in the Past</h1>
          <div className={classes.stats}>
            <div className={classes.statitem}>
              <p>50+</p>
              <small>Premium Product</small>
            </div>
            <div className={classes.statitem}>
              <p>30+</p>
              <small>Happy Customers</small>
            </div>
            <div className={classes.statitem}>
              <p>4+</p>
              <small>Awards Winning</small>
            </div>
          </div>
        </div>
        <div className={classes.heroimage}>
          <img src={pic}/>
        </div>
      </div>

      <div className={classes.projectssection}>
        <h2>Projects Gallery</h2>
        <div className={classes.filtertabs}>
          <span
            className={activeTab === 'complete' ? classes.activetab : ''}
            onClick={() => setActiveTab('complete')}
          >
            Complete Project
          </span>
          <span
            className={activeTab === 'current' ? classes.activetab : ''}
            onClick={() => setActiveTab('current')}
          >
            Current Project
          </span>
        </div>
        <div className={classes.projectsgallery}>
          {activeTab === 'complete' && (
            <>
              <div className={classes.projectcard}>
                <img src={completeProject1} alt="Complete Project 1" />
                <p className={classes.projectdescription}>Luxury Villa in the suburbs.</p>
              </div>
              <div className={classes.projectcard}>
                <img src={completeProject2} alt="Complete Project 2" />
                <p className={classes.projectdescription}>Modern apartment complex.</p>
              </div>
              <div className={classes.projectcard}>
                <img src={completeProject3} alt="Complete Project 3" />
                <p className={classes.projectdescription}>Eco-friendly residential community.</p>
              </div>
              <div className={classes.projectcard}>
                <img src={completeProject4} alt="Complete Project 3" />
                <p className={classes.projectdescription}>Eco-friendly residential community.</p>
              </div>
            </>
          )}
          {activeTab === 'current' && (
            <>
              <div className={classes.projectcard}>
                <img src={currentProject1} alt="Current Project 1" />
                <p className={classes.projectdescription}>High-rise office building under construction.</p>
              </div>
              <div className={classes.projectcard}>
                <img src={currentProject2} alt="Current Project 2" />
                <p className={classes.projectdescription}>Upcoming beachfront resort.</p>
              </div>
              <div className={classes.projectcard}>
                <img src={currentProject3} alt="Current Project 3" />
                <p className={classes.projectdescription}>New city park development.</p>
              </div>
              <div className={classes.projectcard}>
                <img src={currentProject4} alt="Current Project 3" />
                <p className={classes.projectdescription}>New city park development.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectHeading;
