import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () =>{
    return(
    <section className={styles.container} id="about"> 
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        {/* <img src={getImageUrl("me.jpg")} alt="User" className={styles.aboutImg} /> */}
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("cursorIcon.png")} alt="cursorImg" />
                <div>
                    <h3>FrontEnd Developer</h3>
                    <p>
                       I'm intersted in creating responsive and user-friendly websites using HTML, CSS, JavaScript, and React. With a familarity with PHP and MySQL, I am also capable of building dynamic, database-driven websites and applications. I focus on delivering clean, maintainable code and seamless user experiences, ensuring both front-end and back-end components work together smoothly. My goal is to craft high-performance, engaging digital solutions that are both functional and visually appealing.
                    </p>
                </div>
            </li>
        </ul>
        </div>
    </section>    
    )
}