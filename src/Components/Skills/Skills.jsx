import React from "react";
import styles from "./Skills.module.css";
import skills from "../data/skills.json";
import { getImageUrl } from "../../utils";
import { motion as m } from "framer-motion";

const Skills = () => {
  return (
    <section
    className={styles.container} id="skills">
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <m.div
              className={styles.skill} key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </m.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
