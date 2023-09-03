
import "./style.scss";
import { useNav } from "../../hooks/useNav";
import lineImage from "../../assets/line.png";
import { FcManager } from "react-icons/fc";
import aboutImage from "../../assets/aboutme.jpg";

import {useContext} from "react";
import{NavContext} from '../../context/NavContext';

export default function About() {
  const aboutRef = useNav("About");

  const {activeLinkId} = useContext(NavContext);
 // console.log(activeLinkId);


 
  return (
    <div>
      <section ref={aboutRef} id="aboutSection" className="aboutSection">
        <div className={`aboutSection__container ${activeLinkId == 'About'? 'show':'hide'}`}>
          <div className="aboutSection__container__title">
            <h1>
              About Me
              <span>
                <FcManager size={30} />
              </span>
            </h1>
            <h5>Why Choose Me ?</h5>
            <img src={lineImage} alt="line" />
          </div>
          <div className="aboutSection__container__content">
            <div className="aboutSection__container__content__left">
              <div className="aboutSection__container__content__left__imageWrapper">
                <img src={aboutImage} alt="aboutme" />
              </div>
              
            </div>
            <div className="aboutSection__container__content__right">
              <p>
                Currently passed out BSc (Hons) Computer Networking & IT
                Security as a major course in Islington College, Kathmandu.
                Although my major was networking, I was attracted towards
                development field. I'm a passionate and motivated, hardworking
                enthusiast learner excited about honing my skills as a developer
                through an internship opportunity. I have a solid foundation in
                web development and a strong interest in building interactive
                and user-friendly applications using various web technology.
              </p>
              <h5>Highlighted Knowledge:</h5>
              <ul> 
                 <li>Html,Css,Bootstrap,Tailwind</li>
                 <li>Rect JS, Next JS</li>
                 <li>Node, Express, MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
