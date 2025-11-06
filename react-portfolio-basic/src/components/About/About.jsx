import React from "react";

import { getImageUrl } from '../../utils';

import styles from "./About.module.css"

 const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImg.png")} alt="about"className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" className={styles.aboutImageText}/>
                <div className={styles.aboutItemText}>
                    <h3>Front-end Developer</h3>
                    <p>
                        I'm a frontend developer with experience in building and optimizing sites
                    </p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="server" className={styles.aboutImageText}/>
                <div className={styles.aboutItemText}>
                    <h3>Front-end Developer</h3>
                        <p>
                            I'm a frontend developer with experience in building and optimizing sites
                        </p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="ui" className={styles.aboutImageText}/>
                <div className={styles.aboutItemText}>

                    <h3>Front-end Developer</h3>
                        <p>
                            I'm a frontend developer with experience in building and optimizing sites
                        </p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}

export default About
