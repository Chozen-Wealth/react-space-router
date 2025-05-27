import { useEffect } from "react"
import Nav from "../../component/Nav/Nav"
import "./Technology.css"

export default function Technology({active, setActive}) {

  useEffect(()=>{
      setActive("technology")
    }, [])

  return (
    <div className="Technology">
      <Nav active={active} setActive={setActive} />
    </div>
  )
}