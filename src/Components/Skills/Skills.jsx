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
      <m.div
        className={styles.skills}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.125,
            },
          },
        }}
      >
        {skills.map((skill, id) => {
          return (
            <m.div
              className={styles.skill} key={id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </m.div>
          );
        })}
      </m.div>
    </section>
  );
};

export default Skills;
