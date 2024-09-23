import React from "react";
import heroImg from "../../assets/hero/hero.jpg";
import styles from "./Hero.module.css";
import cv from "../../assets/CV.pdf";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zen!</h1>
        <p className={styles.description}>
          A fresh graduate and an aspiring web developer. I am excited to apply
          my skills to new challenges.
        </p>
        <a className={styles.downloadBtn} href={cv} target="_blank">
          Download CV
        </a>
      </div>

      <img className={styles.heroImg} src={heroImg} alt="" />

      {/* <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/> */}
    </section>
  );
};

export default Hero;
