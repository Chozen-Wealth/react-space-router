import { useEffect } from "react"
import Nav from "../../component/Nav/Nav"
import "./Crew.css"

export default function Crew({active, setActive}) {

  useEffect(()=>{
      setActive("crew")
    }, [])

  return (
    <div className="Crew">
      <Nav active={active} setActive={setActive} />
      <div className="crewGauche">
        <div className="crewGaucheTop">
          <span>02 <span>MEET YOUR CREW</span></span>
        </div>
        <div className="crewGaucheMid">
          <span>COMMANDER</span>
          <span>DOUGLAS HURLEY</span>
          <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        </div>
        <div className="crewGaucheBot">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="crewDroite">
        <img src="" alt="" />
      </div>
    </div>
  )
}