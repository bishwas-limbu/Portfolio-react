//Importing hooks
import { useState,useContext} from "react";
import{NavContext} from '../../context/NavContext';

//Importing react icons
import {
  FaBars,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { HiX } from "react-icons/hi";
import {GrReactjs} from "react-icons/gr";
// import{BiSolidContact} from 'react-icons/Bi'
// import{AiOutlineHome} from 'react-icons/ai'
// import{BsPerson} from 'react-icons/Bs'
// import{HiNewspaper} from 'react-icons/hi'
//HiNewspaper BsPerson AiOutlineHome
//Importing css
import "./style.scss";

//Importing social links
import{facebook,github,linkedin} from '../../constants/links';

//Variable Declaration

const navLinks = ["Home", "About", "Resume", "Projects", "Contact"];

export default function NavBar() {
  const {activeLinkId} = useContext(NavContext);
//console.log(activeLinkId);

  const [toggleIcon, setToggleIcon] = useState(false);
  //const [nameLink, setNameLink] = useState("");

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleClickLinks = (e) => {
   // console.log(e.target.getAttribute('value'));
    const scrollTo = `${e.target.getAttribute('value').toLowerCase()}Section`
    console.log(scrollTo);
   // setNameLink(scrollTo);
   // document.getElementById(scrollTo).scrollIntoView({behavior:"smooth"});
   const position = document.getElementById(scrollTo).offsetTop;
   window.scrollTo({
    top: position - 64,
    left:0,
    behavior:"smooth"
  });
  }
 
  const handleClickLogo = () =>{
    document.getElementById('homeSection').scrollIntoView({behavior:"smooth"});
  }

  return (
    <div className="mainContainer">
      <div className="mainContainer__navContainer">
        <nav className="mainContainer__navContainer__navbar">
          <div className="mainContainer__navContainer__navbar__logo">
            <GrReactjs size={30}  onClick={handleClickLogo} className="mainContainer__navContainer__navbar__logo__react"/>
          </div>
          <div className="mainContainer__navContainer__navbar__menu">
            <ul
              className={`mainContainer__navContainer__navbar__menu__links ${
                toggleIcon ? "active" : ""
              }` }
              onClick={(e) => handleClickLinks(e)}
            >
              {navLinks &&
                navLinks.map((link, key) => {
      
                  return (
                    <li
                      value = {link}
                      key={key}
                      className={`mainContainer__navContainer__navbar__menu__links__link ${activeLinkId === link? 'activeLink' :''}`}
                    >

                        {link}

                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="mainContainer__navContainer__navbar__icons">
            <FaFacebookSquare onClick={ (e) => window.open(facebook, "_blank")}
              className="mainContainer__navContainer__navbar__icons__icon"
              size={30}
            />
            <FaLinkedin onClick={ (e) => window.open(linkedin, "_blank")}
              className="mainContainer__navContainer__navbar__icons__icon"
              size={30}
            />
            <FaGithubSquare onClick={ (e) => window.open(github, "_blank")}
              className="mainContainer__navContainer__navbar__icons__icon"
              size={30}
            />
          </div>
          <div className="nav-icon" onClick={handleToggle}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </nav>
      </div>
    </div>
  );
}
