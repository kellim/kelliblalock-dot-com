import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/about'
import ProjectList from '../components/ProjectList'

import { checkPropTypes } from 'prop-types';

const IndexPage = (props) => (
  <Layout>
    <SEO title="Kelli Blalock" keywords={['seattle software engineer', 'seattle web developer', 'bellevue web developer', 'javascript developer', 'web developer portfolio']} />
    <h1>Kelli Blalock</h1>
    <div>
      <About data={props.data} />
      <ProjectList data={props.data}/>
    </div>
  </Layout>
)

export default IndexPage

export const squareImage = graphql`
  fragment portfolioImage on File {
    childImageSharp {
      fluid(maxWidth: 600, maxHeight: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  `

export const pageQuery = graphql`
  query {
    headshotImage: file(relativePath: { eq: "kelli.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    project1: file(relativePath: { eq: "project1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
      project2: file(relativePath: { eq: "project2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
