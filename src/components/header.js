import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import wizard from '../images/wizard-fade-100.gif'

const Header = ({ siteTitle }) => (
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
        textAlign: 'center',
        letterSpacing: '0.25rem',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '2em' }}>
        <Link
          to="/"
          title={siteTitle}
          style={{
            color: 'white',
            textDecoration: 'none',
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: '1.9rem',
          }}
        >
          {siteTitle}
        </Link>
        <img
          src={wizard}
          title="A wizard"
          alt="A wizard"
          style={{
            display: 'inline',
            marginBottom: '0',
            verticalAlign: 'bottom',
            width: '2.28rem',
          }}
        />
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
