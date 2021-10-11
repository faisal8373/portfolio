import React from "react";
import "./ContactMeStyle.css";
import emailjs from "emailjs-com";
import { useState } from "react";


export default function ContactMe() {
  const [fromName, setFromName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    // if(fromName === '' || email === '' || message === '' ){
    //     alert('One of the required fields is left blank')
    // }
    // else{
    //     let emailSend = {
    //         fromName,
    //         email,
    //         message
    //     }

    if(fromName === '' || email === '' || message === ''){
      alert('one of the required field is empty')
    }    
    else{
    emailjs.sendForm('service_5sppa9r', 'template_g8locut', e.target, 'user_5p6zDw9JkLCSWJ4D0PY7S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
  };
  return (
    <div className="container-fluid contactMe">
      <h1 className="display-3">Get In Touch With Me </h1><br/>
      <form onSubmit={sendEmail} >
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <input
            type="name"
            className="form-control wid"
            placeholder="Name"
            name="name"
            required
            onChange={e => setFromName(e.target.value)}
          />
          <br />
          <input
            type="email"
            className="form-control wid"
            placeholder="name@example.com"
            name="email"
            required
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <textarea
            type="text"
            rows="6"
            className="form-control wid"
            placeholder="Message"
            name="message"
            required
            onChange={e => setMessage(e.target.value)}
          />
          <br />
          <button className="btn btn-outline-primary wid" type="submit" >
            Send
          </button>
        </div>
        
      </div>
      </form>
    </div>
  );
}
