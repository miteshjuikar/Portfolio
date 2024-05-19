import './index.css'
import humanImg from './assets/human_log.png'
import style from './CSSFiles/App.module.css'
import Logo from './Pages/Logo'
import react from './assets/react-2.svg';
import Project1 from './Pages/Project1';
import Project2 from './Pages/Project2';
import aLogo from "./assets/arrow.svg";
import { useState } from 'react';
import Experience from './Pages/Experience';
import tataLogo from "./assets/tcs-logo-white-trans.png";

function App() {

  const [scrollY, setScrollY] = useState(0);

  return (
    <>
    <div>
    <section className={style.firstPage}>
        <div
          className={`${style.left}  ${
            scrollY === 0 ? "slide-in-left" : "slide-out-left"
          }`}
        >
          <span className={style.mesHi}>Hello There,</span>
          <span className={style.name}>I'm Mitesh</span>
          <span className={style.discription}>
            Passionate React.js developer with a year of experience creating
            clean, engaging interfaces. Eager to collaborate on innovative
            projects.
            <span className={style.fontColor}> Let's connect!</span>
          </span>
        </div>
        <div
          className={`${style.right} ${
            scrollY === 0 ? "slide-in-right" : "slide-out-right"
          }`}
        >
         <Logo />
          <img src={humanImg} className={style.humanImg} />
        </div>
      </section>


      <section className={style.secondPage}>
        <div className={`${style.roller} ${scrollY >= 9 ? style.falling : ""}`}>
          <img src={react} />
        </div>
        <header className={`${scrollY >= 1 ? style.focus_in_contract : ""}`}>
          Personal Projects
        </header>
        <div className={style.project1}>
          <div className={`${style.projectCard} ${scrollY >= 2 ? "slide-in-left" : ""}`}>
            <Project1 />
          </div>
          <div
            className={`${style.description} ${
              scrollY >= 2 &&
              isButtonClicked[0] &&
              isButtonClicked[1] == "first"
                ? "slide-out-fwd-center"
                : scrollY >= 2
                ? "bounce-in-right"
                : ""
            }`}
          >
            <div className={style.detail}>
              Typing Trainer web application using featuring email & password
              login and one-click Google sign-in. The project includes profile
              personalization options, feedback and tips sections, a leaderboard
              system, and two interactive typing games. Firebase ensures secure
              authentication and data storage, while CSS enhances the intuitive
              UI for optimal performance. Technologies that used in it is HTML,
              CSS, JavaScript, React.js, React-Route, Redux, firebase
            </div>
            <div className={style.moreDetailbtn}>
              <button
                className={style.circular}
                onClick={() => {
                  handleButtonClick("first");
                }}
              >
                <img src={aLogo} height={"25px"} />
              </button>
            </div>
          </div>
        </div>
        <div className={style.project1}>
          <div
            style={{ backgroundColor: "#1c1d27" }}
            className={`${style.projectCard} ${scrollY >= 10 ? "slide-in-left" : ""}`}
          >
            <Project2 />
          </div>
          <div
            className={`${style.description} ${
              scrollY >= 10 &&
              isButtonClicked[0] &&
              isButtonClicked[1] == "second"
                ? "slide-out-fwd-center"
                : scrollY >= 10
                ? "bounce-in-right"
                : ""
            }`}
          >
            <div className={style.detail}>
              Indulge your senses with Food Info, the cutting-edge food web app
              built using React. Whether you're a foodie searching for new
              culinary experiences or someone looking for convenient meal ideas
              or details, Food Info is your go-to platform for all things
              food-related. It involves complete details about food health
              Labels, calories, Nutrition, ingredients, and digest labels.
              Technologies mostly used is HTML, CSS, JavaScript, React.js,
              React-Route, REST- API.
            </div>
            <div className={style.moreDetailbtn}>
              <button
                className={style.circular}
                onClick={() => {
                  handleButtonClick("second");
                }}
              >
                <img src={aLogo} height={"25px"} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={style.thirdPage} >
        <header className={`${scrollY >= 21 ? style.focus_in_contract : ""}`}>
        <div className={style.mainHeader}>
            <img src={tataLogo} className={style.tataLogo} />
        </div>
        </header>
        <Experience />
      </section>






    </div>
    </>
  )
}

export default App
