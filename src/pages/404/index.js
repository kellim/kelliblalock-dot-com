import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styles from './index.module.scss'

const NotFoundPage = () => (
  <div className={styles.notFoundPage}>
    <Layout>
      <SEO title="404: Not found" />
      <div className={styles.notFound}>
        <h1>PAGE NOT FOUND</h1>
        <p>Sorry, there's nothing to see here!</p>
        <Link to="/">Go To Homepage</Link>
      </div>
    </Layout>
  </div>
)

export default NotFoundPage
