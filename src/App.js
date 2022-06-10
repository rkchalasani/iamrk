import React from "react";
// import React from 'react';
import Navbar from "./navbar/Navbar";
import Sahara from "./captures/sahara/Sahara";
import Cosmos from "./captures/cosmos/Cosmos";
import Light from "./captures/light/Light";
import Lens from "./captures/lens/Lens";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import ScrollToTop from "./ScrollToTop";
import Collections from "./collections/Collections";
import Shop from "./shop/Shop";
import About from "./about/About";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <div>
          <ScrollToTop />
          <Switch>
            <Route path="/sahara">
              <Sahara />
            </Route>
            <Route path="/cosmos">
              <Cosmos />
            </Route>
            <Route path="/light">
              <Light />
            </Route>
            <Route path="/lens">
              <Lens />
            </Route>
            <Route path="/collections">
              <Collections />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
