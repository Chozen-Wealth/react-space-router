import { useEffect, useState } from "react"
import Nav from "../../component/Nav/Nav"
import "./Destination.css"
import planetes from "./planetes.json"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function Destination({active, setActive}) {

  const {id} = useParams()
  const navigate = useNavigate()

  const [planeteActuel, setPlaneteActuel] = useState(null)
  const idActuelle = parseInt(id)
  
  useEffect(()=>{
    const planete = planetes.find(element => element.id === idActuelle)
    setPlaneteActuel(planete)

  }, [id])
  useEffect(()=>{
      setActive("destination")
    }, [])


  if (!planeteActuel) {
    return <div>Planète introuvable</div>;
  }

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
            <Link key={element.id} to={`/destination/${element.id}`} className={idActuelle === element.id ? "active" : ""}>{element.planete}</Link>
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