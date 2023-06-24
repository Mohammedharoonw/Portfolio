import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { EmailOutlined } from "@material-ui/icons";
import { Call} from "@material-ui/icons";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      
      <a href="tel:+918088594295"><Call /></a> 
          <a href="mailTo:mohammedharoonw@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/Mohammedharoonw/"><GithubIcon /></a>
      </div>
      <p> &copy; 2023 portfolio-haroon.com</p>
    </div>
  );
}

export default Footer;
