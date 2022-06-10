import "./Sahara.css";
import React from "react";
import Follow from "../../follow/Follow";
function Sahara() {
  return (
    <div className="sahmaincontainer">
      <div className="saharamain">
        <div className="saharatext">
          <h5 className="sahh5">Sahara</h5>
          <p className="sahp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            incidunt odit iure fugiat neque, autem eligendi, quia animi ratione
            fuga cupiditate possimus tenetur corrupti illum dolorem sapiente rem
            alias? Odio.
          </p>
          <button className="sahbutton">Purchase</button>
        </div>
        <div className="saharacard">
          <div className="saharaimg"></div>
        </div>
      </div>
      <div class="srow">
        <div className="scol1">
          <h2 className="sahh2">SIMILAR CAPTURES</h2>
        </div>
        <div class="scol2">
          <div class="scard2">
            <h5 className="h5">Cosmos</h5>
          </div>
          <div class="scard3">
            <h5 className="h5">Light</h5>
          </div>
          <div class="scard4">
            <h5 className="h5">Camera</h5>
          </div>
        </div>
      </div>
      <Follow />
    </div>
  );
}

export default Sahara;
