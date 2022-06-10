import "./Lens.css";
import React from "react";
import Follow from "../../follow/Follow";
function Lens() {
  return (
    <div className="lensmaincontainer">
      <div className="lensmain">
        <div className="lenstext">
          <h5 className="lensh5">Lens</h5>
          <p className="lensp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            incidunt odit iure fugiat neque, autem eligendi, quia animi ratione
            fuga cupiditate possimus tenetur corrupti illum dolorem sapiente rem
            alias? Odio.
          </p>
          <button className="lensbutton">Purchase</button>
        </div>
        <div className="lenscard">
          <div className="lensimg"></div>
        </div>
      </div>
      <div class="lensrow">
        <div className="lenscol1">
          <h2 className="lensh2">SIMILAR CAPTURES</h2>
        </div>
        <div class="lenscol2">
          <div class="lenscard2"></div>
          <div class="lenscard3"></div>
          <div class="lenscard4"></div>
        </div>
      </div>
      <Follow />
    </div>
  );
}

export default Lens;
