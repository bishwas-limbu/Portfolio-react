import React from "react";
import "./style.scss";
import { useNav } from "../../hooks/useNav";
import profileImage from "../../assets/profilepic.jpg";
import Typewriter from "typewriter-effect";


export default function Home() {
  const homeRef = useNav("Home");

  const navigateToContactPage = () => {
    document.getElementById('contactSection').scrollIntoView({behavior:"smooth"});
  }
  return (
    <div>
      <section ref={homeRef} id="homeSection" className="homeSection">
        <div className="homeSection___containerWrapper">
          <div className="homeSection___containerWrapper__leftContent">
            <div className="homeSection___containerWrapper__leftContent__imageWrapper">
              <img src={profileImage} alt="profileImage" />
              {/* <h1>image</h1> */}
            </div>
          </div>
          <div className="homeSection___containerWrapper__rightContent">
            <div className="homeSection___containerWrapper__rightContent_Wrapper">
              <h1 className="homeSection___containerWrapper__rightContent__Wrapper__heading1">Hello, I'm Bishwas</h1>
              <h1 className="homeSection___containerWrapper__rightContent__Wrapper__heading2">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Frontend Developer 😁")
                      .pauseFor(1000)
                      .deleteAll()
                      // .typeString("Welcomes You")
                      // .pauseFor(1000)
                      // .deleteAll()
                      .start();
                  }}
                />
              </h1>
              <div className="homeSection___containerWrapper__rightContent__Wrapper__buttonWrapper">
                <button onClick={navigateToContactPage}>Hire Me</button>
                <button onClick={ (e) => window.open("https://drive.usercontent.google.com/download?id=1WrRmZTaoWZjY9cIHgdH13CeaW0BSCYFU&export=download&authuser=0&confirm=t&uuid=f84d5a52-5d14-4bd2-a9cd-a9ede7739c9f&at=APZUnTV8K_185XYc_zedJEjBQobL:1693149262715", "_blank")}>Get Resume</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
