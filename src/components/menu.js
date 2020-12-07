import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div className="flex space-x-4 w-full items-center text-center text-green-600 uppercase">
      <div className="flex-1">
        <Link to="/nosotros">Nosotros</Link>
      </div>
      <div className="flex-1">
        <Link to="/flores">Flores</Link>
      </div>
      <div className="flex-1">
        <Link to="/ocaciones">Ocaciones</Link>
      </div>
      <div className="flex-1">
        <Link to="/arreglos">Arreglos</Link>
      </div>
    </div>
  )
}

export default Menu
