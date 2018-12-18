import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Coffee from '../components/coffee'

const Footer = () => (
  <div
    style={{
      background: '#8821AC',
      fontSize: '0.9rem',
    }}
  >
    <div
      style={{
        padding: '0.5rem 0.5rem 0rem',
        paddingBottom: '0rem',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Link
        to="/about/"
        title="About"
        style={{
          color: 'white',
          marginRight: '0.5rem',
        }}
      >
        <strong>About</strong>
      </Link>
      {'∙'}
      <Link
        to="/help/"
        title="Help"
        style={{
          color: 'white',
          marginLeft: '0.5rem',
        }}
      >
        <strong>Help</strong>
      </Link>
    </div>
    <div
      style={{
        margin: '0 auto',
        padding: '0.5rem 0.5rem 0rem',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <OutboundLink
        href="https://www.instagram.com/linewizardclub"
        title="Line Wizard on Instagram"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'white',
        }}
      >
        <strong>Give feedback @linewizardclub</strong>
      </OutboundLink>
    </div>
    <div
      style={{
        margin: '0 auto',
        padding: '0.5rem 0.5rem 0rem',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <OutboundLink
        href={
          'https://www.facebook.com/sharer/sharer.php?' +
          'u=https%3A%2F%2Flinewizard.club'
        }
        title="Share Line Wizard on Facebook"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'white',
          marginRight: '0.5rem',
        }}
      >
        <strong>Share on Facebook</strong>
      </OutboundLink>
      {'∙'}
      <OutboundLink
        href={
          'https://twitter.com/intent/tweet/?' +
          'text=Get%20clean%20line%20breaks%20on%20your%20Instagram%20posts' +
          '&url=https%3A%2F%2Fwww.linewizard.club' +
          '&hashtags=linewizard,cleaninstalinebreaks'
        }
        title="Share Line Wizard on Twitter"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'white',
          marginLeft: '0.5rem',
        }}
      >
        <strong>Share on Twitter</strong>
      </OutboundLink>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'white',
        marginBottom: '1rem',
      }}
    >
      <Coffee />
    </div>
  </div>
)

export default Footer
