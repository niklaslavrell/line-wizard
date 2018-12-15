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
        padding: '0.5rem',
        paddingBottom: '0rem',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Link
        to="/about"
        style={{
          color: 'white',
          marginRight: '0.5rem',
        }}
      >
        <strong>About</strong>
      </Link>
      {'|'}
      <Link
        to="/help"
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
        maxWidth: 960,
        padding: '0.5rem',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <OutboundLink
        href="https://www.instagram.com/linewizardclub"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <strong>@linewizardclub</strong>
      </OutboundLink>{' '}
      is made for you by{' '}
      <OutboundLink
        href="https://www.instagram.com/testinproduction"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <strong>@testinproduction</strong>
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
