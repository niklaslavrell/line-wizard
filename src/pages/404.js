import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <h1>Woops!</h1>
    <p>You are on an unknown wizard page.</p>
    <Link to="/">Go back home</Link>
  </Layout>
)

export default NotFoundPage
