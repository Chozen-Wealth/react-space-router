import "./Nav.css"
import logo from "../../../public/assets/shared/logo.svg"
import { Link } from "react-router-dom"
import { act, useState } from "react"
import burger from "../../../public/assets/shared/icon-hamburger.svg"
import burgerClose from "../../../public/assets/shared/icon-close.svg"

export default function Nav({active, setActive}) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
        <img src={logo} alt="" />
        <div className="navLigne"></div>
        <ul className="navMenu">
            <Link to="react-space-router/" className={`link ${active === "home" ? "active" : ""}`}><li>00 HOME</li></Link>
            <Link to="react-space-router/destination/0" className={`link ${active === "destination" ? "active" : ""}`}><li>01 DESTINATION</li></Link>
            <Link to="react-space-router/crew/0" className={`link ${active === "crew" ? "active" : ""}`}><li>02 CREW</li></Link>
            <Link to="react-space-router/technology/0" className={`link ${active === "technology" ? "active" : ""}`}><li>03 TECHNOLOGY</li></Link>
        </ul>
        {menuOpen ? (
          <div className="divBurgerOpen">
            <div onClick={()=> setMenuOpen(false)} className="divBurgerClose">
              <img src={burgerClose} alt="" />
            </div>
            <ul className="navMenuOpen">
            <Link to="react-space-router/" className={`link ${active === "home" ? "active" : ""}`}><li>HOME 00</li></Link>
            <Link to="react-space-router/destination/0" className={`link ${active === "destination" ? "active" : ""}`}><li>DESTINATION 01</li></Link>
            <Link to="react-space-router/crew/0" className={`link ${active === "crew" ? "active" : ""}`}><li>CREW 02</li></Link>
            <Link to="react-space-router/technology/0" className={`link ${active === "technology" ? "active" : ""}`}><li>TECHNOLOGY 03</li></Link>
        </ul>
          </div>
        ): (
          <div onClick={()=> setMenuOpen(true)} className="divBurger">
            <img className="burger" src={burger} alt="" />
          </div>
        )}
    </nav>
  )
} 