import { useEffect, useState } from "react"
import Nav from "../../component/Nav/Nav"
import "./Home.css"
import { Link, useNavigate } from "react-router-dom"

export default function Home({active, setActive}) {

  const navigate = useNavigate()

  useEffect(()=>{
    setActive("home")
  }, [])

  const [animation, setAnimation] = useState(false)

  const handleClick = ()=>{
    setAnimation(true)
    const timer = setTimeout(()=>{
      navigate("/destination/0")
    }, 500) 

    return()=> clearTimeout(timer)
  }

  return (
    <div className="Home">
      <Nav active={active} setActive={setActive} />
        <div className="homeGauche">
            <h3>SO, YOU WANT TO TRAVEL TO</h3>
            <h1>SPACE</h1>
            <p>Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the
            edge of it. Well sit back, and relax because we'll give you a
            truly out of this world experience!</p>
        </div>
        <div className="homeDroite">
            <Link onClick={handleClick}>
              <div className={`homeExploreCircle ${animation ? "active" : ""}`}>
                  <span>EXPLORE</span>
              </div>
            </Link>
        </div>
    </div>
  )
}