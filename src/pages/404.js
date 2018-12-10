import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import Emoji from '../components/emoji'

const buttonText = 'Back to the Wizard'

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1>Woops!</h1>
      <p>
        No spells to be found here <Emoji symbol="🧐" />
      </p>
    </div>

    <Link to="/">
      <button
        type="button"
        className="home"
        style={{
          padding: '0.75rem',
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
          fontSize: '0.9rem',
          marginBottom: '1rem',
          cursor: 'pointer',
          textAlign: 'center',
        }}
      >
        {buttonText}
      </button>
    </Link>
  </Layout>
)

export default NotFoundPage
