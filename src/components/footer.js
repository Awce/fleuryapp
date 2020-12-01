import React from "react"
import { Link } from "gatsby"

function Footer() {
  return (
    <footer
      style={{
        background: `#2F907C`,
        color: `white`,
      }}
    >
      <div className="py-2">
        <h1 className="font-Nerko text-center text-3xl">
          Interpretando sentimientos
        </h1>
      </div>
      <div class="grid grid-cols-4 gap-4 py-2 text-center">
        <div>
          <h1>Contactanos</h1>
          <hr />
        </div>
        <div>
          <h1>Servicios</h1>
          <hr />
        </div>
        <div>
          <h1>Información</h1>
          <hr />
        </div>
        <div>9</div>
      </div>
      © {new Date().getFullYear()}
      <Link to="/"> Fleury by Camberos</Link>
    </footer>
  )
}

export default Footer
