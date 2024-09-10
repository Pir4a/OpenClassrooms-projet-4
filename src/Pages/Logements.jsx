import React from "react"
import { Navigate, useParams } from "react-router-dom"
import data from "../../logements.json"
import Carrousel from "../Components/Carrousel/Carrousel"
import "./logements.scss"
import Tag from "../Components/Tags/Tag"
import star from "../assets/star.png"
import graystar from "../assets/graystar.png"
import Collapse from "../Components/Collapse/Collapse"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Logements() {
  let { id } = useParams()
  let currentLogement = data.find((data) => data.id === id)

  let navigate = useNavigate()

  useEffect(() => {
    if (currentLogement == undefined) {
      navigate("/404")
    }
  }, [])

  if (currentLogement == undefined) return

  let splitName = currentLogement.host.name.split(" ")

  let grayStars = 5 - currentLogement.rating

  const starDivs = Array.from(
    { length: currentLogement.rating },
    (_, index) => <img src={star} key={index} alt="star" />
  )

  const grayStarDivs = Array.from({ length: grayStars }, (_, index) => (
    <img src={graystar} key={index + 4} alt="grey star" />
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
            {splitName[0]} <br />
            {splitName[1]}
            <img
              src={currentLogement.host.picture}
              alt={currentLogement.title}
            />
          </h4>
          <div className="stars">
            {starDivs} {grayStarDivs}
          </div>
        </div>
      </div>
      <div className="collapses-container">
        <Collapse
          collapseName="Description"
          collapseContent={<li>{currentLogement.description}</li>}
        />
        <Collapse
          collapseName="Equipements"
          collapseContent={currentLogement.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        />
      </div>
    </div>
  )
}

export default Logements
