import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import favIconWizard from '../images/wizard-purple-192.png'
import metaWizard512png from '../images/wizard-purple-512.png'
import metaWizard512gif from '../images/wizard-fade-purple-512.gif'
import 'typeface-source-sans-pro'

import Header from './header'
import Footer from './footer'

const Layout = ({ title, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            shortTitle
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
          title={title}
          titleTemplate={
            title === 'Line Wizard'
              ? `${data.site.siteMetadata.title}`
              : `%s | ${data.site.siteMetadata.title}`
          }
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
              name: 'image',
              content: `${metaWizard512png}`,
            },
            {
              property: 'og:title',
              content: `${data.site.siteMetadata.title}`,
            },
            {
              property: 'og:site_name',
              content: `${data.site.siteMetadata.shortTitle}`,
            },
            {
              property: 'og:description',
              content: `${data.site.siteMetadata.description}`,
            },
            {
              property: 'og:url',
              content: `${data.site.siteMetadata.siteUrl}`,
            },
            /* static png image */
            {
              property: 'og:image',
              content: `${data.site.siteMetadata.siteUrl}${metaWizard512png}`,
            },
            {
              property: 'og:image:type',
              content: 'image/png',
            },
            {
              property: 'og:image:width',
              content: '512',
            },
            {
              property: 'og:image:height',
              content: '512',
            },
            /* animated gif image */
            {
              property: 'og:image',
              content: `${data.site.siteMetadata.siteUrl}${metaWizard512gif}`,
            },
            {
              property: 'og:image:type',
              content: 'image/gif',
            },
            {
              property: 'og:image:width',
              content: '512',
            },
            {
              property: 'og:image:height',
              content: '512',
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'og:locale',
              content: 'en_US',
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:title',
              content: `${data.site.siteMetadata.title}`,
            },
            {
              name: 'twitter:description',
              content: `${data.site.siteMetadata.description}`,
            },
            {
              name: 'twitter:image',
              content: `${data.site.siteMetadata.siteUrl}${metaWizard512png}`,
            },
            {
              name: 'google-site-verification',
              content: 'KAONSdquRMnfjs7Fkd2LBbH9BSIayGycWajfH1QERvc',
            },
            {
              name: 'apple-mobile-web-app-status-bar-style',
              content: 'black-translucent',
            },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${favIconWizard}`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            position: 'relative', // make the white backdrop relative this div
          }}
        >
          <Header siteTitle={data.site.siteMetadata.shortTitle} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: '26rem',
              padding: '1.45rem 1.0875rem',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {children}
          </div>
          {/* the body should be purple to make the header nice in mobile */}
          {/* this is a div to make the background white again w/o hiding the wizard */}
          <div
            className="background"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              width: '100%',
              zIndex: -20,
            }}
          />
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
