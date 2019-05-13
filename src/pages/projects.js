import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { projects } from "../../content/projects.js"

console.table(projects);

const ProjectsPage = () => (
    <Layout>
      <SEO title="Page two" />
      <Link to="/">Go back to the homepage</Link>
      <h1>This is the Projects page</h1>
      <p>Welcome to Projects </p>

    </Layout>
  )

  export default ProjectsPage