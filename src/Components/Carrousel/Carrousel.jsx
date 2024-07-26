import React, { useState } from "react"
import "./carrousel.scss"
import data from "../../../logements.json"

function Carrousel(props) {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imgArray.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imgArray.length - 1
      return index - 1
    })
  }

  return <div className="carrousel"></div>
}

export default Carrousel
