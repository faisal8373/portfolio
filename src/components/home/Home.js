import React from "react";
import { Card} from "react-bootstrap";
import './HomeStyle.css';
import pic from '../../assets/abboutme.png';


export default function AboutMe() {
  return (
    <div className='cardStyle'>
      <Card className='textCard'>
        
        
           <h1 className="display-4">Welcome to my world </h1>
          <br /> <br/>
            <p className='text'> The most ambitious projects are made in this
            place, inspiring a person directing him on the path to perspective
            and self-perfection. However, self-education is the way to success,
            because a person works hard and achieves knowledge, instead of being
            inspired by someone </p>
         
      </Card>
      <Card className='picCard' >
          <img src={pic} alt='Profile' width='700'/>
      </Card>
    </div>
  );
}
