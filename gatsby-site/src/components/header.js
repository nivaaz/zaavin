import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header/styles.css"

const Header = ({ siteTitle }) => (
  <header
  >
    <div >
      <h1 className={styles.header}>
        <Link
          to="/"
        >
          {/* {siteTitle} */}
          Nivaaz Sehmbhi
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
