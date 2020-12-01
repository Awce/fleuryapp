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
            <div className="w-full">
              <div className="ml-3 inline-flex rounded-md shadow">
                <input
                  className="form-input block px-5 py-3"
                  placeholder="Tu correo electronico"
                />
                <a
                  href="/"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-500 uppercase"
                >
                  Suscribete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newslatter
