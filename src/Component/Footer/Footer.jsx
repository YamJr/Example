import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="about">
        <h4 className="info">About Us</h4>
        <p>
          The biggest hyperstore in the Universe. Got you all cover with
          exclusive collections and latest drops.{" "}
        </p>
      </div>
      <div className="useful-links">
        <h4 className="info">Follow Us</h4>
          <FontAwesomeIcon icon={faFacebook} size="2x" className="icons"/>
          <FontAwesomeIcon icon={faTwitter} size="2x" className="icons"/>
          <FontAwesomeIcon icon={faInstagram} size="2x" className="icons"/>
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="icons"/>
      </div>
    </div>
     <div className="footer__bottom">
     <p>2024 Your Company.All rights reserved.</p>
   </div>
   </>
  );
}
export default Footer;
