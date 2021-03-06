import React from "react"
import Layout from "../components/layout/layout"
import Welcome from "../components/Welcome/Welcome"
import Convo from "../components/Convo/Convo.js"
import SEO from "../components/seo"
import { faFigma, faLinkedin,  faGithub,faInstagram, faMedium, faCodepen, faTwitter, faDribbble} from '@fortawesome/free-brands-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab, faFigma, faLinkedin,  faGithub, faMedium, faCodepen, faInstagram, faDribbble, faTwitter);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <Convo/>
  </Layout>
)
export default IndexPage
