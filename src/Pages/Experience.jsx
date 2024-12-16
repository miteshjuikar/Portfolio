import React from 'react'

import locationLogo from "../assets/location.svg";
import image1 from "../assets/IMG-20231023-WA0005.jpg";
import image2 from "../assets/IMG-20231202-WA0006.jpg";
import image3 from "../assets/sbiImage.jpg";
import style from '../CSSFiles/Experience.module.css'

export default function Experience() {
  return (
    <div className={style.experienceCard} >
        <div className={style.card_face} >
          <div className={style.experienceHeading}>
            <div>
                <div className={style.experienceDate} >March 2022 - Present</div>
                <div className={style.experienceLocation} >
                <img src={locationLogo} />
                Navi Mumbai
                </div>
            </div>
            <div className={style.experienceDate} >MERN Stack Developer</div>
          </div>
          <div className={style.experienceDetail} >
            <ul>
              <li>
              <b>Node.js API Development:</b>Designed and implemented scalable, secure RESTful APIs using Node.js, Express, and MongoDB, reducing API response times by 30%.
              </li>
              <li>
              <b>JWT Authentication:</b>Enhanced application security with JWT-based authentication and bcrypt encryption, ensuring safe user sessions. 
              </li>
              <li>
              <b>MongoDB Optimization:</b>Improved database performance using Mongoose aggregation pipelines and advanced indexing techniques. 
              </li>
              <li>
              <b>React Frontend Development:</b>Developed responsive, dynamic web pages with React, ensuring seamless integration with backend services and third-party APIs.  
              </li>
              <li>
              <b>Agile Collaboration: </b>Actively contributed to Agile sprints, collaborating with cross-functional teams to deliver 10+ features ahead of deadlines.
              </li>
              
            </ul> 
          </div>         
          
          </div>
          <div className={`${style.card_face} ${style.backsideCard}`}>
                <img src={image1}/>
                <img src={image1}/>
                <img src={image1}/>
          </div>
        </div>
  )
}
