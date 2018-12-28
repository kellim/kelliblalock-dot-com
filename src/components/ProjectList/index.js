import React from 'react'
import Img from 'gatsby-image'
import styles from './index.module.scss'

const projectData = require('../../data/project-data.json')

const Project = (props) => (
    <li><h3>{props.name}</h3>
      <a href={props.gitHubLink}><Img fluid={props.image.childImageSharp.fluid} alt={props.name} /></a>
      <p>{props.description}</p>
      <div><a href={props.gitHubLink}>GitHub</a> | <a href={props.demoLink}>Demo</a></div>
    </li>
  )

const ProjectList = (props ) => (
    <div>
        <ul>
            {projectData.map((project) =>
                <Project 
                    key={project.name}
                    name={project.name}
                    image={props.data[project.image]}
                    description={project.description}
                    gitHubLink={project.gitHubLink}
                    demoLink={project.demoLink}
                />
            )}
        </ul>
    </div>
  )

export default ProjectList
  
  
