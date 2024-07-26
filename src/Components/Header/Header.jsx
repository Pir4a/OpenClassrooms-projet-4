import React from "react"
import "./header.scss"
import logo from "../../assets/logo.png"

function Header() {
  return (
    <header>
      <div className="headercontainer">
        <img src={logo} alt="Kasa, location d'appartement logo" />
        <nav className="navbar">
          <a>Accueil</a>
          <a>A Propos</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
