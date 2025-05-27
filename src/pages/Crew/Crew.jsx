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
    </div>
  )
}