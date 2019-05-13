import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
      <SEO title="Page two" />
      <Link to="/">Go back to the homepage</Link>
      <h1>This is the About page</h1>
      <p>Welcome to about ....</p>
    </Layout>
  )

  export default AboutPage