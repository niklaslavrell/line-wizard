import React from 'react'

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
        margin: '0 auto',
        maxWidth: 960,
        padding: '0.5rem',
        color: 'white',
        textAlign: 'center',
      }}
    >
      Made for you by{' '}
      <a
        href="https://www.instagram.com/testinproduction"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <strong>@testinproduction</strong>
      </a>
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
