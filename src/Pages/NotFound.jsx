import { Link } from "react-router-dom"
import React from "react"
import "./notfound.scss"

function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="accueil" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
export default NotFound
