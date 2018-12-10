import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import wizardicon192 from '../images/wizardicon192.png'
import wizardicon512 from '../images/wizardicon512.png'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: 'instagram, post, posts, new, line, break',
            },
            {
              property: 'og:title',
              content: `${data.site.siteMetadata.title}`,
            },
            {
              property: 'og:description',
              content: `${data.site.siteMetadata.description}`,
            },
            {
              property: 'og:url',
              content: `${data.site.siteMetadata.siteUrl}`,
            },
            {
              property: 'og:image',
              content: `${wizardicon512}`,
            },
            {
              property: 'og:image:type',
              content: 'image/png',
            },
            {
              property: 'og:image:width',
              content: "512",
            },
            {
              property: 'og:image:height',
              content: "512",
            },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${wizardicon192}` },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
          }}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
              flexGrow: 1,
            }}
          >
            {children}
          </div>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
