import React from "react";
import { Card } from "react-bootstrap";
import "./AboutMeStyle.css";
import pic from "../../assets/pic2.png";

export default function AboutMe() {
  return (
    <div className="cardStyle row justify-content-evenly">
       <div className="aboutPicCard col-5">
        <img src={pic} className='img-fluid' alt="Profile" width="700" />
      </div>
      <div className="aboutTextCard col-5">
        <h1 className="display-4">About Me </h1>
        <br /> <br />
        <p className="text">
          A person who is trying to achieve his goal, trying to compare the task
          by dividing it into subtasks or components, in order to achieve the
          highest level, observing accuracy and paying attention to the little
          things. Programming for me becomes like an essay because the judge is
          that to create something from logic. Recently, this has become easier
          to achieve thanks to new advances in programming. Achieving the
          desired result is very important to me. Thus, we are able to create
          multi-puzzle applications using modern programming methods.{" "}
        </p>
      </div>
     
    </div>
  );
}
