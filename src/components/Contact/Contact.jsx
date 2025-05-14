import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a href="mailto:nikilkumark.s19601@gmail.com" target="_blank">nikilkumark.s19601@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("linkdinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nikil-kumar-k-s-90434a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">linkedin.com/nikilkumarks</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("guthubIcon.png")} alt="Github icon" />
          <a href="https://github.com/nikilkumarks" target="_blank">github.com/nikilkumarks</a>
        </li>
      </ul>
    </footer>
  );
};