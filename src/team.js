// TeamDetails.js

import React from 'react';
import classes from './team.module.css';
import Header from './header';
import Footer from './Footer';
import s1 from './ppl.jpg';
import s2 from './ppl1.jpg';
import s3 from './ppl2.jpg';
import s4 from './ppl3.jpg';
import s5 from './ppl.png';
import s6 from './ppl1.png';
import s7 from './ppl2.png';
import s8 from './ppl.jpeg';
import s9 from './ppl1.jpeg';
import s10 from './ppl4.jpg';

const TeamDetails = () => {
  
  const teamMembers = [
    { id: 1, name: 'Sharon Gosh', role: 'CEO', image: s1 },
    { id: 2, name: ' Smith Lodha', role: 'Manager', image: s2 },
    { id: 3, name: 'Mike saxsena', role: 'HR', image: s3 },
    { id: 4, name: 'Emily farade', role: 'Head Engineer', image: s4 },
    { id: 5, name: 'Aalu Arjun', role: 'Architect', image: s5 },
    { id: 6, name: 'Sarat Raj', role: 'Project Coordinator', image: s6 },
    { id: 7, name: 'Dravid Aohli', role: 'Construction Supervisor', image: s7 },
    { id: 8, name: 'Loveent Kush', role: 'Safety Officer', image: s8 },
    { id: 9, name: 'Daya Pal', role: 'Security Officer', image: s9 },
    { id: 10, name: 'Herish Lal', role: 'Office Management', image: s10 },
  ];

  return (
    <div>
      <Header />
      <div className={classes.teamdetails}>
        <h1>OUR TEAM</h1>
        <div className={classes.teammembers}>
          {teamMembers.map(member => (
            <div key={member.id} className={classes.teammember}>
              <img src={member.image} alt={member.name} className={classes.memberimage} />
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TeamDetails;
