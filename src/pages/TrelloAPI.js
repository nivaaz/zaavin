import React from "react"
import Layout from "../components/layout/layout"
// import ProjectPage from "../components/project_page/ProjectPage"
import SEO from "../components/seo"

const trelloAPI = () => (
  <Layout>
    <SEO title="Page two" />
    <h1> Trello pop </h1>
    <p>Some text about what this app does</p>
    <h3>Built with </h3>
    <p> Vue </p>

    <PrimaryButton text="Let's pop some cards" />

    <div>
      <Link to="www.google.com"> Learn about how I create the app</Link>
    </div>
  </Layout>
)

export default trelloAPI
