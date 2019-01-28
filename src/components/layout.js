import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
      <>
        <Header />
        <div className="container">
          {children}
        </div>
        <Footer />
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
