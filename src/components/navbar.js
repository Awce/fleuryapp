import React from "react"
import { Link } from "gatsby"

import Image from "./image"
import Menu from "./menu"
import CartNav from "./cart"

const Navbar = () => (
  <div className="grid-cols-3 md:grid-cols-6 gap-4 auto-cols-auto w-full h-full py-3">
    <ul className="flex items-center justify-around max-w-6xl mx-auto">
      <div className="px-6 flex-1" style={{ maxWidth: `150px` }}>
        <Link to="/">
          <Image />
        </Link>
      </div>
      <div className="px-6 flex-1">
        <Menu />
      </div>
      <div className="px-6 flex-1">
        <CartNav />
      </div>
    </ul>
  </div>
)

export default Navbar
