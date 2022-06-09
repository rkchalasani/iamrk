import React from "react";

import "./Follow.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Insta from "@iconscout/react-unicons/icons/uil-instagram";

import Facebook from "@iconscout/react-unicons/icons/uil-facebook";

import Telegram from "@iconscout/react-unicons/icons/uil-telegram";

import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'

const Follow = () => {
  return (
    <div id="about" class="followmaindiv">
      <div class="followdiv">
        <Insta class="ficon" />

        <Facebook class="ficon3" />

        <Telegram class="ficon2" />

        <Twitter class="ficon4" />
      </div>

      <h2 class="fh2">FOLLOW US</h2>
    </div>
  );
};

export default Follow;
