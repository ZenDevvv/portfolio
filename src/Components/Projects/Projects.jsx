import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard project={project} key={id}/>;
        })}
      </div>
    </section>
  );
};

export default Projects;
