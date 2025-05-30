import { useEffect, useState } from "react"
import Nav from "../../component/Nav/Nav"
import "./Technology.css"
import { Link, useParams } from "react-router-dom"
import datas from "./tech.json"

export default function Technology({active, setActive}) {

  const {id} = useParams()

  const [techActuelle, setTechActuelle] = useState(null)
  const idActuelle = parseInt(id)
  
  useEffect(()=>{
    const tech = datas.find(element => element.id === idActuelle)
    setTechActuelle(tech)
  }, [id])


  useEffect(()=>{
      setActive("technology")
    }, [])



  return (
    <div className="Technology">
      <Nav active={active} setActive={setActive} />
      {techActuelle &&
      <>
      <div className="techGauche">
        <span>03 <span>SPACE LAUNCH 101</span></span>
        <div className="techDiv">
          <div className="techBubbles">
            <Link className={idActuelle === 0 ? "active" : ""} to="/technology/0">1</Link>
            <Link className={idActuelle === 1 ? "active" : ""} to="/technology/1">2</Link>
            <Link className={idActuelle === 2 ? "active" : ""} to="/technology/2">3</Link>
          </div>

          {/* ça aurait été bien de center l'image avec le texte et les boutons mais c'est un detail */}

            <div className="techInfos">
                <span>THE TERMINOLOGY</span>
              <span>{techActuelle.nom}</span>
              <p>A launch vehicle or carrier rocket is a rocket-propelled
              vehicle used to carry a payload from Earth's surface to
              space, usually to Earth orbit or beyond. Our WEB-X
              carrier rocket is the most powerful in operation.
              Standing 150 metres tall, it's quite an awe-inspiring
              sight on the launch pad!</p>
            </div>
        </div>
      </div>
      <div className="techDroite">
        <img src={techActuelle.image} alt="" />
      </div>
      </>
      }
      </div>
  )
}