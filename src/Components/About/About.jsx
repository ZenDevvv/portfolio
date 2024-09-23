import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../assets/about/avatar.png";
import item1 from "../../assets/about/person.png";
import item2 from "../../assets/about/prog.png";
import item3 from "../../assets/about/goal.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.avatar} src={aboutImg} alt="" />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={item1} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Me</h3>
              <p>
                I am a fresh graduate and I aspire to be a junior front-end
                developer for a starter.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={item2} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Programming</h3>
              <p>
                I have experiences in various programming languages including
                Javascript, C, Python, and Java.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={item3} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Long term goal</h3>
              <p>
                My goal is to become a fullstack Javascript developer utilizing various
                modern technology stacks such as MERN, MEAN, and PERN.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
