import React from "react"
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

      <div className="grid grid-cols-3 gap-4 align-middle uppercase">
        <div>
          <ImageFlowers />
          <p>Flores</p>
        </div>
        <div>
          <ImageOccacions />
          <p>Ocaciones</p>
        </div>
        <div>
          <ImageFloral />
          <p>Arreglos</p>
        </div>
      </div>
    </div>
  )
}

export default Sections
