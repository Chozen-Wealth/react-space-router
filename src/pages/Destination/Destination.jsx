import { useEffect } from "react"
import Nav from "../../component/Nav/Nav"
import "./Destination.css"
import planetes from "./planetes.json"

export default function Destination({active, setActive}) {

  useEffect(()=>{
      setActive("destination")
    }, [])

  return (
    <div className="Destination">
      <Nav active={active} setActive={setActive} />
      <div className="destinationGauche">
        <span>01 <span>PICK YOUR DESTINATION</span></span>
        <img src="" alt="" />
      </div>
      <div className="destinationDroite"></div>
    </div>
  )
}