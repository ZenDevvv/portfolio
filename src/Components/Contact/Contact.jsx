import React from "react";
import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/email.png";
import socialIcon from "../../assets/contact/linkedin.png";
import githubIcon from "../../assets/contact/github.png";

const Contact = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.left}>
        <h1>Contact</h1>
        <h2>Feel free to reach out!</h2>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="" />
          <a href="mailto:zenandreiobrero777@gmail.com">
            zenandreiobrero777@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={socialIcon} alt="" />
          <a href="www.linkedin.com/in/zen-andrei-obrero-6b37762b5">
            www.linkedin.com/in/zen-andrei-obrero-6b37762b5
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="" />
          <a href="https://github.com/ZenDevvv">https://github.com/ZenDevvv</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
