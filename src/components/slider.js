import React from "react"
import Slide from "./slide"

function Slider() {
  return (
    <section>
      <div className="my-4 swiper-container">
        <div classname=" headin-container absolute flex justify-center items-center w-full h-4">
          <div>
            <Slide />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
