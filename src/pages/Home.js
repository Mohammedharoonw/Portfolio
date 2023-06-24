import React from "react";

import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Call} from "@material-ui/icons";
import { colors } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Mohammed Haroon</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <p style={{color : "yellow"}}>Contacts ↓ </p>
         <a href="tel:+918088594295"><Call /></a> 
          <a href="mailTo:mohammedharoonw@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/Mohammedharoonw/"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              JavaScript,ReactJS, Redux, HTML, CSS, React Router,
              Rest Api,Taillwind Css,BootStrap,Git Github
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
             Java , JDBC,Hibernate, Spring,SpringBoot ,
             MySQL,Sql Oracle
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
