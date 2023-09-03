import React from "react";
import "./style.scss";
import { useNav } from "../../hooks/useNav";

import { FcManager } from "react-icons/fc";
import lineImage from "../../assets/line.png";
import profilepic from "../../assets/profilepic.jpg";

const projectData = {
  title:["Portfolio Website", "IMDb Website","Online Store", "coming Soon","coming Soon","coming Soon","coming Soon","coming Soon"],
  githubLink:["","","","","","","",""];
};

export default function Projects() {
  const projectRef = useNav("Projects");
  return (
    <div>
      <section ref={projectRef} id="projectsSection" className="projectSection">
        {/* <div className={`resumeSection__container  ${activeLinkId == 'Resume'? 'show':'hide'}`}> */}
        <div className="projectSection__container">
          <div className="projectSection__container__title">
            <h1>
              Projects
              <span>
                <FcManager size={30} />
              </span>
            </h1>
            <h5>Why Choose Me ?</h5>
            <img src={lineImage} alt="line" />
          </div>
          <div className="projectSection__container__content">
            <div className="projectSection__container__content__cards">
              <div className="projectSection__container__content__cards__span">
                <div className="projectSection__container__content__cards__span__h4">
                  <h4>Portfolio website</h4>
                </div>

                <div className="projectSection__container__content__cards__span__div">
                  <button className="projectSection__container__content__cards__span__div__btn1">
                    Github
                  </button>
                  <button className="projectSection__container__content__cards__span__div__btn2">
                    Live
                  </button>
                </div>
              </div>
              <img
                className="projectSection__container__content__cards__img"
                src={profilepic}
                alt="cardImage"
              />
            </div>
            {/* <div className="projectSection__container__content__cards">
              <span
                className="projectSection__container__content__cards__span"
                style={{ width: "100%" }}
              >
                <h4 className="projectSection__container__content__cards__span__h4">
                  Title
                </h4>
                <div className="projectSection__container__content__cards__span__div"></div>
                <button>Github</button>
                <button>Live</button>
              </span>
              <img
                className="projectSection__container__content__cards__img"
                src={profilepic}
                alt="cardImage"
              />
            </div>
            <div className="projectSection__container__content__cards">
              <span
                className="projectSection__container__content__cards__span"
                style={{ width: "100%" }}
              >
                <h4 className="projectSection__container__content__cards__span__h4">
                  Title
                </h4>
                <div className="projectSection__container__content__cards__span__div"></div>
                <button>Github</button>
                <button>Live</button>
              </span>
              <img
                className="projectSection__container__content__cards__img"
                src={profilepic}
                alt="cardImage"
              />
            </div>
            <div className="projectSection__container__content__cards">
              <span
                className="projectSection__container__content__cards__span"
                style={{ width: "100%" }}
              >
                <h4 className="projectSection__container__content__cards__span__h4">
                  Title
                </h4>
                <div className="projectSection__container__content__cards__span__div"></div>
                <button>Github</button>
                <button>Live</button>
              </span>
              <img
                className="projectSection__container__content__cards__img"
                src={profilepic}
                alt="cardImage"
              />
            </div>
            <div className="projectSection__container__content__cards">
              <span
                className="projectSection__container__content__cards__span"
                style={{ width: "100%" }}
              >
                <h4 className="projectSection__container__content__cards__span__h4">
                  Title
                </h4>
                <div className="projectSection__container__content__cards__span__div"></div>
                <button>Github</button>
                <button>Live</button>
              </span>
              <img
                className="projectSection__container__content__cards__img"
                src={profilepic}
                alt="cardImage"
              />
            </div>
            <div className="projectSection__container__content__cards">
              <span
                className="projectSection__container__content__cards__span"
                style={{ width: "100%" }}
              >
                <h4 className="projectSection__container__content__cards__span__h4">
                  Title
                </h4>
                <div className="projectSection__container__content__cards__span__div"></div>
                <button>Github</button>
                <button>Live</button>
              </span>
              <img
                className="projectSection__container__content__cards__img"
                src={profilepic}
                alt="cardImage"
              />
            </div>
            <div className="projectSection__container__content__cards">
              <span
                className="projectSection__container__content__cards__span"
                style={{ width: "100%" }}
              >
                <h4 className="projectSection__container__content__cards__span__h4">
                  Title
                </h4>
                <div className="projectSection__container__content__cards__span__div"></div>
                <button>Github</button>
                <button>Live</button>
              </span>
              <img
                className="projectSection__container__content__cards__img"
                src={profilepic}
                alt="cardImage"
              />
            </div>
            <div className="projectSection__container__content__cards">
              <span
                className="projectSection__container__content__cards__span"
                style={{ width: "100%" }}
              >
                <h4 className="projectSection__container__content__cards__span__h4">
                  Title
                </h4>
                <div className="projectSection__container__content__cards__span__div"></div>
                <button>Github</button>
                <button>Live</button>
              </span>
              <img
                className="projectSection__container__content__cards__img"
                src={profilepic}
                alt="cardImage"
              />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
