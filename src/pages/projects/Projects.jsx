import React from "react";
import "./style.scss";
import { useNav } from "../../hooks/useNav";

import { FcManager } from "react-icons/fc";
import lineImage from "../../assets/line.png";
import profilepic from "../../assets/profilepic.jpg";

import portfolioImage from "../../assets/portfolioWebsite.png";
import onlineStoreImage from "../../assets/onlineStore.png";
import movieWebsiteImage from "../../assets/movieWebsite.png";
import IMDbImage from "../../assets/IMDb.png";
import comingSoonImage from "../../assets/comingSoon.png";

const projectData = {
  title: [
    "Portfolio Website",
    "IMDb Website",
    "Online Store",
    "Movie Website",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
  ],
  githubLink: [
    "https://github.com/bishwas-limbu/Portfolio-react",
    "https://github.com/bishwas-limbu/idbm-clone",
    "https://github.com/bishwas-limbu/online-Store",
    "https://github.com/bishwas-limbu/movie-website-React",
    "",
    "",
    "",
    "",
  ],
  demoLink: [
    "",
    "https://polite-mousse-45e1d5.netlify.app",
    "https://dazzling-mandazi-a2b3bb.netlify.app",
    "https://rainbow-manatee-a50ec6.netlify.app",
    "",
    "",
    "",
    "",
  ],
  image: [
    portfolioImage,
    IMDbImage,
    onlineStoreImage,
    movieWebsiteImage,
    comingSoonImage,
    comingSoonImage,
    comingSoonImage,
    comingSoonImage,
  ],
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
           {projectData.title.map((title, index) => {
                return (
                  <div  className="projectSection__container__content__cards">
                    <div className="projectSection__container__content__cards__span">
                      <div className="projectSection__container__content__cards__span__h4">
                        <h4>{title}</h4>
                      </div>

                      <div className="projectSection__container__content__cards__span__div">
                        <button className="projectSection__container__content__cards__span__div__btn1" onClick={ (e) => window.open(projectData.githubLink[index], "_blank")}>
                          Github
                        </button>
                        <button className="projectSection__container__content__cards__span__div__btn2" onClick={ (e) => window.open(projectData.demoLink[index], "_blank")}>
                          Live
                        </button>
                      </div>
                    </div>
                    <img
                      className="projectSection__container__content__cards__img"
                      src={projectData.image[index]}
                      alt="cardImage"
                    />
                  </div>
                );
              })}
            {/* <div className="projectSection__container__content__cards"></div> */}
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
