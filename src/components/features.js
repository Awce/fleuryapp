import React from "react"
import ImagePay from "./imagepay"
import ImageDelivery from "./imagedelivery"
import ImageVerify from "./imageVerify"

function componentName() {
  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap4 items-center">
        <div>
          <hr />
        </div>
        <div>
          <h1 className="text-green-700 text-3xl">Beneficios</h1>
        </div>
        <div>
          <hr />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4 align-middle pt-4">
          <div className="flex-auto ">
            <div className="h-24 w-24">
              <ImagePay />
            </div>
            <div>
              <p>DIVERSAS FORMAS DE PAGO</p>
            </div>
          </div>

          <div className="grid">
            <div className="h-24 w-36">
              <ImageDelivery />
            </div>
            <div>
              <p>ENTREGAS PUNTUALES</p>
            </div>
          </div>
          <div className="grid">
            <div className="h-24 w-24">
              {" "}
              <ImageVerify />
            </div>
            <div>
              <p>CONFIRMACION DE ENTREGAS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default componentName
