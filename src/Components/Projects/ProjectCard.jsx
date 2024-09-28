import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { motion as m } from "framer-motion";


const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
  id
}) => {
  return (
    <m.div 
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: id * 0.2 } }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, backgroundColor: "var(--color-secondary-highlight)", zIndex: 2 }}
    className={styles.container}>
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
    </m.div>
  );
};

export default ProjectCard;
