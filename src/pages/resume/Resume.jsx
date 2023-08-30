import React from "react";
import "./style.scss";
import { useNav } from "../../hooks/useNav";
import { FcManager } from "react-icons/fc";
import lineImage from "../../assets/line.png";

export default function Resume() {
  const resumeRef = useNav("Resume");
  return (
    <div>
      <section ref={resumeRef} id="resumeSection" className="resumeSection">
        <div className="resumeSection__container">
          <div className="resumeSection__container__title">
            <h1>
              Resume
              <span>
                <FcManager size={30} />
              </span>
            </h1>
            <h5>Why Choose Me ?</h5>
            <img src={lineImage} alt="line" />
          </div>
          <div className="resumeSection__container__contentWrapper">
            <div className="resumeSection__container__contentWrapper__left">
              <div className="resumeSection__container__contentWrapper__left__buttonsWrapper">
                <button>Education</button>
                <button>Skills</button>
                <button>Projects</button>
                <button>Interests</button>
              </div>
            </div>
            <div className="resumeSection__container__contentWrapper__right">
              <div className="resumeSection__container__contentWrapper__right__Wrapper">
                content
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
