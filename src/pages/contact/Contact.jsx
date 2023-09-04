import React, { useState } from "react";
import "./style.scss";
import { useNav } from "../../hooks/useNav";

import { FcManager } from "react-icons/fc";
import lineImage from "../../assets/line.png";

import call from "../../assets/phone.png";
import location from "../../assets/map.png";
import email from "../../assets/email.png";

import { useContext } from "react";
import { NavContext } from "../../context/NavContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactData = {
  info: ["+9779761865389", "bisparov@gmail.com", "Thamel, Kathmandu"],
  image: [call, email, location],
};
export default function Contact() {
  
  const [inputData, setInputData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  //const [inputData,setInputData] = useState({});

  const contactRef = useNav("Contact");
  const { activeLinkId } = useContext(NavContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const{name,subject,email,message} = inputData;
    if(name && subject && email && message){
      toast.success('Your message was successfully recorded.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }else{
      toast.warn('Please fill all the filed compulsory.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

     
  };
  //console.log(inputData);
  return (
    <div>
      <section ref={contactRef} id="contactSection" className="contactSection">
        <div
          className={`contactSection__container  ${
            activeLinkId == "Contact" ? "show" : "hide"
          }`}
        >
          <div className="contactSection__container__title">
            <h1>
              Contact &nbsp;{" "}
              <span style={{ color: "var( --font---subtext)" }}>Me</span>
              <span>
                <FcManager size={30} />
              </span>
            </h1>
            <h5>Stay connected with me</h5>
            <img src={lineImage} alt="line" />
          </div>
          <div className="contactSection__container__content">
            <div className="contactSection__container__content__left">
              <div className="contactSection__container__content__left__wrapper">
                <div className="contactSection__container__content__left__wrapper__title">
                  <h1>Let's Discuss Your Projects.</h1>
                </div>
                <div className="contactSection__container__content__left__wrapper__details">
                  {contactData.info.map((info, index) => {
                    return (
                      <div
                        className="contactSection__container__content__left__wrapper__details__wrapper"
                        key={index}
                      >
                        <img
                          src={contactData.image[index]}
                          alt="phoneImage"
                          key={index}
                        />{" "}
                        <span>{info}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="contactSection__container__content__right">
              <div className="contactSection__container__content__right__title">
                {" "}
                <h3>Let's stayed connected with me</h3>{" "}
              </div>
              <div className="contactSection__container__content__right__content">
                <form action="">
                  <input
                    id=""
                    className="contactSection__container__content__right__content__input1"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    onChange={handleChange}
                    required
                  />
                  <input
                    id=""
                    className="contactSection__container__content__right__content__input2"
                    name="subject"
                    type="text"
                    placeholder="subject"
                    onChange={handleChange}
                    required
                  />
                  <input
                    id=""
                    className="contactSection__container__content__right__content__input3"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    id=""
                    name="message"
                    className="contactSection__container__content__right__content__areaText"
                    placeholder="Your message here..."
                    cols="30"
                    rows="5"
                    onChange={handleChange}
                  />
                  <button className="contactSection__container__content__right__content__btn" onClick = {handleSubmit}>
                    Submit
                  </button>
                  <ToastContainer />
                </form>
               
              </div>
            </div>
          </div>
          <div className="contactSection__container__footer"></div>
        </div>
      </section>
    </div>
  );
}
