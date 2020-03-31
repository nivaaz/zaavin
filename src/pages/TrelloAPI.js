import React from "react"
import Layout from "../components/layout/layout"
import PrimaryButton from "../components/primary_button/PrimaryButton"
import ProjectPage from "../components/project_page/ProjectPage"

import SEO from "../components/seo"
import { Link } from "gatsby"

const trelloAPI = () => (
  <Layout>
    <SEO title="TrelloPop" />
    <ProjectPage
    title = "TrelloPop"
    />

    <div>
      <Link to="www.google.com"> Learn about how I create the app</Link>
    </div>
    
  </Layout>
)

export default trelloAPI
