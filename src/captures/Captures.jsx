import React from "react";
import "./Captures.css";
import Sahara from "../img/img5.webp";
import Cosmos from "../img/img6.jpeg";
import Light from "../img/img7.webp";
import Cam from "../img/img8.jpeg";
import { Link } from "react-router-dom";

const Captures = () => {
  return (
    <div className="section">
      <div class="sectiontitle">
        <h1>Our Best Captures</h1>
        <div class="row">
          <Link to="sahara">
            <div id="cardid" class="card"></div>
          </Link>
          <Link to="cosmos">
            <div class="card2"></div>
          </Link>
          <Link to="light">
            <div class="card3"></div>
          </Link>
          <Link to="lens">
            <div class="card4"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Captures;
