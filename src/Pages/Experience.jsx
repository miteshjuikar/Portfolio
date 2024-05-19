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
            <div className={style.experienceDate} >SBI Smart Application</div>
          </div>
          <div className={style.experienceDetail} >
            <ul>
              <li>
                Worked on a smart application for client SBI as Front End Developer.
              </li>
              <li>
                Started with React JS as a fresher, where my primary responsibility was implementing Protected,
                Router into the app And Identify user type to grant specific access.
              </li>
              <li>
                Collaborated closely with SBI stakeholders to gather requirements, ensuring a seamless 
                integration with the ban Worked in tandem with cross-functional teams, including UX/UI 
                designers and QA engineers, to deliver a us
              </li>
            </ul> 
          </div>
          <div className={style.experienceHeading}>
              <div className={style.experienceDate} >SBI NBC Project</div>
          </div>
          <div className={style.experienceDetail} >
            <ul>
              <li>
                The project focuses on SBI Bank, encompassing the development of a comprehensive system for 
                all transactions executed by bankers. As the project nears its final development phase, it 
                successfully went live last month.
              </li>
              <li>
                Engaged in the development and maintenance of a web application utilizing the STRUTS 
                framework. The project is grounded in the Struts framework, encompassing various 
                functionalities.
              </li>
              <li>
                Conducted regular code reviews and whipping up a training session for junior developers.
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
