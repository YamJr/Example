import React from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState("Home");
  const shopIcon = {
    color: "#3D5A92",
  };
  const active = {
    borderBottom: "2px solid #3D5A92",
  };
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="nike" className="nike-logo" />
        </Link>
      </div>
      <div className="nav-menu">
        <li
          className="navbar-item"
          onClick={() => {
            setMenu("Home");
          }}
        >
          <Link to="/" style={menu === "Home" ? active : {}}>
            Home
          </Link>
          {menu === "Home"}
        </li>
        <li
          className="navbar-item"
          onClick={() => {
            setMenu("Men");
          }}
        >
          <Link to="/Men" style={menu === "Men" ? active : {}}>
            Men
          </Link>
          {menu === "Men"}
        </li>
        <li
          className="navbar-item"
          onClick={() => {
            setMenu("Women");
          }}
        >
          <Link to="/Women" style={menu === "Women" ? active : {}}>
            Women
          </Link>
          {menu === "Women"}
        </li>
        <li
          className="navbar-item"
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link to="/Kids" style={menu === "Kids" ? active : {}}>
            Kids
          </Link>
          {menu === "Kids"}
        </li>
      </div>
      <div className="nav__user">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button className="login__btn">login</button>
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} size="2x" style={shopIcon} />
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
