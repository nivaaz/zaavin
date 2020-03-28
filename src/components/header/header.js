import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1 className="headerText">
      <Link to="/" className="headerText">
        {/* {siteTitle} */}
        Nivaaz Sehmbhi
      </Link>
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
