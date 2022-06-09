import React from "react";
import "./Contact.css";
import hello from "../img/contactimg.webp";
const Contact = () => {
  return (
    <div className="contactmaindiv">
      <div className="contactimg">
        <img class="contactimgcard" src={hello} alt=""></img>
      </div>
      <div className="login">
        <p>SEND YOUR DETAILS FOR COLLAB</p>

        <form
          className="contactform"
          form="Login_form"
          onsubmit="submit_form()"
        >
          <p for="name">Name</p>
          <input
            className="input1"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <p>Email-id</p>
          <input
            type="text"
            className="input2"
            placeholder="Enter your Email id"
          />
          <p>Message</p>
          <textarea
            className="contactmsg"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="subbutton">Submit</button>
        </form>
        <div className="contactus">
          <p className="contactus1">CONTACT US @</p>
          <p className="mailp"> abcdefghello@react.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
