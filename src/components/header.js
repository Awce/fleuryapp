import PropTypes from "prop-types"
import React from "react"

import SocialNav from "./social"
import Navbar from "./navbar"

const Header = ({ siteTitle }) => (
  <header>
    <SocialNav />
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
