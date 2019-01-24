import React from 'react'
import SocialIcons from '../SocialIcons'
import styles from './index.module.scss'

const Footer = (props) => (
    <div className={styles.footer}>
        <div className={styles.links}>
            <a href="#home">Home</a>
            <a href="#about-section">About</a>
            <a href="#projects-section">Projects</a>
            {/*  */}
        </div>
        <p>Site created by Kelli Blalock using Gatsby/React</p>
        <p>Check out <a href="https://github.com/kellim/kelliblalock-dot-com">the code for this site</a>.</p>
        <SocialIcons />
    </div>
 )

export default Footer