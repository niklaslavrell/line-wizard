import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <p>The Line Wizard's spells makes new lines on Instagram posts.</p>
    <Link to="/">Try it out</Link>
  </Layout>
)

export default AboutPage
