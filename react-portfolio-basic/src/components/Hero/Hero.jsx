import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>
            Hi,
            I'm Balasubramaniam <br/></h1>
        <p className={styles.description}> I'm a <b>Final-year graduate</b> and<br/>A <b>Full-Stack Developer </b>eager to work, learn, and grow through real-world projects.
            Enjoys solving problems and improving with every challenge.
            Open to feedback and quick to adapt in new environments.
            Actively building and refining skills through consistent practice.
            Looking for opportunities to contribute and collaborate
        </p>
        <a href="mailto:balasubramaniam.n83@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/hero.png")} alt="hero img of me" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
}

export default Hero
