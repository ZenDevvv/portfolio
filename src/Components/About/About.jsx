import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../assets/about/avatar.png";
import item1 from "../../assets/about/person.png";
import item2 from "../../assets/about/prog.png";
import item3 from "../../assets/about/goal.png";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <m.section
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5}}
    transition={{ duration: 0.5 }}
    className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.avatar} src={aboutImg} alt="" />

        <ul className={styles.aboutItems}>
          <m.li
            className={styles.aboutItem}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src={item1} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Me</h3>
              <p>
                I am a fresh graduate and I aspire to be a junior front-end
                developer for a starter.
              </p>
            </div>
          </m.li>

          <m.li
            className={styles.aboutItem}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={item2} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Programming</h3>
              <p>
                I have experiences in various programming languages including
                Javascript, C, Python, and Java.
              </p>
            </div>
          </m.li>

          <m.li
            className={styles.aboutItem}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src={item3} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Long term goal</h3>
              <p>
                My goal is to become a fullstack Javascript developer utilizing various
                modern technology stacks such as MERN, MEAN, and PERN.
              </p>
            </div>
          </m.li>
        </ul>
      </div>
    </m.section>
  );
};

export default About;
