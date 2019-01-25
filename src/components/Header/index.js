import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './index.module.scss'

const Header = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="#about">About</Link></li>
      <li><Link to="#contact">Contact</Link></li>
      <li><Link to="#projects">Projects</Link></li>
    </ul>
  </nav>
)

export default Header
