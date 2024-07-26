import React from "react"
import "./card.scss"

function Card(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <img src={props.image} />
    </div>
  )
}

export default Card
