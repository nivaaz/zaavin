import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Welcome from "../components/Welcome/Welcome"
import SocialLinks from "../components/social_links/SocialLinks"
import SEO from "../components/seo"
import { faFigma, faLinkedin,  faGithub,faInstagram, faMedium, faCodepen} from '@fortawesome/free-brands-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab, faFigma, faLinkedin,  faGithub, faMedium, faCodepen, faInstagram);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <Link to="/Projects/"> Projects </Link>
    <Link to="/TrelloAPI/"> Trello Pop </Link>
    <Link to="/Canvamily/"> Canvamily </Link>
    <SocialLinks/>
  </Layout>
)

export default IndexPage
