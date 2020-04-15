import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.css"
import SocialLinks from "../social_links/SocialLinks"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1 className="headerText">
      <Link to="/" className="headerText">
        {siteTitle}
      </Link>
      <SocialLinks/>
      <Link to="/Projects/"> Projects </Link>
      {/* <Link to="/Resume/"> Resume </Link> */}
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
