import React, { useState } from "react";
import styles from "./Navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.navBar}>
      <a className={styles.portfolioBtn} href="#">
        ZenDevvv
      </a>
      
      <div className={styles.menuItems}>
        <img
          onClick={() => setShowMenu(!showMenu)}
          src={showMenu ? closeIcon : menuIcon}
          alt="Menu icon"
        />

        <ul
        onClick={() => setShowMenu(false)}
          className={`${styles.links} ${
            showMenu && styles.showMenu
          }`}
        >
          <li className={styles.link}>
            <a href="#about">About</a>
          </li>
          <li className={styles.link}>
            <a href="#skills">Skills</a>
          </li>
          <li className={styles.link}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.link}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
