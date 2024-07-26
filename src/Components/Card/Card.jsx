import React from "react"
import "./card.scss"
import { Link } from "react-router-dom"

function Card(props) {
  return (
    <Link to={`/logements/${props.id}`} className="gallery_card">
      <div className="card">
        <h3>{props.title}</h3>
        <img src={props.image} />
      </div>
    </Link>
  )
}

export default Card
