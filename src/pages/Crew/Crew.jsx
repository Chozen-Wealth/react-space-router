import { useEffect, useState } from "react"
import Nav from "../../component/Nav/Nav"
import "./Crew.css"
import crewmates from "./crew.json"
import { Link, useParams } from "react-router-dom"

export default function Crew({active, setActive}) {

  const {id} = useParams()
  const [crewActuel, setCrewActuel] = useState(0)

  const idActuelle = parseInt(id)

  useEffect(()=>{
    const crewmatesActuel = crewmates.find(element => element.id === idActuelle)
    setCrewActuel(crewmatesActuel)
  },[id])

  useEffect(()=>{
      setActive("crew")
    }, [])

  return (
    <div className="Crew">
      <Nav active={active} setActive={setActive} />
        <>
          <div key={crewActuel.id} className="crewGauche">
            <div className="crewGaucheTop">
              <span>02 <span>MEET YOUR CREW</span></span>
            </div>
            <div className="crewGaucheMid">
              <span>COMMANDER</span>
              <span>{crewActuel.nom}</span>
              <p>{crewActuel.description}</p>
            </div>
            <div className="crewGaucheBot">
                <Link to="/crew/0" ><div className={`dot ${idActuelle === 0 ? "active" : ""}`}></div></Link>
                <Link to="/crew/1" ><div className={`dot ${idActuelle === 1 ? "active" : ""}`}></div></Link>
                <Link to="/crew/2" ><div className={`dot ${idActuelle === 2 ? "active" : ""}`}></div></Link>
                <Link to="/crew/3" ><div className={`dot ${idActuelle === 3 ? "active" : ""}`}></div></Link>
            </div>
          </div>
          <div className="crewDroite">
            <img src={crewActuel.image} alt="" />
          </div>
        </>
    </div>
  )
}