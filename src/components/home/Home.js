import React from "react";
import { Card } from "react-bootstrap";
import "./HomeStyle.css";
import pic from "../../assets/abboutme.png";

export default function AboutMe() {
  return (
    <div className="cardStyle">
      <Card className="textCard pt-5">
        <h1 className="display-4">Welcome to My World</h1>
        
        <br /> <br />
        <p className="text">
          {" "}
          Hi! I am Faisal Javed, a web developer focused on crafting
          great web experiences. Coding have been my passion since
          the days I started working with computers but I found myself into web
          development since 2020. I enjoy creating beautifully designed,
          intuitive and functional websites. Focus is on self-education as it is the way
          to success, because a person works hard and achieves knowledge,
          instead of being inspired by someone{" "}
        </p>
      </Card>
      <Card className="picCard">
        <img src={pic} alt="Profile" className="img-fluid" width="700" />
      </Card>
    </div>
  );
}
