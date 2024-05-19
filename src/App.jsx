import './index.css'
import humanImg from './assets/human_log.png'
import style from './CSSFiles/App.module.css'
import Logo from './Pages/Logo'
import react from './assets/react-2.svg';
import Project1 from './Pages/Project1';
import Project2 from './Pages/Project2';
import aLogo from "./assets/arrow.svg";
import { useEffect, useState } from 'react';
import Experience from './Pages/Experience';
import tataLogo from "./assets/tcs-logo-white-trans.png";

function App() {

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const newY = Math.round(window.scrollY / 60);
      setScrollY(newY);
    });
  }, []);
  console.log(scrollY);
  const [isButtonClicked, setIsButtonClicked] = useState([false, ""]);
  const handleButtonClick = (val) => {
    setIsButtonClicked([!isButtonClicked[0], val]);
    setTimeout(() => {
      if(val == "first"){
        window.location.href = "https://typingtrainer51.netlify.app";
      }else if(val == "second"){
        window.location.href = "https://main--infofood.netlify.app";
      }
    }, 200);
  };

  const Star = () => {
    const spans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <>
        {spans.map(sp => <span key={sp} className={style.stars}></span>)}
      </>
    );
  }
  
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
          <div className={`${style.projectCard} ${scrollY >= 2 ? style.slide_in_left : ""}`}>
            <Project1 />
          </div>
          <div
            className={`${style.description} ${
              scrollY >= 2 &&
              isButtonClicked[0] &&
              isButtonClicked[1] == "first"
                ? style.slide_out_fwd_center
                : scrollY >= 2
                ? style.bounce_in_right
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
            className={`${style.projectCard} ${scrollY >= 13 ? style.slide_in_left : ""}`}
          >
            <Project2 />
          </div>
          <div
            className={`${style.description} ${
              scrollY >= 10 &&
              isButtonClicked[0] &&
              isButtonClicked[1] == "second"
                ? style.slide_out_fwd_center
                : scrollY >= 13
                ? style.bounce_in_right
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

      <section className={style.fourPage} >
        <header className={`${scrollY >= 33 ? style.focus_in_contract : ""}`}>
          About Me
        </header>
       {/* <Star/>  */}
        <div className={style.aboutContainer}>
        <p className={style.aboutMePara}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello there! I'm Mitesh Juikar, and I'm from Pen. My childhood was predominantly spent there, and it's also
          where I completed my high school education. When it came time for
          graduation, I moved to Panvel, where I delved into the world of
          programming languages. During my academic journey, I developed a keen
          interest in coding, which eventually led me to a rewarding opportunity
          at TCS (Tata Consultancy Services). My initial training took place in
          Mumbai, where I honed my coding skills and gained valuable insights.
          Post-training, I embarked on a professional journey as a software
          engineer, landing a role on the SBI project located in Navi Mumbai. In  
          this role, I specialize in utilizing technologies such as Git, Linux,
          and my personal favorite, React JS. I find immense joy in working with
          React and leveraging its capabilities to create innovative solutions.
          I am passionate about continuously learning and growing in the dynamic
          field of software development. My experiences have equipped me with a
          solid foundation, and I look forward to contributing my skills and
          expertise to future endeavors.
        </p>
        </div>
      </section>

    <footer className={style.footer} >
    <div className={style.waves}>
      <div className={style.wave} id={style.wave1}></div>
      <div className={style.wave} id={style.wave2}></div>
      <div className={style.wave} id={style.wave3}></div>
      <div className={style.wave} id={style.wave4}></div>
    </div>
    <div className={style.footerData}>
    <h2>Thanks for exploring my work!</h2>
    <p className={style.footerDetail}>I'm passionate about creating innovative solutions that blend functionality and design. Each project in my portfolio represents a unique challenge I've embraced, showcasing my skills in web development, design, and problem-solving. I believe in the power of collaboration and am always eager to take on new and exciting projects. If you're interested in learning more about my work, have specific inquiries, or would like to discuss potential collaborations, I'd love to connect. Feel free to reach out—I'm here to bring your ideas to life!</p>
    </div>
    <div className={style.footerBottom}>
    <ul className={style.social_icon}>
      <li className={style.social_icon__item}><a className={style.social_icon__link} href="https://github.com/bhosaleparag">
        <ion-icon name={style.logo_github}></ion-icon>
        </a></li>
      <li className={style.social_icon__item} ><a className={style.social_icon__link} href="https://www.linkedin.com/in/parag-bhosale-916878223/">
          <ion-icon name={style.logo_linkedin} ></ion-icon>
        </a></li>
    </ul>
    <p>&copy;2024 Mitesh Juikar | All Rights Reserved</p>
    </div>
  </footer>




    </div>
    </>
  )
}

export default App
