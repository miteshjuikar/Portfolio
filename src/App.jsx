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
        window.location.href = "https://speedscript.netlify.app/";
      }else if(val == "second"){
        window.location.href = "https://eshop-npsv.onrender.com/";
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
          Passionate MERN Stack Developer with a Year of Experience Building Dynamic Web Applications
          Eager to Collaborate on Scalable, Full-Stack Solutions.
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
              Speed Script web application using featuring email & password
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
            Shop seamlessly with EShop, a modern e-commerce platform built using the MERN stack. Offering an intuitive interface for browsing, managing carts, and secure transactions, EShop features product categorization, user authentication, and order tracking. Admins can efficiently manage inventory with a comprehensive dashboard. Built with MongoDB, Express.js, React.js, Node.js, REST APIs, React Router, HTML, CSS, and JavaScript, EShop ensures a fast, scalable experience.
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m Mitesh Juikar, a passionate and result-driven MERN Stack developer with 3 years of experience at Tata Consultancy Services (TCS). Specializing in MongoDB, Express.js, React.js, and Node.js, I have built scalable, high-performance web applications with a solid foundation in both front-end and back-end technologies. Throughout my career, I’ve worked on various MERN stack projects, solving complex technical challenges, optimizing performance, and delivering user-centric interfaces. I have experience working with RESTful APIs, integrating third-party services, and implementing security protocols. I’m skilled in version control using Git, cloud deployment, and containerization technologies like Docker. A strong advocate for agile methodologies, I’ve collaborated with cross-functional teams to ensure efficient project delivery. With a passion for coding and a commitment to continuous learning, I stay updated with industry trends and am eager to contribute to innovative projects. I’m excited to expand my expertise in full-stack development and make meaningful contributions to the software development field.
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
      <li className={style.social_icon__item}><a className={style.social_icon__link} href="https://github.com/miteshjuikar">
        <ion-icon name={style.logo_github}></ion-icon>
        </a></li>
      <li className={style.social_icon__item} ><a className={style.social_icon__link} href="https://www.linkedin.com/in/mitesh-juikar/">
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
