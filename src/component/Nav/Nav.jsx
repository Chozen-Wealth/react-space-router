import "./Nav.css"
import logo from "../../../public/assets/shared/logo.svg"

export default function Nav() {
  return (
    <nav>
        <img src={logo} alt="" />
        <div className="navLigne"></div>
        <div className="navMenu"></div>
    </nav>
  )
}