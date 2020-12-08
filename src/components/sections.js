import React from "react"
import { Link } from "gatsby"

import ImageFlowers from "./imageflowers"
import ImageOccacions from "./imageoccacions"
import ImageFloral from "./imagefloral"

function Sections() {
  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap4 items-center">
        <div>
          <hr />
        </div>
        <div>
          <h1 className="text-green-700 text-2xl">
            ¡Elige el mejor para cada ocasión!
          </h1>
        </div>
        <div>
          <hr />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 align-middle items-center uppercase">
        <div className="m-8">
          <Link to="/flores">
            <ImageFlowers />
            <p>Flores</p>
          </Link>
        </div>

        <div className="m-8">
          <Link to="/ocaciones">
            <ImageOccacions />
            <p>Ocaciones</p>
          </Link>
        </div>
        <div className="m-8">
          <Link to="/arreglos">
            <ImageFloral />
            <p>Arreglos</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sections
