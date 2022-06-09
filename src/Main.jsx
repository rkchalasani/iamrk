import React from "react";
import Home from "./home/Home";
import Captures from "./captures/Captures";
import Follow from "./follow/Follow";
import Gear from "./gear/Gear";

import Contact from "./contact/Contact";

const Main = () => {
  return (
    <div>
      <Home />
      <Captures />
      <Gear />
      <Contact />
      <Follow />
    </div>
  );
};

export default Main;
