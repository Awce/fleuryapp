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
              <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
              <button class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
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
