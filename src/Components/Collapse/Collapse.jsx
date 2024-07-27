import "./collapse.scss"
import flechebas from "../../assets/bas.png"
import flechehaut from "../../assets/haut.png"
import React, { useState } from "react"

function Collapse({ collapseName, collapseContent }) {
  const [isCollapsed, setCollapsed] = useState(false)

  return (
    <div className="collapse">
      <h3 onClick={() => setCollapsed(!isCollapsed)}>
        {collapseName}{" "}
        {isCollapsed ? (
          <img alt="fleche vers le haut" src={flechehaut} className="fleche" />
        ) : (
          <img alt="fleche vers le bas" src={flechebas} className="fleche" />
        )}
      </h3>
      <ul className={isCollapsed ? "collapse-list" : "hidden"}>
        {collapseContent}
      </ul>
    </div>
  )
}

export default Collapse
