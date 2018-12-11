import React from 'react'
import { Link } from 'gatsby'

import Button from '../components/button'
import Emoji from '../components/emoji'
import Layout from '../components/layout'

const HelpPage = () => (
  <Layout>
    <h1>Help</h1>
    <p>
      <strong>
        1. <Emoji symbol="📸" />
      </strong>{' '}
      Write your caption as you want it to look like in the Instagram app.
    </p>
    <p>
      <strong>
        2. <Emoji symbol="✂️" />
      </strong>{' '}
      Cut the entire caption and paste into the wizard text field.
    </p>
    <p>
      <strong>
        3. <Emoji symbol="🧙‍" />
      </strong>{' '}
      Press the copy button to copy the text with magic line breaks.
    </p>
    <p>
      <strong>
        4. <Emoji symbol="📝" />
      </strong>{' '}
      Paste your new magical text with line breaks into the Instagram app.
    </p>
    <p>
      <strong>
        5. <Emoji symbol="🎉" />
      </strong>{' '}
      Publish your Instagram photo with clean wizard line breaks!
    </p>
    <Link to="/">
      <Button>Okay, let's give it a try</Button>
    </Link>
  </Layout>
)

export default HelpPage
