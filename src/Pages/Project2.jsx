import React from "react";
import project2 from "../assets/project/project2.png";

import style from '../CSSFiles/Project2.module.css'

export default function Project2() {
  return (
    <>
      <p>Recipe Info with Cart</p>
      <div className={`${style.projectImg} ${style.projectImg2}`}>
        <img src={project2} alt="Project2" />
      </div>
    </>
  );
}
