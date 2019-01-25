import React from 'react'
import Img from 'gatsby-image'
import styles from './index.module.scss'

const About = (props) => (
    <div className={styles.about} id="about">
        <div className={styles.headshot}>
            <Img fluid={props.data.headshotImage.childImageSharp.fluid} alt="Kelli Blalock" />
        </div>
        <div className={styles.myInfo}>
            <h2>About</h2>
            <p> Hi, I'm Kelli! I love developing web apps with JavaScript and Python. I’m also an 
                experienced IT professional with a BS degree in Computer Information Systems
                and I enjoy learning new things. Besides coding, I love writing and sharing what 
                I've learned with others, so expect to see some blog posts from me soon.</p>
        </div>
    </div>
 )

export default About