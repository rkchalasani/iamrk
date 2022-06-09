import React from "react";
import "./Home.css";
import bgv from '../img/video3.mp4';
const Home = () => {
  return (
    <div className="homefontclass">
      <div className="homemaindiv">
        <div className="homediv">
        <h5 className="homename">RK CHALASANI</h5>
        <p className="homep">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          incidunt odit iure fugiat neque, autem eligendi, quia animi ratione
          fuga cupiditate possimus tenetur corrupti illum dolorem sapiente rem
          alias? Odio.
        </p>
        {/* <button className="sahbutton">
          Purchase
        </button> */}
        <p className="homep1">Capturing the best Moments of life</p>

      </div>
      <div className="homecard">
        <div className="homeimg"></div>
      </div>
    </div></div>
  );
};

export default Home;
