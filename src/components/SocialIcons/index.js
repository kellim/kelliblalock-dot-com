import React from 'react'
import Img from 'gatsby-image'
import styles from './index.module.scss'
import { IconContext } from "react-icons";
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaDev } from 'react-icons/fa'

const SocialIcons = ( {linkedIn, github, twitter, devTo} ) => (
  <div className={styles.socialIcons}>
  <ul>
    <li><a href="https://www.linkedin.com/in/kelliblalock/" aria-label="LinkedIn Profile"><FaLinkedinIn /></a></li>
    <li><a href="https://github.com/kellim" aria-label="GitHub Profile"><FaGithubAlt /></a></li>
    <li><a href="https://twitter.com/kellimb123" aria-label="Twitter Profile"><FaTwitter /></a></li>
    <li><a href="https://dev.to/kelli" aria-label="Dev.to Profile"><FaDev /></a></li>
  </ul>

  </div>
 )

export default SocialIcons
