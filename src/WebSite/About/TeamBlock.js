import classes from "./TeamBlock.module.css";
import bookAppointment from "./bookAppointment.jpg";
import { FaFacebookF } from "react-icons/fa";



import  Reeta from "./Reeta.jpeg";
import  Alok from "./Alok.png";
import  Sanjit  from "./Sanjit.png";
import  Jacky from "./Jacky.jpeg";
import  Kiran  from "./KIran.jpg";
import  Arpita from "./Arpita.png";
import  Souvik from "./Souvik.png";
import  Akshay from "./Akshay.jpeg";
import Bibhu from "./Bibhu.jpeg";
import Ipsit from "./Ipsit.jpeg";
import Rasmita from "./Rasmita.jpeg";
import Ateeb from "./Ateeb.png";

import Reshwanth from "./reshwant.jpeg";

import OneTeamMember from "./OneTeamMember";



import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

import Bibhuti from './Bibhuti.jpeg';

import SagarPatro from "./SagarPatra.jpeg"


import Samarendra from "./Samarendra.jpg";

import Trushank from "./Trushank.jpeg";




function TeamBlock() {
  return (
    <div className={classes.TeamBlockParent}>
      <div className={classes.parentOurTeam}>
        <div className={classes.ourTeam}>
          <div className={classes.ourTeamTitle}>Our Team</div>
          <div className={classes.ourTeamSubTitle}> Meet Our  Team</div>
        </div>



        <div className={classes.allTeamMemberdetail}>


         <OneTeamMember name="Bibhuprasad Mahakud"
                        role="CEO, Founder"
                        image={Bibhu}
                        />


          <OneTeamMember name="Ipsit Panda"
                        role="Founder"
                        image={Ipsit}
                        />


          <OneTeamMember name="Rasmita Sahoo"
                        role="Advisor"
                        image={Rasmita}
                        />

	  <OneTeamMember name="Bibhuti Parida"
                        role="Advisor"
                        image={Bibhuti}
                        />
         
	  <OneTeamMember name="Akshay Bhasme"
                        role="Designer"
                        image={Akshay}
                        />

	  <OneTeamMember name="Ateeb Ashfaque"
                         role="Android Developer"
                         image={Ateeb}
                        />

	  <OneTeamMember name="Sagar Patro"
                         role="HR & Sales"
                         image={SagarPatro}
                        />


	  <OneTeamMember name="Souvik Maity"
                        role="Data Scientist"
                        image={Souvik}
                        />

	  <OneTeamMember name="Reeta Sharma"
                        role="Data Scientist"
                        image={Reeta}
                        />

	  <OneTeamMember name="Arpita Sahoo"
                        role="Data Science Intern"
                        image={Arpita}
                        />

          <OneTeamMember name="Alok Kumar Sahoo"
                        role="Digital Marketer"
                        image={Alok}
                        />

          <OneTeamMember name="Sanjit Mohapatra"
                        role="Digital Marketer"
                        image={Sanjit}
                        />
           <OneTeamMember name="Kiran Panda"
                        role="Software Developer"
                        image={Kiran}
                        />

            <OneTeamMember name="Rachuti Reshwanth"
	               role="Web Developer"
	               image={Reshwanth}
	               />


	     <OneTeamMember name="Samarendra Nayak"
                       role="Data Scientist/Back-End Developer"
                       image={Samarendra}
                       />

	      <OneTeamMember name="Trushank Lohar"
                       role="Web Developer"
                       image={Trushank}
                       />



















        </div>
      </div>
    </div>
  );
}

export default TeamBlock;
