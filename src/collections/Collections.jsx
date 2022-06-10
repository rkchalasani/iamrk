import React from "react";
import Captures from "../captures/Captures";
import arch from "../img/arch1.jpeg";
import fash from "../img/fash1.jpg";
import sport from "../img/sports1.jpg";
import wed from "../img/wed2.jpg";
import './Collections.css'
import Follow from '../follow/Follow'

const Collections = () => {
  return (
    <div className="collmaindiv">
      <Captures />
      <h1 className="collgearh1">OUR WORK</h1>
        
          <div className="colldiv1">
          <div className="collslide3">
            {/* <div className="collswiper3a"> */}
              <h5 className="collgearh5">ARCHITECTURAL PHOTOGRAPHY</h5>
              <div>
                <img class="collgearcard1" src={arch} alt="" />
              </div>
              <p className="collgearp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                {/* incidunt odit iure fugiat neque, autem eligendi, quia animi
                ratione fuga cupiditate possimus tenetur corrupti illum dolorem
                sapiente rem alias? Odio. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quae, sit inventore rem labore, saepe
                similique, expedita totam omnis porro temporibus praesentium
                reprehenderit? Iste dolorem cupiditate blanditiis ut? Fuga,
                error velit? */}
              </p>
              {/* <button className="collgearbutton">Purchase</button> */}
            {/* </div> */}
          </div>
          <div className="collslide3">
            {/* <div className="collswiper3a"> */}
              <h5 className="collgearh5">FASHION PHOTOGRAPHY</h5>
              <div>
                <img class="collgearcard2" src={fash} alt="" />
              </div>
              <p className="collgearp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                {/* incidunt odit iure fugiat neque, autem eligendi, quia animi
                ratione fuga cupiditate possimus tenetur corrupti illum dolorem
                sapiente rem alias? Odio. */}
              </p>
              {/* <button className="collgearbutton">Purchase</button> */}
            {/* </div> */}
          </div>
          </div>
          <div className="colldiv2">
          <div className="collslide3">
            {/* <div className="collswiper3a"> */}
              <h5 className="collgearh5">SPORTS PHOTOGRAPHY</h5>
              <div>
                <img class="collgearcard3" src={sport} alt="" />
              </div>
              <p className="collgearp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                {/* incidunt odit iure fugiat neque, autem eligendi, quia animi
                ratione fuga cupiditate possimus tenetur corrupti illum dolorem
                sapiente rem alias? Odio. */}
              </p>
              {/* <button className="collgearbutton">Purchase</button> */}
            {/* </div> */}
          </div>
          <div className="collslide3">
            {/* <div className="collswiper3a"> */}
              <h5 className="collgearh5">WEDDING PHOTOGRAPHY</h5>
              <div class="collgearcard4">
                <img src={wed} alt="" />
              </div>
              <p className="collgearp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                {/* incidunt odit iure fugiat neque, autem eligendi, quia animi
                ratione fuga cupiditate possimus tenetur corrupti illum dolorem
                sapiente rem alias? Odio. */}
              </p>
              {/* <button className="collgearbutton">Purchase</button> */}
            {/* </div> */}
          </div>
          </div>
          
        {/* </Swiper> */}
        <Follow/>
    </div>
  );
};

export default Collections;
