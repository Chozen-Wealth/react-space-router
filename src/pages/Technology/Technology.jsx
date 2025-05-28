import { useEffect } from "react"
import Nav from "../../component/Nav/Nav"
import "./Technology.css"
import { Link } from "react-router-dom"

export default function Technology({active, setActive}) {

  useEffect(()=>{
      setActive("technology")
    }, [])

  return (
    <div className="Technology">
      <Nav active={active} setActive={setActive} />
      <div className="techGauche">
        <span>03 <span>SPACE LAUNCH 101</span></span>
        <div className="techDiv">
          <div className="techBubbles">
            <Link>1</Link>
            <Link>2</Link>
            <Link>3</Link>
          </div>
          <div className="techInfos">
            <span>THE TERMINOLOGY</span>
            <span>LAUNCH VEHICLE</span>
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
        <img src="" alt="" />
      </div>
    </div>
  )
}