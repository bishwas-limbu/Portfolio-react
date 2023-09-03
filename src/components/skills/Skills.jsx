import React from "react";
import "./style.scss";
export default function Skills() {
  return (
    <div id="skills" className="skillsContainer">
      <h1>Skills</h1>
      <div className="skillsContainer__content">
        <div className="skillsContainer__content__left">
          <h4>Technical Skills</h4>
          <div className="skillsContainer__content__left__content">
            <div className="skillsContainer__content__left__content__title">
              <p>React</p>
              <p>80%</p>
            </div>
            <div className="skillsContainer__content__left__content__progressBar">
              <span style={{ width: "80%" }}></span>
            </div>
            <div className="skillsContainer__content__left__content__title">
              <p>JavaScript</p>
              <p>80%</p>
            </div>
            <div className="skillsContainer__content__left__content__progressBar">
              <span style={{ width: "80%" }}></span>
            </div>
            <div className="skillsContainer__content__left__content__title">
              <p>Node</p>
              <p>40%</p>
            </div>
            <div className="skillsContainer__content__left__content__progressBar">
              <span style={{ width: "40%" }}></span>
            </div>
            <div className="skillsContainer__content__left__content__title">
              <p>MongoDB</p>
              <p>40%</p>
            </div>
            <div className="skillsContainer__content__left__content__progressBar">
              <span style={{ width: "40%" }}></span>
            </div>
            <div className="skillsContainer__content__left__content__title">
              <p>Html</p>
              <p>95%</p>
            </div>
            <div className="skillsContainer__content__left__content__progressBar">
              <span style={{ width: "95%" }}></span>
            </div>
            <div className="skillsContainer__content__left__content__title">
              <p>Tailwind, Bootstrap</p>
              <p>80%</p>
            </div>
            <div className="skillsContainer__content__left__content__progressBar">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
        </div>
        <div className="skillsContainer__content__right">
          <h4>Professional Skills</h4>
          <div className="skillsContainer__content__right__content">
            <div className="skillsContainer__content__right__content__title">
              <p>Communication</p>
              <p>80%</p>
            </div>
            <div className="skillsContainer__content__right__content__progressBar">
              <span style={{ width: "80%" }}></span>
            </div>
            <div className="skillsContainer__content__right__content__title">
              <p>Team Work</p>
              <p>85%</p>
            </div>
            <div className="skillsContainer__content__right__content__progressBar">
              <span style={{ width: "85%" }}></span>
            </div>

            <div className="skillsContainer__content__right__content__title">
              <p>Research</p>
              <p>80%</p>
            </div>
            <div className="skillsContainer__content__right__content__progressBar">
              <span style={{ width: "80%" }}></span>
            </div>

            <div className="skillsContainer__content__right__content__title">
              <p>Problem Solving</p>
              <p>90%</p>
            </div>
            <div className="skillsContainer__content__right__content__progressBar">
              <span style={{ width: "90%" }}></span>
            </div>
            <div className="skillsContainer__content__right__content__title">
              <p>Adaptability</p>
              <p>95%</p>
            </div>
            <div className="skillsContainer__content__right__content__progressBar">
              <span style={{ width: "95%" }}></span>
            </div>
            <div className="skillsContainer__content__right__content__title">
              <p>Time Management</p>
              <p>80%</p>
            </div>
            <div className="skillsContainer__content__right__content__progressBar">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
