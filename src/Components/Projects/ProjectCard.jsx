import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={getImageUrl(imageSrc)} alt={title} />
      <div className={styles.texts}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <ul className={styles.techs}>
          {skills.map((tech, id) => {
            return <li key={id}>{tech}</li>;
          })}
        </ul>

        <div className={styles.links}>
          <a href={demo} target="_blank">
            Demo
          </a>
          <a href={source} target="_blank">
            {" "}
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
