import React from "react"
import { useParams } from "react-router-dom"
import data from "../../logements.json"
import Carrousel from "../Components/Carrousel/Carrousel"

function Logements() {
  let { id } = useParams()
  let currentLogement = data.find((data) => data.id === id)

  return (
    <div>
      <Carrousel props={currentLogement} />
      {console.log(currentLogement.pictures)}
    </div>
  )
}

export default Logements
