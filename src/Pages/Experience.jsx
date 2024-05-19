import React from 'react'
import tataLogo from "../assets/tcs-logo-white-trans.png";
import locationLogo from "../assets/location.svg";
import image1 from "../assets/IMG-20231023-WA0005.jpg";
import image2 from "../assets/IMG-20231202-WA0006.jpg";
import image3 from "../assets/sbiImage.jpg";
import style from '../CSSFiles/Experience.module.css'

export default function Experience() {
  return (
    <div className={style.experienceCard} >
        <div className={style.card_face} >
          <img src={tataLogo} className={style.tataLogo} />
          <div>
            <div className={style.experienceDate} >11/2023 - Present</div>
            <div className={style.experienceLocation} >
              <img src={locationLogo} />
              Navi Mumbai
            </div>
          </div>
          <div className={style.experienceDetail} >
            <ul>
              <li>
                Our team has successfully completed the migration of an SDM
                application for our client, SBI. The application was migrated
                from JSP to React
              </li>
              <li>
                Joined as a fresher and gained diversified experience across
                different domains which used React JS technology
              </li>
              <li>
                Improved efficiency of code development process through
                automation of system build and deployment.
              </li>
            </ul>
          </div>
          </div>
          <div className={`${style.card_face} ${style.backsideCard}`}>
                <img src={image1}/>
                <img src={image3}/>
                <img src={image2}/>
          </div>
        </div>
  )
}
