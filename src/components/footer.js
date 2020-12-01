import React from "react"
import { Link } from "gatsby"

function Footer() {
  return (
    <footer
      style={{
        background: `#2F907C`,
        marginTop: `2rem`,
        color: `white`,
      }}
    >
      © {new Date().getFullYear()}
      <Link to="/"> Fleury by Camberos</Link>
    </footer>
  )
}

export default Footer
