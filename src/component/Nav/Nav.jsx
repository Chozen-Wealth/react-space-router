import "./Nav.css"
import logo from "../../../public/assets/shared/logo.svg"
import { Link } from "react-router-dom"
import { act, useState } from "react"

export default function Nav({active, setActive}) {

  return (
    <nav>
        <img src={logo} alt="" />
        <div className="navLigne"></div>
        <ul className="navMenu">
            <Link to="/" className={`link ${active === "home" ? "active" : ""}`}><li>00 HOME</li></Link>
            <Link to="/destination/0" className={`link ${active === "destination" ? "active" : ""}`}><li>01 DESTINATION</li></Link>
            <Link to="/crew" className={`link ${active === "crew" ? "active" : ""}`}><li>02 CREW</li></Link>
            <Link to="/technology" className={`link ${active === "technology" ? "active" : ""}`}><li>03 TECHNOLOGY</li></Link>
        </ul>
    </nav>
  )
}