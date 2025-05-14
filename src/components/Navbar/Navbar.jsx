import React,{useState} from "react";
import Styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils"

export const Navbar = () =>{
    const[menuOpen, setMenuOpen] = useState(false);
    return(
     <nav className={Styles.navbar}>
        <a className={Styles.title} href="/">Portfolio</a>
        <div className={Styles.menu}>
            <img  className={Styles.menuBtn} src={menuOpen ? getImageUrl("closeIcon.png") : getImageUrl("menuIcon.png")} alt="menu-button" onClick={() => setMenuOpen(! menuOpen)} />
            <ul className={`${Styles.menuItems} ${menuOpen && Styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
               <li><a href="#experience">Skills</a></li>
               <li><a href="#projects">Projects</a></li>
               <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    );
}