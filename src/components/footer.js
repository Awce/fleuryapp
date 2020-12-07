import React from "react"
import { Link } from "gatsby"
import SocialW from "./socialw"

function Footer() {
  return (
    <footer
      style={{
        background: `#2F907C`,
        color: `white`,
      }}
    >
      <div className="m-8">
        <h1 className="text-center text-3xl">Interpretando sentimientos</h1>
      </div>
      <div class="grid grid-cols-4 gap-4 py-2 ">
        <div>
          <h1>Contactanos</h1>
          <hr className="w-24" />
          <div>
            <h3>CDMX</h3>
            <div className="flex flex-row">
              <svg
                t="1607013709486"
                className="icon fill-current"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4498"
                width="20"
                height="20"
              >
                <path
                  d="M704 0H320a96 96 0 0 0-96 96v832a96 96 0 0 0 96 96h384a96 96 0 0 0 96-96V96a96 96 0 0 0-96-96z m32 928a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h384a32 32 0 0 1 32 32z m-224-128a64 64 0 1 0 64 64 64 64 0 0 0-64-64z m64-704h-128a32 32 0 0 0 0 64h128a32 32 0 0 0 0-64z"
                  p-id="4499"
                ></path>
              </svg>
              <p> Tel. 6461844756</p>
            </div>
          </div>
          <div>
            <h3>VERACRUZ</h3>
            <div className="flex flex-row">
              <svg
                t="1607013709486"
                className="icon fill-current"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4498"
                width="20"
                height="20"
              >
                <path
                  d="M704 0H320a96 96 0 0 0-96 96v832a96 96 0 0 0 96 96h384a96 96 0 0 0 96-96V96a96 96 0 0 0-96-96z m32 928a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h384a32 32 0 0 1 32 32z m-224-128a64 64 0 1 0 64 64 64 64 0 0 0-64-64z m64-704h-128a32 32 0 0 0 0 64h128a32 32 0 0 0 0-64z"
                  p-id="4499"
                ></path>
              </svg>
              <p>Tel. 2291189786</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row">
              <svg
                t="1607014075583"
                className="icon fill-current"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5275"
                width="20"
                height="20"
              >
                <path
                  d="M858.656 192 165.344 192C109.472 192 64 237.44 64 293.312l0 469.376C64 818.56 109.472 864 165.344 864l693.312 0C914.528 864 960 818.56 960 762.688L960 293.312C960 237.44 914.528 192 858.656 192zM858.656 800 165.344 800C144.736 800 128 783.264 128 762.688L128 293.312C128 272.736 144.736 256 165.344 256l684.544 0-307.488 279.808c-14.592 14.56-38.272 14.528-54.752-1.792l-244.256-206.752C229.856 315.84 209.664 317.504 198.272 331.008c-11.424 13.472-9.76 33.664 3.744 45.088l242.304 204.96c19.904 19.904 46.048 29.792 72.032 29.792 25.632 0 51.136-9.632 70.176-28.736L896 300.544l0 462.144C896 783.264 879.264 800 858.656 800z"
                  p-id="5276"
                ></path>
              </svg>
              <h3>hola@fleury.com.mx</h3>
            </div>
          </div>
        </div>
        <div>
          <h1>Servicios</h1>
          <hr className="w-24" />
          <div>
            <p>Formas de pago</p>
            <p>Costos de envio</p>
            <p>Condiciones de entrega</p>
          </div>
        </div>
        <div>
          <h1>Información</h1>
          <hr className="w-24" />
          <div>
            <p>Aviso de privacidad</p>
            <p>Terminos y condiciones</p>
            <p>Preguntas frecuentes</p>
            <p>Mi pediddo</p>
          </div>
        </div>
        <div>
          <SocialW />
        </div>
      </div>
      © {new Date().getFullYear()}
      <Link to="/"> Fleury by Camberos</Link>
    </footer>
  )
}

export default Footer
