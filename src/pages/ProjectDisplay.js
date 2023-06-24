import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <a href="https://foodnest.netlify.app/"><img src={project.image}  alt="logo of project"/> </a>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
     <a href="https://github.com/Mohammedharoonw"><GitHubIcon /></a> 
    </div>
  );
}

export default ProjectDisplay;
