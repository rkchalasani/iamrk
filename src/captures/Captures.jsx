import React from "react";
import "./Captures.css";
import Sahara from "../img/img5.webp";
import Cosmos from "../img/img6.jpeg";
import Light from "../img/img7.webp";
import Cam from "../img/img8.jpeg";
import {Link} from "react-router-dom";

const Captures = () => {
  return (
    <div className="section">
      <div class="sectiontitle">
        <h1>Our Best Captures</h1>
        <div class="row">
          <Link to="sahara"> 
          <div id="cardid" class="card">
            {/* <img class="card" src={Sahara} alt=""></img> */}
          </div>
          </Link>
          <Link to="cosmos"> 
          <div class="card2">
            {/* <img class="card2" src={Cosmos} alt=""></img> */}
          </div>
          </Link>
          <Link to="light"> 
          <div class="card3">
            {/* <img class="card3" src={Light} alt=""></img> */}
          </div>
          </Link>
          <Link to="lens"> 
          <div class="card4">
            {/* <img class="card4" src={Cam} alt=""></img> */}
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Captures;
