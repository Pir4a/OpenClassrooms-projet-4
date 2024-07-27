import React from "react"
import blacklogo from "../../assets/blaclogo.png"
import "./footer.scss"

function Footer() {
  return (
    <footer>
      <img src={blacklogo} alt="logo noir" />
      <p>@ 2020 Kasa, All rights reserved</p>
    </footer>
  )
}

export default Footer
