import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Button from '../components/button'
import Emoji from '../components/emoji'
import Layout from '../components/layout'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const AboutPage = () => {
  const { niklasAndHannaImage } = useStaticQuery(graphql`
    query {
      niklasAndHannaImage: file(relativePath: { eq: "niklas-and-hanna.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 555) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout title="About">
      <h1>About</h1>
      <p>
        <strong>
          <Emoji symbol="👋" />
          Hi
        </strong>
        <br />
        We are a nomad couple travelling and building products we hope people
        will love <Emoji symbol="💚" />
      </p>
      <Img
        fluid={niklasAndHannaImage.childImageSharp.fluid}
        title="Niklas and Hanna"
        alt="Niklas and Hanna"
      />
      <p>
        You can find us at{' '}
        <OutboundLink href="https://www.lavrell.se">
          Niklas website
        </OutboundLink>{' '}
        and{' '}
        <OutboundLink href="https://www.hannasoderquist.se">
          Hannas website
        </OutboundLink>
        . Here are some other products that we are making at the moment:
      </p>
      <p>
        <Emoji symbol="📸" />{' '}
        <OutboundLink href="https://www.focolio.com">
          <strong>Focolio</strong>
        </OutboundLink>{' '}
        - find photographers
      </p>
      <p>
        <Emoji symbol="💁‍" />{' '}
        <OutboundLink href="https://www.letsborrowit.com">
          <strong>Let's Borrowit</strong>
        </OutboundLink>{' '}
        - make people consume less and borrow more
      </p>
      <p>
        <Emoji symbol="🏡" />{' '}
        <OutboundLink href="https://www.botillsammans.nu">
          <strong>Bo Tillsammans</strong>
        </OutboundLink>{' '}
        - find roommates, live together
      </p>
      <p>
        <Emoji symbol="🚀" />{' '}
        <OutboundLink href="https://www.swedishtechmakers.com">
          <strong>Swedish Tech Makers</strong>
        </OutboundLink>{' '}
        - community with people that want to ship
      </p>
      <p>
        <Emoji symbol="🤖" />{' '}
        <OutboundLink href="https://www.chekr.app">
          <strong>Chekr</strong>
        </OutboundLink>{' '}
        - bot that watch our stocks, so we can spend time on other stuff
      </p>
      <Link to="/">
        <Button>Cool, back to the Line Wizard</Button>
      </Link>
    </Layout>
  )
}

export default AboutPage
