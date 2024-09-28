import React from "react";
import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/email.png";
import socialIcon from "../../assets/contact/linkedin.png";
import githubIcon from "../../assets/contact/github.png";
import { motion as m } from "framer-motion";

const Contact = () => {
  const contactLinks = [
    {
      icon: emailIcon,
      href: "mailto:zenandreiobrero777@gmail.com",
      text: "zenandreiobrero777@gmail.com",
    },
    {
      icon: socialIcon,
      href: "www.linkedin.com/in/zen-andrei-obrero-6b37762b5",
      text: "www.linkedin.com/in/zen-andrei-obrero-6b37762b5",
    },
    {
      icon: githubIcon,
      href: "https://github.com/ZenDevvv",
      text: "https://github.com/ZenDevvv",
    },
  ];

  return (
    <footer className={styles.container}>
      <div className={styles.left}>
        <m.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.1 },
          }}
          viewport={{ once: true }}
        >
          Contact
        </m.h1>
        <m.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          viewport={{ once: true }}
        >
          Feel free to reach out!
        </m.h2>
      </div>

      <ul className={styles.links}>
        {contactLinks.map((link, index) => (
          <m.li
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.5 + index * 0.2 },
            }}
            key={index}
            className={styles.link}
            viewport={{ once: true }}
          >
            <img src={link.icon} alt="" />
            <a href={link.href}>{link.text}</a>
          </m.li>
        ))}
      </ul>
    </footer>
  );
};

export default Contact;
