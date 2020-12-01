import React from "react"
import { Link } from "gatsby"

import Image from "./image"

function Navbar() {
  return (
    <div className="flex flex-row space-x-4 w-full h-24 md:h-full text-xl text-green-600">
      <div>
        <Link to="/">
          <Image />
        </Link>
      </div>
      <div>
        <Link to="/nosotros">Nosotros</Link>
      </div>

      <div>
        <Link to="/nosotros">Tienda</Link>
      </div>

      <div>
        <Link to="/nosotros">Promociones</Link>
      </div>

      <div>
        <Link to="/nosotros">Formas de pago</Link>
      </div>
    </div>
  )
}

export default Navbar
