import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/Main'
import About from '../components/About'
import ProjectList from '../components/ProjectList'
import Contact from '../components/Contact'
import { checkPropTypes } from 'prop-types';


const IndexPage = (props) => (
  <Layout>
    <SEO title="Kelli Blalock" keywords={[`seattle software engineer`, `seattle web developer`, `bellevue web developer`, `javascript developer`, `web developer portfolio`]} />
    <div>
      <Main />
      <About data={props.data} />
      <ProjectList data={props.data}/>
      <Contact />
    </div>
  </Layout>
)

export default IndexPage

export const projectImage = graphql`
  fragment projectImage on File {
    childImageSharp {
      fluid(maxHeight: 600) {
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
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    project1: file(relativePath: { eq: "project1.png" }) {
      ...projectImage
    }
    project2: file(relativePath: { eq: "project2.png" }) {
      ...projectImage
    }
    project3: file(relativePath: { eq: "project3.png" }) {
      ...projectImage
    }
    project4: file(relativePath: { eq: "project4.png" }) {
      ...projectImage
    },
    project5: file(relativePath: { eq: "project5.png" }) {
      ...projectImage
    },
    project6: file(relativePath: { eq: "project6.png" }) {
      ...projectImage
    },
  }
`
