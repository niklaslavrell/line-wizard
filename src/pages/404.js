import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import Button from '../components/button'
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
      <Button>{buttonText}</Button>
    </Link>
  </Layout>
)

export default NotFoundPage
