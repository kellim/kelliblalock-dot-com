import React from 'react'
import Img from 'gatsby-image'
import styles from './index.module.scss'
import SocialIcons from '../SocialIcons'

const Main = (props) => (
  <div className={styles.main}>
    <h1>Kelli Blalock</h1>
    <h2>Web Developer based in the Seattle Area</h2>
    <SocialIcons />
  </div>
 )

export default Main
