import React from "react"
import Layout from "../components/layout/layout"
import ProjectPage from "../components/project_page/ProjectPage"

import SEO from "../components/seo"

const canvamily = () => (
  <Layout>
    <SEO title="Canvamily" />
    <ProjectPage
      title = "canvamily"
    />
  </Layout>
)

export default canvamily
