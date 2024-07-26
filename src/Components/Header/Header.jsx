import React from "react"
import "./header.scss"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <div className="headercontainer">
        <img src={logo} alt="Kasa, location d'appartement logo" />
        <nav className="navbar">
          <a>
            <Link to="/">Accueil</Link>
          </a>

          <a>A Propos</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
