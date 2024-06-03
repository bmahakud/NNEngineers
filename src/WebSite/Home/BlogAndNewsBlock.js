import classes from "./BlogAndNewsBlock.module.css";
import bookAppointment from "./bookAppointment.jpg";
import bn1 from "./bn1.jpg";
import bn2 from "./bn2.jpg";
import bn3 from "./bn3.jpg";
import bn4 from "./bn4.jpg";
import SingleBlog from "./SingleBlog";

import BlogImage1 from "./BL1.jpg";
import BlogImage2 from "./BL2.png";
import BlogImage3 from "./BL3.jpg";
import BlogImage4 from "./BL4.jpeg";

import PSU_DATA_ANALYTICS from "./PSU_DATA_ANALYTICS.png";
import AI_STUDENT_ASSESSMENT from "./AI_STUDENT_ASSESSMENT.png";
import STARTUP_MVP_BUILDER from "./STARTUP_MVP_BUILDER.png"






function BlogAndNewsBlock() {
  
  let title1 = "Why Public Sector Units should leverage Data Analytics into their Organizations?";
  let text1 ="Leveraging data analytics in public sector units can offer numerous benefits and contribute to more effective and efficient governance. Here are several reason..."
  let link1 = "https://www.squareyards.com/blog/rera-odisha-rerat";

  let title2 = "How AI-based Student Assessment Helps Educational Institutions.";
  let text2 ="Artificial Intelligence (AI) is helping student assessment for several reasons, providing benefits to both educators and students. Here are some key reasons why AI is playing a crucial ..."
  let link2 =
    "https://rerafiling.com/rera-article-detail.php/727/working-of-rera-after-its-enactment";

  let title3 = "10 must reasons why a startup should work on building a MVP";
  let text3 ="Building a Minimum Viable Product (MVP) is a common and strategic approach for startups. Here are ten reasons why startups should consider developing an MVP..."
  let link3 =
    "https://rerafiling.com/rera-article-detail.php/722/legal-remedies-if-real-estate-project-is-stucked";

  let title4 = "Best RERA Practices to be followed by Builders";
  let text4 =
    "The Real Estate Regulatory Act, 2016 was enacted for ease of difficulties being faced by the Builders as well as the allottees in transacting through the earlier complex system of Real Estate regulations and reliefs...";
  let link4 =
    "https://rerafiling.com/rera-article-detail.php/717/best-rera-practices-to-be-followed-by-builders";

  return (
    <div className={classes.blogAndNewsContainer}>
      <div className={classes.latest}>
        <div className={classes.latestTitle}>Blogs</div>
        <div className={classes.latestsubTitle}>Latest Articles</div>
      </div>

      <div className={classes.newsContainer}>
        <SingleBlog
          title={title1}
          text={text1}
          link={link1}
          image={PSU_DATA_ANALYTICS}
        />
        <SingleBlog
          title={title2}
          text={text2}
          link={link2}
          image={AI_STUDENT_ASSESSMENT}
        />
        <SingleBlog
          title={title3}
          text={text3}
          link={link3}
          image={STARTUP_MVP_BUILDER}
        />
	 {/*
        <SingleBlog
          title={title4}
          text={text4}
          link={link4}
          image={BlogImage4}
        />
	*/}
      </div>
    </div>
  );
}

export default BlogAndNewsBlock;
