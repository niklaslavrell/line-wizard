import React from 'react'
import PropTypes from 'prop-types'

import './button.css'

const Button = props => (
  <button
    type="button"
    onClick={props.onClick && props.onClick}
    className="button"
    style={{
      padding: '0.75rem 2rem',
      background: '#ffdd00',
      color: 'black',
      fontWeight: '600',
      width: '100%',
      maxWidth: '500px',
      borderRadius: '2rem',
      textTransform: 'uppercase',
      border: '0rem',
      boxShadow: '0px 2px 2px lightgray',
      letterSpacing: '0.075rem',
      fontSize: '1.1rem',
      marginBottom: '1rem',
      cursor: 'pointer',
    }}
  >
    {props.children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default Button
