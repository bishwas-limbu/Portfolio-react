import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { LuContact } from "react-icons/lu";
import { MdPersonOutline } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";

import './style.scss';

export default function info({ personalInfo, size }) {
 
  return (
    <div id="info" className="infoContainer">
      <h1>Personal Information</h1>
      <div className="infoContainer__content">
        {
          <ul className="infoContainer__content__ul">
            <li>
              <span>
                <MdPersonOutline
                  color={"var( --theme-nav-background-color )"}
                  size={size}
                />
              </span>
              <label>Name :</label>
              {personalInfo.name}
            </li>
            <li>
              <span>
                <FaRegAddressCard
                  color={"var( --theme-nav-background-color )"}
                  size={size}
                />
              </span>
              <label>Address :</label>
              {personalInfo.address}
            </li>
            <li>
              <span>
                <LuContact
                  color={"var( --theme-nav-background-color )"}
                  size={size}
                />
              </span>
              <label>Contact :</label>
              {personalInfo.Contact}
            </li>
            <li>
              <span>
                <AiOutlineMail
                  color={"var( --theme-nav-background-color )"}
                  size={size}
                />
              </span>
              <label>Email :</label>
              {personalInfo.email}
            </li>
            <li>
              <span>
                <AiFillLinkedin
                  color={"var( --theme-nav-background-color )"}
                  size={size}
                />
              </span>
              <label>LinkedIn : </label>
              <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer">Click Me Here</a>
            </li>
            <li>
              <span>
                <AiOutlineGithub
                  color={"var( --theme-nav-background-color )"}
                  size={size}
                />
              </span>
              <label>Git Hub :</label>
              <a href ={personalInfo.gitHub} target="_blank" rel="noopener noreferrer">Click Me Here</a>
            </li>
          </ul>
        }
      </div>
    </div>
  );
}
