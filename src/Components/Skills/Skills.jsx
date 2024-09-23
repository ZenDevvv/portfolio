import React from "react";
import styles from "./Skills.module.css";
import skills from "../data/skills.json";
import { getImageUrl } from "../../utils";

const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h1 className={styles.title}>Skills</h1>

      <div className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <div className={styles.skill} key={id}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
