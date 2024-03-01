import React from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="nike" className="nike-logo" />
      </div>
      <div className="nav-menu">
        <li className="navbar-item">
          <a href="#">Men</a>
        </li>
        <li className="navbar-item">
          <a href="#">Women</a>
        </li>
        <li className="navbar-item">
          <a href="#">Kids</a>
        </li>
      </div>
      <div className="nav__user">
        <button className="login__btn">login</button>
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
      </div>
    </div>
  );
}
export default Navbar;
