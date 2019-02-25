import React from 'react'
import Img from 'gatsby-image'
import styles from './index.module.scss'

const About = (props) => (
    <div className={styles.about} id="about">
        <div className={styles.headshot}>
            <Img fluid={props.data.headshotImage.childImageSharp.fluid} alt="Kelli Blalock" fadeIn={false} />
        </div>
        <div className={styles.myInfo}>
            <h2>About</h2>
            <p> Hi, I'm Kelli! I love developing web apps with JavaScript and Python and come to web development
                from a background in IT. As far as education, I've got a BS degree in Computer Information Systems,
                and have continued web development and programming training at UW Professional & Continuing Education 
                and Udacity.</p><br/>

            <p>I also enjoy learning new things, writing, and sharing what I've learned with others. You can see some 
                of my writing at <a href="https://dev.to/kelli">dev.to/kelli</a> where I've started posting articles.</p>
        </div>
    </div>
 )

export default About