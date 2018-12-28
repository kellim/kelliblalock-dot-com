import React from 'react'
import Img from 'gatsby-image'
import styles from './index.module.scss'

const About = (props) => (
    <div>
        <p>I am a web developer. I am a web developer. I am a web developer. I am a web developer. </p>
        <Img fluid={props.data.headshotImage.childImageSharp.fluid} alt="Kelli Blalock" />
    </div>
 )

export default About
