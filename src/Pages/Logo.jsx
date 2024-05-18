import React from "react";
import reactLogo from "../assets/react-academy.svg";
import htmlLogo from "../assets/html-1.svg";
import JSLogo from "../assets/javascript-1.svg";
import gitLogo from "../assets/git-icon.svg";
import linuxLogo from "../assets/tux.svg";
import cssLogo from "../assets/css-3.svg";
import vsLogo from "../assets/visual-studio-code-1.svg";
import style from '../CSSFiles/Logo.module.css'

export default function Logo() {
  return (
    <>
      <div className={style.logo}>
        <img src={reactLogo} className={style.reactLogo} />
        <img src={htmlLogo} className={style.htmlLogo} />
        <img src={JSLogo} className={style.JSLogo} />
        <img src={vsLogo} className={style.vsLogo} />
        <img src={cssLogo} className={style.cssLogo} />
        <img src={linuxLogo} className={style.linuxLogo} />
        <img src={gitLogo} className={style.gitLogo} />
      </div>
      
    </>
  );
}
