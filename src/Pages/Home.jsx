import React from "react"
import Banner from "../Components/Banner/Banner"
import Card from "../Components/Card/Card"
import logement from "../../logements.json"
import "./home.scss"

function Home() {
  return (
    <>
      <main>
        <Banner />
        <div className="card-container">
          {logement.map((logement) => (
            <Card
              id={logement.id}
              title={logement.title}
              image={logement.cover}
              key={logement.title}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default Home
