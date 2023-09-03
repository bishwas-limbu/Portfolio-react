import React from "react";
import "./style.scss";

import{FaUniversity} from 'react-icons/fa';

export default function Education({ educationInfo }) {
  return (
    <div id="education" className="educationContainer">
      <h1>Education</h1>
      <div className="educationContainer__content">
        {educationInfo.course.map((course, index) => {
          return (
            <div key={index}>
              <div className="educationContainer__content__heading">
                <h4><span><FaUniversity size={20}/></span>{educationInfo.universityName[index]}</h4>
                <h4>{educationInfo.completeDate[index]}</h4>
              </div>
              <div className="educationContainer__content__body">
                <h5>{course}</h5>
                <h5>{educationInfo.collegeName[index]}</h5>

                <h5>{educationInfo.marks[index]}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
