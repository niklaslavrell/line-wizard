import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import './coffee.css'

const Coffee = () => (
  <React.Fragment>
    <span
      style={{
        marginBottom: '0.5rem',
      }}
    >
      Like it? Please support us to keep it updated{' '}
      <span
        role="img"
        aria-label="Praying hands"
        aria-hidden="false"
        style={{ marginLeft: '0.1rem' }}
      >
        🙏
      </span>
    </span>
    <OutboundLink
      href="https://www.buymeacoffee.com/hannaniklas"
      target="_blank"
      rel="noopener noreferrer"
      className="bmc-button"
    >
      <img
        src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
        alt="Buy us a coffee"
      />
      <span style={{ marginLeft: '5px' }}>Buy us a coffee</span>
    </OutboundLink>
  </React.Fragment>
)

export default Coffee
