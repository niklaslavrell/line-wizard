import React from 'react'
import PropTypes from 'prop-types'

const WAVE_PATH =
  'M0,0L0,32C96,43,192,53,288,58.7C384,64,480,64,576,56C672,48,768,32,864,32C960,32,1056,48,1152,53.3C1248,59,1344,53,1392,50.7L1440,48L1440,0Z'

/**
 * A wavy divider used to replace the straight edge between the purple
 * header/footer bars and the page content. Flip it to cap the footer.
 */
const Wave = ({ flip }) => (
  <svg
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
    aria-hidden="true"
    style={{
      display: 'block',
      width: '100%',
      height: 'clamp(1rem, 4vw, 3rem)',
      transform: flip ? 'scaleY(-1)' : 'none',
      marginTop: flip ? '0' : '-1px',
      marginBottom: flip ? '-1px' : '0',
    }}
  >
    <path fill="#8821AC" d={WAVE_PATH} />
  </svg>
)

Wave.propTypes = {
  flip: PropTypes.bool,
}

Wave.defaultProps = {
  flip: false,
}

export default Wave
