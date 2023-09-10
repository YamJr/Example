import React from "react";
import './Navbar.css'
import logo from "../../Images/logo.png"

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-brand">
          <img src={logo} alt="nike" className="nike-logo" />
        </div>
        <div className="nav-menu">
           <li className="navbar-item"><a href="#">Men</a></li>
           <li className="navbar-item"><a href="#">Women</a></li>
           <li className="navbar-item"><a href="#">Kids</a></li>
        </div>
        <div className="user-info">
        {/* <a href="#"><button className="btn">Log in</button></a>
        <a href="#"><button className="btn">Shop Now</button></a> */}
        </div>
        </div>
    )
}
export default Navbar