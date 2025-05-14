import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"; 

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm NIKIL KUMAR K S</h1>
            <p className={styles.description}>
                I'm an aspiring Frontend Developer with practical experience 
                in HTML, CSS, JavaScript, and React. I enjoy building responsive,
                 user-friendly interfaces and continuously learning new technologies. 
                 Currently seeking internship opportunities to grow my skills and 
                 contribute to real-world projects.
            </p>
            <a href="mailto:nikilkumark.s19601@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("me.jpg")} alt="UserImg" className={styles.heroImg} />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}