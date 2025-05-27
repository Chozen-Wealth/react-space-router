import { useEffect, useState } from "react"
import Nav from "../../component/Nav/Nav"
import "./Destination.css"
import planetes from "./planetes.json"
import { Link } from "react-router-dom"

export default function Destination({active, setActive}) {

  useEffect(()=>{
      setActive("destination")
    }, [])

  const [focus, setFocus] = useState(0)

  const planeteActuel = planetes.find(element => element.id === focus)

  return (
    <div className="Destination">
      <Nav active={active} setActive={setActive} />
      <div className="destinationGauche">
        <span>01 <span>PICK YOUR DESTINATION</span></span>
          <img src={planeteActuel.image} alt="" />
      </div>
      <div className="destinationDroite">
        <div className="destinationMenu">
          {planetes.map(element => (
            <Link className={focus === element.id ? "active" : ""}>{element.planete}</Link>
          ))}
        </div>
        <span className="destinationTitre">{planeteActuel.planete}</span>
        <p className="destinationDesc">{planeteActuel.description}</p>
        <div className="destinationDivTravel">
          <div>
            <span>EST. TRAVEL TIME</span>
            <span>{planeteActuel.days}</span>
          </div>
        </div>
      </div>
    </div>
  )
}