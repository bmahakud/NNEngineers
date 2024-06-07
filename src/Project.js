import React, { useState, useEffect } from "react";
import classes from './Project.module.css';
import Header from './header'; 
import Footers from './Footer';
import a1 from './c.jpg';
import a2 from './c1.jpg';
import a3 from './c2.jpg';
import a4 from './c3.jpg';
import a5 from './c4.jpg';
import a6 from './c5.jpg';
import t1 from './a.jpg';
import t2 from './a1.jpg';
import t3 from './a3.jpeg';
import t4 from './a4.jpeg';
import t5 from './a5.jpeg';
import t6 from './a6.jpeg';
import t7 from './a7.jpeg';

const projects = [
  { img: a1, desc: "Project 1: Renovation of downtown area, focusing on sustainability and modern architecture." },
  { img: a2, desc: "Project 2: Construction of a new residential complex with green spaces and community amenities." },
  { img: a3, desc: "Project 3: Development of a state-of-the-art office building with energy-efficient systems." },
  { img: a4, desc: "Project 4: Expansion of a public park to include playgrounds, walking paths, and a small lake." },
  { img: a5, desc: "Project 5: Retrofit of an old factory into a modern art gallery and creative workspace." },
  { img: a6, desc: "Project 6: Design and construction of a high-tech sports facility with cutting-edge features." },
];

const teamImages = [t1, t2, t3, t4, t5, t6, t7];

const ProjectCard = ({ img, desc, isLeft }) => (
  <div className={`${classes.ProjectCard} ${isLeft ? classes.LeftImage : classes.RightImage}`}>
    <img src={img} alt={desc} className={classes.ProjectImage} />
    <p className={classes.Description}>{desc}</p>
  </div>
);

const SlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={classes.SliderContainer}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`${classes.Slide} ${index === currentIndex ? classes.ActiveSlide : ''}`}
        >
          <img src={img} alt={`Team ${index + 1}`} className={classes.SlideImage} />
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className={classes.Profile}>
      <Header />
      <h1 className={classes.Heading}>NN Engineers Team and Projects</h1>
      
      <SlideShow images={teamImages} />

      <h2 className={classes.SubHeading}>Projects</h2>
      <div className={classes.ProjectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} img={project.img} desc={project.desc} isLeft={index % 2 === 0} />
        ))}
      </div>
      
      <Footers />
    </div>
  );
}

export default App;
