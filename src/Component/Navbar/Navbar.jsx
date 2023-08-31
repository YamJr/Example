import React from "react";
import './Navbar.css'
import logo from "../../Images/logo.png"

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-brand">
          <img src={logo} alt="nike" className="nike-logo" />
        </div>
        </div>
    )
}
export default Navbar