import {useState} from "react";
import "./style.scss";
import { useNav } from "../../hooks/useNav";
import { FcManager,FcGraduationCap } from "react-icons/fc";
import lineImage from "../../assets/line.png";

import Info from '../../components/info/Info';
import Education from '../../components/education/Education';
import Skills from '../../components/skills/Skills';


import {useContext} from "react";
import{NavContext} from '../../context/NavContext';

//import{AiOutlineGithub,AiFillLinkedin,AiOutlineMail} from 'react-icons/ai';
//import{LuContact} from 'react-icons/lu';
//import{MdPersonOutline} from 'react-icons/md';
//import{FaRegAddressCard} from 'react-icons/fa';

//import{FaRegAddressCard,FaUniversity,FaMapLocationDot} from 'react-icons/fa';
//import{MdOutlineCastForEducation,MdDateRange} from 'react-icons/md';
//import{IoSchoolSharp} from 'react-icons/io';

const personalInfo = {
  name: "Bishwas Limbu",
  address: "Thamel, Kathamandu",
  Contact: "+9779761865389",
  email: "bisparov@gmail.com",
  linkedIn: "https://www.linkedin.com/in/bishwas-limbu-40456a217/",
  gitHub: " https://github.com/bishwas-limbu",
};

const educationInfo = {
  course: [
    "BSc in Computer Networking and IT Security",
    "Diploma in Computer Engineering",
    "School Leaving Certificate (SLC)",
  ],
  completeDate: ["2021 - 2023", "2011 – 2013", "2010"],
  collegeLocation: [" Kamalpokhari, Kathmandu", " Itahari, Sunsar"],
  marks:["1st division","1st  division", "1st division"],
  collegeName: [
    "Islington College",
    " Sushma Koirala Memorial Engineering College",
    "Little Flower English Boarding School",
  ],
  universityName: [
    " London Metropolitan University",
    "CTEVT Board",
    "National Examination Board",
  ],
};

const skills = [
  {
    JavaScript : "80",
    React : "80",
    Node: "50",
    MongoDB: "50",
    Html : "90",
    "Css(Tailwind, Bootstrap)": "70",

  },
  {
    Communication : "80",
    "Time Management" : "80",
    Teamwork : "85",
    "Problem Solving":"80",
     "Research":"90",
  },

];
  


const size = 26;

export default function Resume() {
  const resumeRef = useNav("Resume");
  const [activeTab, setActiveTab] = useState("Personal Info");
  const {activeLinkId} = useContext(NavContext);
//  console.log(activeLinkId);

  const handleClick = (e) =>{
   // console.log(e.target.innerText);
    setActiveTab(e.target.innerText);
  };

  return (
    <div>
      <section ref={resumeRef} id="resumeSection" className="resumeSection">
        <div className={`resumeSection__container  ${activeLinkId == 'Resume'? 'show':'hide'}`}>

          <div className="resumeSection__container__title">
            <h1>
              Resume
              <span>
                <FcGraduationCap size={30} />
              </span>
            </h1>
            <h5>Why Choose Me ?</h5>
            <img src={lineImage} alt="line" />
          </div>
          <div className="resumeSection__container__contentWrapper">
            <div className="resumeSection__container__contentWrapper__tab">
              <ul className="resumeSection__container__contentWrapper__tab__ul" onClick={(e) => handleClick(e)}>
                <li className ={activeTab === "Personal Info"? "active":""}>Personal Info</li>
                <li className ={activeTab === "Education"? "active":""}>Education</li>
                <li className ={activeTab === "Skills"? "active":""}>Skills</li>
              </ul>
              <div className="resumeSection__container__contentWrapper__tab__content">
                <div className="resumeSection__container__contentWrapper__tab__content__wrapper">
                  {
                    activeTab === "Personal Info" ? <Info personalInfo={personalInfo} size={size}/> : activeTab === "Education"? <Education educationInfo={educationInfo} size = {size}/>:<Skills />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
