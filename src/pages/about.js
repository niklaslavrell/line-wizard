import React from 'react'
import { Link } from 'gatsby'

import Button from '../components/button'
import Emoji from '../components/emoji'
import Layout from '../components/layout'
import niklasAndHanna from '../images/niklas-and-hanna.jpg'

const AboutPage = () => (
  <Layout title="About">
    <h1>About</h1>
    <p>
      <strong>
        <Emoji symbol="👋" />
        Hi
      </strong>
      <br />
      We are a nomad couple travelling and building products we hope people will
      love <Emoji symbol="💚" />
    </p>
    <img src={niklasAndHanna} alt="Niklas and Hanna" />
    <p>
      You can find us at <a href="https://www.lavrell.se">Niklas website</a> and{' '}
      <a href="https://www.hannasoderquist.se">Hannas website</a>. Here are some
      other products that we are making at the moment:
    </p>
    <p>
      <Emoji symbol="💁‍" />{' '}
      <a href="https://www.letsborrowit.com">
        <strong>Let's Borrowit</strong>
      </a>{' '}
      - make people consume less and borrow more
    </p>
    <p>
      <Emoji symbol="🏡" />{' '}
      <a href="https://www.botillsammans.nu">
        <strong>Bo Tillsammans</strong>
      </a>{' '}
      - find roommates, live together
    </p>
    <p>
      <Emoji symbol="🤖" />{' '}
      <a href="https://www.chekr.app">
        <strong>Chekr</strong>
      </a>{' '}
      - bot that watch our stocks, so we can spend time on other stuff
    </p>
    <p>
      <Emoji symbol="🚀" />{' '}
      <a href="https://www.swedishtechmakers.com">
        <strong>Swedish Tech Makers</strong>
      </a>{' '}
      - community with people that want to ship
    </p>
    <p>
      <Emoji symbol="🌱" />{' '}
      <a href="https://www.thehappylist.io">
        <strong>The Happy List</strong>
      </a>{' '}
      - articles and talks that helps us grow
    </p>
    <Link to="/">
      <Button>Cool, back to the Line Wizard</Button>
    </Link>
  </Layout>
)

export default AboutPage
