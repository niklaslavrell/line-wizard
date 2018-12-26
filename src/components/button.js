import React from 'react'
import PropTypes from 'prop-types'

import './button.css'

const Button = props => (
  <button
    type="button"
    onClick={props.onClick && props.onClick}
    className={!!props.active ? 'button active' : 'button'}
    disabled={!!props.disabled}
    style={Object.assign(
      {
        display: 'inherit',
        padding: '0.75rem',
        background: '#ffdd00',
        color: 'black',
        fontWeight: '700',
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
      },
      props.style && props.style
    )}
  >
    {props.children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default Button
