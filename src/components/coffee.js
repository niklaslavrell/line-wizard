import React from 'react'
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
    <a
      className="bmc-button"
      target="_blank"
      href="https://www.buymeacoffee.com/hannaniklas"
      rel="noopener noreferrer"
    >
      <img
        src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
        alt="Buy us a coffee"
      />
      <span style={{ marginLeft: '5px' }}>Buy us a coffee</span>
    </a>
  </React.Fragment>
)

export default Coffee
