import React from 'react'
import { Link } from 'gatsby'

import Emoji from '../components/emoji'
import Layout from '../components/layout'

const HelpPage = () => (
  <Layout>
    <h1>Help</h1>
    <p>
      <strong>
        1. <Emoji symbol="📸" />
      </strong>{' '}
      Write your Instagram caption as usual in the Instagram app.
    </p>
    <p>
      <strong>
        2. <Emoji symbol="📝" />
      </strong>{' '}
      Cut the entire caption into the text box.
    </p>
    <p>
      <strong>
        3. <Emoji symbol="🧙‍" />
      </strong>{' '}
      Press the big yellow button to copy the text with magic line breaks.
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
      <strong>Try it out now</strong>
    </Link>
  </Layout>
)

export default HelpPage
