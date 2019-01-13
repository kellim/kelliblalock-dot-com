import React from 'react'
import Img from 'gatsby-image'
import styles from './index.module.scss'

const About = (props) => (
    <div className={styles.about}>
        <div>
            <Img fluid={props.data.headshotImage.childImageSharp.fluid} alt="Kelli Blalock" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra volutpat leo non vestibulum. Praesent pellentesque eros in porttitor consectetur. Sed eget condimentum quam, non egestas sem. Ut faucibus sollicitudin nulla sed porta. Cras elementum elit elit, sit amet suscipit urna volutpat in. Sed volutpat turpis ante, quis tristique ante vulputate et. Etiam consequat mi ac urna egestas sodales et eget mauris. </p>
    </div>
 )

export default About