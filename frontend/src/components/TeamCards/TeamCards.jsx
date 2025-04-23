// import React from 'react';
// import './TeamCards.css';
// import { assets } from '../../assets/assets';

// const teamMembers = [
//   {
//     name: 'Monica',
//     position: 'CHIEF EXECUTIVE OFFICER',
//     image: assets.Monika,
//   },
//   {
//     name: 'Mariyam Rasidha',
//     position: 'BUSINESS DEVELOPMENT MANAGER',
//     image:assets.BDM,
//   },
//   {
//     name: 'Rajasekar',
//     position: 'CHIEF ADMINISTRATIVE OFFICER',
//     image: assets.CAO,
//   },
//   {
//     name: 'Harini',
//     position: 'SENIOR RESEARCH ASSOCIATE',
//     image: assets.Harini,
//   },
//   {
//     name: 'Parvathi Pravalika',
//     position: 'HR FINANCE',
//     image: assets.FINANCE,
//   },
//   {
//     name: 'Harish',
//     position: 'MARKETING DIRECTOR',
//     image: assets.Harish,
//   },
//   {
//     name: 'Halima Hathoon',
//     position: 'CREATIVE DIRECTOR',
//     image: assets.Halima,
//   },
//   {
//     name: 'Yogesh Micheal',
//     position: 'WEB DEVELOPER',
//     image: assets.WD,
//   }
// ];

// const TeamCards = () => {
//   return (
//     <div className="team-container">
//       <h2>Meet Our Team</h2>
//       <div className="team-grid">
//         {teamMembers.map((member, index) => (
//           <div className="team-card" key={index}>
//             <img src={member.image} alt={member.name} className="team-image" />
//             <h3 className="team-name">{member.name}</h3>
//             <p className="team-position">{member.position}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamCards;



import React, { useEffect } from 'react';
import './TeamCards.css';
import { assets } from '../../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  {
    name: 'Monica',
    position: 'CHIEF EXECUTIVE OFFICER',
    image: assets.Monika,
  },
  {
    name: 'Mariyam Rasidha',
    position: 'BUSINESS DEVELOPMENT MANAGER',
    image: assets.BDM,
  },
  {
    name: 'Rajasekar',
    position: 'CHIEF ADMINISTRATIVE OFFICER',
    image: assets.CAO,
  },
  {
    name: 'Harini',
    position: 'SENIOR RESEARCH ASSOCIATE',
    image: assets.Harini,
  },
  {
    name: 'Parvathi Pravalika',
    position: 'HR FINANCE',
    image: assets.FINANCE,
  },
  {
    name: 'Harish',
    position: 'MARKETING DIRECTOR',
    image: assets.Harish,
  },
  {
    name: 'Halima Hathoon',
    position: 'CREATIVE DIRECTOR',
    image: assets.Halima,
  },
  {
    name: 'Yogesh Micheal',
    position: 'WEB DEVELOPER',
    image: assets.WD,
  }
];

const TeamCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="team-container" data-aos="fade-up">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index} data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCards;
