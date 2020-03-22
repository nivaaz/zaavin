import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Welcome from "../components/Welcome/Welcome"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
