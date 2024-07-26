import React, { useState } from "react"
import "./carrousel.scss"
import data from "../../../logements.json"
import { useParams } from "react-router-dom"
import vector from "../../assets/Vector.png"
import vector2 from "../../assets/Vector2.png"

function Carrousel() {
  const [imageIndex, setImageIndex] = useState(0)

  let { id } = useParams()
  let currentLogement = data.find((data) => data.id === id)

  function showNextImage() {
    setImageIndex((index) => {
      if (index === currentLogement.pictures.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return currentLogement.pictures.length - 1
      return index - 1
    })
  }

  return (
    <div className="carrousel">
      {currentLogement.pictures.length > 1 ? (
        <>
          {" "}
          <img className="vector" src={vector} onClick={showPrevImage} />{" "}
          <img className="vector-two" src={vector2} onClick={showNextImage} />{" "}
          <span className="imgcount">
            {" "}
            {imageIndex + 1}/{currentLogement.pictures.length}
          </span>
        </>
      ) : (
        ""
      )}

      {currentLogement.pictures.map((logement) => (
        <img
          src={logement}
          key={logement}
          style={{ translate: `${-100 * imageIndex}%` }}
        />
      ))}
    </div>
  )
}

export default Carrousel
