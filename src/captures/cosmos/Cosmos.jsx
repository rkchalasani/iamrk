import "./Cosmos.css";
import React from "react";

// import logo from "../../img/logo.png";
// import { Link } from "react-scroll";
import Follow from "../../follow/Follow";
// import Navbar from './navbar/Navbar';

function Cosmos() {
  return (
    <div className="cosmaincontainer">
      {/* <Navbar/> */}
      <div className="cosmain">
        <div className="costext">
          <h5 className="cosh5">Cosmos</h5>
          <p className="cosp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            incidunt odit iure fugiat neque, autem eligendi, quia animi ratione
            fuga cupiditate possimus tenetur corrupti illum dolorem sapiente rem
            alias? Odio.
          </p>
          <button className="cosbutton">Purchase</button>
        </div>
        <div className="coscard">
          <div className="cosimg"></div>
        </div>
      </div>
      <div class="crow">
        <div className="ccol1">
          <h2 className="cosh2">SIMILAR CAPTURES</h2>
        </div>
        <div class="coscol2">
          <div class="coscard2">
            {/* <h5 className="cosh5">Cosmos</h5> */}
          </div>
          <div class="coscard3">
            {/* <h5 className="cosh5">Light</h5> */}
          </div>
          <div class="coscard4">
            {/* <h5 className="cosh5">Camera</h5> */}
          </div>
        </div>
      </div>
      <Follow/>
    </div>
  );
}

export default Cosmos;
