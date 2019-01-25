import React from 'react'
import SocialIcons from '../SocialIcons'
import styles from './index.module.scss'

const Footer = (props) => (
    <footer className={styles.footer}>
        <div className={styles.links}>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-section">About</a></li>
            <li><a href="#projects-section">Projects</a></li>
        </ul>          

        </div>
        <p>Site created by Kelli Blalock using Gatsby.</p>
        <p>Check out <a href="https://github.com/kellim/kelliblalock-dot-com">the code for this site</a>.</p>
        <SocialIcons />
    </footer>
 )

export default Footer