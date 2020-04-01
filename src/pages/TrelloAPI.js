import React from "react"
import Layout from "../components/layout/layout"
import ProjectPage from "../components/project_page/ProjectPage"

import SEO from "../components/seo"

const trelloAPI = () => (
  <Layout>
    <SEO title="TrelloPop" />
    <ProjectPage
      title = "trelloapi"
    />
  </Layout>
)

export default trelloAPI
