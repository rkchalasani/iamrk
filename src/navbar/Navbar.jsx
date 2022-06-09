/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import logo from "../img/logo.png";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fontclass1">
      <nav className="nav">
        <div className="logodiv">
          {" "}
          <img className="logo" src={logo} alt="" />
        </div>

        <div class="navlinks">
          <ul>
            <li>
              <Link to="" smooth={true}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="collections" smooth={true}>
                COLLECTIONS
              </Link>
            </li>
            <li>
              <Link  smooth={true}>
                SHOP
              </Link>
            </li>
            <li>
              <Link smooth={true}>
                CONTACT
              </Link>
            </li>
            <li>
              <Link smooth={true}>
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
