import React from "react"
import ImageWomen from "./imagewomen"

function Newslatter() {
  return (
    <div className="h-auto swiper-container bg-gray-100 text-center justify-between ">
      <div className="grid grid-cols-2 gap-2 align-middle">
        <div>
          <div className="grid grid-cols-2 gap-2 align-middle items-center">
            <div
              style={{
                maxWidth: `200px`,
                marginBottom: `1.45rem`,
                paddingLeft: `3rem`,
              }}
            >
              <ImageWomen />
            </div>
            <div>
              <h1 className="uppercase font-black">
                ¡Obten un 15% descuento en tu primer compra!
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 align-middle items-center">
          <div>
            <h1 className="uppercase font-black">Suscribete y recibe</h1>
            <h2 className="uppercase">nuestras promociones</h2>
          </div>
          <div>
            <form>
              <input
                class="border py-2 px-4 border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Introduce tu correo"
              />
              <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
                Suscribete
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newslatter
