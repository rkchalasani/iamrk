import "./Light.css";
import React from "react";
import Follow from "../../follow/Follow";

function Light() {
  return (
    <div className="litemaincontainer">
      <div className="litemain">
        <div className="litetext">
          <h5 className="liteh5">Light</h5>
          <p className="litep">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            incidunt odit iure fugiat neque, autem eligendi, quia animi ratione
            fuga cupiditate possimus tenetur corrupti illum dolorem sapiente rem
            alias? Odio.
          </p>
          <button className="litebutton">Purchase</button>
        </div>
        <div className="litecard">
          <div className="liteimg"></div>
        </div>
      </div>
      <div class="lrow">
        <div className="lcol1">
          <h2 className="liteh2">SIMILAR CAPTURES</h2>
        </div>
        <div class="lcol2">
          <div class="lcard2"></div>
          <div class="lcard3"></div>
          <div class="lcard4"></div>
        </div>
      </div>
      <Follow />
    </div>
  );
}

export default Light;
