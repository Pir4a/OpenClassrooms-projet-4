import "./about.scss"
import montagnes from "../assets/montagne.png"
import React from "react"
import Collapse from "../Components/Collapse/Collapse"

function About() {
  return (
    <div className="about-container">
      <img className="bigimg" src={montagnes} />
      <Collapse
        collapseName="Fiabilité"
        collapseContent="Chez Kasa, la fiabilité est notre priorité. Nous sélectionnons soigneusement chaque logement pour garantir des séjours sans surprises. Avec des avis vérifiés et une assistance disponible 24/7, vous pouvez réserver en toute confiance et profiter de vacances parfaites."
      />
      <Collapse
        collapseName="Respect"
        collapseContent="Kasa s'engage à respecter ses clients et ses hôtes. Nous prônons la transparence, l'équité et la courtoisie dans toutes nos interactions, assurant ainsi des expériences agréables et harmonieuses pour tous."
      />
      <Collapse
        collapseName="Service"
        collapseContent="Notre service client exceptionnel est au cœur de l'expérience Kasa. Disponibles 24/7, nous répondons rapidement à vos besoins et questions, garantissant un séjour sans souci du début à la fin."
      />
      <Collapse
        collapseName="Sécurité"
        collapseContent="La sécurité de nos clients est essentielle chez Kasa. Chaque logement est rigoureusement vérifié pour répondre à des normes de sécurité strictes, vous offrant ainsi une tranquillité d'esprit totale pendant vos vacances."
      />
    </div>
  )
}

export default About
