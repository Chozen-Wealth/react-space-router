import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Destination from './pages/Destination/Destination'
import Crew from './pages/Crew/Crew'
import Technology from './pages/Technology/Technology'

function App() {
  const [active, setActive] = useState("home")
  return (
    <>
      <Routes>
        <Route path='/' element={<Home active={active} setActive={setActive} />} />
        <Route path='/destination' element={<Destination active={active} setActive={setActive} />} />
        <Route path='/crew' element={<Crew active={active} setActive={setActive} />} />
        <Route path='/technology' element={<Technology active={active} setActive={setActive} />} />
      </Routes>
    </>
  )
}

export default App
