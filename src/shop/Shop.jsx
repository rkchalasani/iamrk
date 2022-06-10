import React from 'react';
import Gear from '../gear/Gear';
import luts1 from "../img/luts1.jpg";
import preset1 from "../img/preset1.jpg";
import photog1 from "../img/photog1.jpg";
import videog1 from "../img/videog1.jpg";
import "./Shop.css";
import Follow from "../follow/Follow";
const Shop = () => {
  return (
    <div>
        <Gear/>
        <h1 className="shopgearh1">LUTs AND PRESETS</h1>

<div className="shopdiv1">
  <div className="shopslide3">
    <h5 className="shoplutsh5">LUTs</h5>
    <div>
      <img class="shopgearcard1" src={luts1} alt="" />
    </div>
    <p className="shopgearp">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
    </p>
  </div>
  <div className="shopslide3">
    <h5 className="shoppreseth5">PRESETS</h5>
    <div>
      <img class="shopgearcard2" src={preset1} alt="" />
    </div>
    <p className="shopgearp">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
    </p>
  </div>
</div>

<h1 className="shopgearh2">COURSES WE OFFER</h1>
<div className="shopdiv2">
  <div className="shopslide3">
    <h5 className="shopgearh5">PHOTOGRAPHY COURSE</h5>
    <div>
      <img class="shopgearcard3" src={photog1} alt="" />
    </div>
    <p className="shopgearp">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
    </p>
  </div>
  <div className="shopslide3">
    <h5 className="shopgearh5">VIDEOGRAPHY COURSE</h5>
    <div class="shopgearcard4">
      <img src={videog1} alt="" />
    </div>
    <p className="shopgearp">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
    </p>
  </div>
</div>
<Follow />
    </div>
  )
}

export default Shop