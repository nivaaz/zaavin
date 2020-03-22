import React from "react"
import AllApps from "../components/AllApps/AllApps"

// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Oh, you want to know about some of my projects?</h1>
    <h2> We'll here's a few you can check out</h2>
    
    <AllApps/>

  </Layout>
)

export default SecondPage
