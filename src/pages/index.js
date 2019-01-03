import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/main'
import About from '../components/about'
import ProjectList from '../components/ProjectList'

import { checkPropTypes } from 'prop-types';


const IndexPage = (props) => (
  <Layout>
    <SEO title="Kelli Blalock" keywords={['seattle software engineer', 'seattle web developer', 'bellevue web developer', 'javascript developer', 'web developer portfolio']} />
    <div>
      <Main />
      <About data={props.data} />
      <ProjectList data={props.data}/>
    </div>
  </Layout>
)

export default IndexPage

export const projectImage = graphql`
  fragment projectImage on File {
    childImageSharp {
      fluid(maxHeight: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    headshotImage: file(relativePath: { eq: "kelli.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project1: file(relativePath: { eq: "project1.jpg" }) {
      ...projectImage
    }
    project2: file(relativePath: { eq: "project2.jpg" }) {
      ...projectImage
    }
    project3: file(relativePath: { eq: "project3.jpg" }) {
      ...projectImage
    }
    project4: file(relativePath: { eq: "project4.jpg" }) {
      ...projectImage
    }
  }
`
