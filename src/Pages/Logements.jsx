import React from "react"
import { useParams } from "react-router-dom"
import data from "../../logements.json"
import Carrousel from "../Components/Carrousel/Carrousel"
import "./logements.scss"
import Tag from "../Components/Tags/Tag"
import star from "../assets/star.png"
import graystar from "../assets/graystar.png"
function Logements() {
  let { id } = useParams()
  let currentLogement = data.find((data) => data.id === id)

  let grayStars = 5 - currentLogement.rating

  const starDivs = Array.from(
    { length: currentLogement.rating },
    (_, index) => <img src={star} key={index} />
  )

  const grayStarDivs = Array.from({ length: grayStars }, (_, index) => (
    <img src={graystar} key={index + 4} />
  ))

  return (
    <div className="logement-container">
      <Carrousel />
      <div className="descriptions">
        <div className="left-container">
          <h3>{currentLogement.title}</h3>
          <p>{currentLogement.location}</p>
          <div className="tags">
            {currentLogement.tags.map((logementTag) => (
              <Tag key={logementTag} tagName={logementTag} />
            ))}
          </div>
        </div>
        <div className="right-container">
          <h4>
            {currentLogement.host.name}
            <img src={currentLogement.host.picture} />
          </h4>
          <div className="stars">
            {starDivs} {grayStarDivs}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logements
