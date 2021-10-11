import React from "react";
import { Card } from "react-bootstrap";
import "./AboutMeStyle.css";
import pic from "../../assets/pic2.png";

export default function AboutMe() {
  return (
    <div className="cardStyle row justify-content-evenly">
      <div className="aboutPicCard col-5">
        <img src={pic} className="img-fluid pt-5" alt="Profile" width="700" />
      </div>
      <div className="aboutTextCard col-5">
        <h1 className="display-4">About Me </h1>
        <br /> <br />
       
        <p className="text">
          I’m interested in Mobile & Web App Development. I’m currently learning
          React Native and NodeJs. Programming for me becomes
          like an essay because the judge is that to create something from
          logic. Recently, this has become easier to achieve thanks to new
          advances in programming. Achieving the desired result is very
          important to me. Thus, we are able to create multi-puzzle applications
          using modern programming methods.{" "}
        </p>
      </div>
    </div>
  );
}
