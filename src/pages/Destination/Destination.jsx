import { useEffect } from "react"
import Nav from "../../component/Nav/Nav"
import "./Destination.css"

export default function Destination({active, setActive}) {

  useEffect(()=>{
      setActive("destination")
    }, [])

  return (
    <div className="Destination">
      <Nav active={active} setActive={setActive} />
    </div>
  )
}