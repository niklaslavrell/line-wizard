import React from 'react'

const Footer = () => (
  <div
    style={{
      background: '#8821AC',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem 1rem',
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
  </div>
)

export default Footer
