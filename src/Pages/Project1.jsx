import React from "react";
import score from "../assets/project/score.png";
import navbar from "../assets/project/navbar.png";
import login from "../assets/project/login.png";
import feedback from "../assets/project/feedback.png";
import game1 from "../assets/project/game1.png";
import setting from "../assets/project/setting.png";
import game2 from "../assets/project/game2.png";
import style from '../CSSFiles/Project1.module.css'

export default function Project1() {
  return (
    <>
      <p>SpeedScript</p>
      <div className={style.projectImg}>
        <img src={score} className={style.projectImgScore} />
        <img src={navbar} className={style.projectImgNavbar} />
        <img src={login} className={style.projectImgLogin} />
        <img src={feedback} className={style.projectImgFeedback} />
        <img src={game1} className={style.projectImgGame1} />
        <img src={game2} className={style.projectImgGame2} />
        <img src={setting} className={style.projectImgSetting} />
      </div>
    </>
  );
}
