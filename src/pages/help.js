import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Button from '../components/button'
import Emoji from '../components/emoji'
import Layout from '../components/layout'

const HelpPage = () => (
  <Layout title="Help">
    <h1>Help</h1>
    <h2>How do I get clean line breaks?</h2>
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
    <h2>I want more</h2>
    <p>
      <strong>
        1. <Emoji symbol="🏎" />
      </strong>{' '}
      Using Google Chrome? The paste instruction will become a button that will
      paste and copy your caption immediately.
    </p>
    <p>
      <strong>
        2. <Emoji symbol="🏖" />
      </strong>{' '}
      Line Wizard works like a native application, add it to the homescreen and
      it will work offline!
    </p>
    <p>
      <strong>
        3. <Emoji symbol="🧙‍" />
      </strong>{' '}
      Tag{' '}
      <OutboundLink
        href="https://www.instagram.com/linewizardclub"
        title="Line Wizard on Instagram"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#000000b3',
        }}
      >
        <strong>@linewizardclub</strong>
      </OutboundLink>{' '}
      on your caption and the wizard will like you and your post.
    </p>
    <Link to="/">
      <Button>Okay, let's try it</Button>
    </Link>
  </Layout>
)

export default HelpPage
