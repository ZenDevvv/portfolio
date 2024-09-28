import React from "react";
import heroImg from "../../assets/hero/hero.jpg";
import styles from "./Hero.module.css";
import cv from "../../assets/CV.pdf";
import { motion as m } from "framer-motion";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <m.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }} // Increased duration and added ease
        className={styles.title}>Hi, I'm Zen!</m.h1>
        <m.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} // Increased duration, delay, and added ease
        className={styles.description}>
          A fresh graduate and a passionate web developer, eager to tackle new
          challenges and bring creative solutions to life through code.
        </m.p>
        <m.a
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} // Increased duration, delay, and added ease
        className={styles.downloadBtn} href={cv} target="_blank">
          Download CV
        </m.a>
      </div>

      <m.img
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }} // Add keyframes for floating effect
      transition={{ 
        opacity: { duration: 1, type: "spring", delay: 0.6 }, 
        scale: { duration: 1, type: "spring", delay: 0.6 },
        y: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 } // Define the transition for floating
      }}
      className={styles.heroImg} src={heroImg} alt="" />

      {/* <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/> */}
    </section>
  );
};

export default Hero;
