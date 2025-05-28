import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Destination from './pages/Destination/Destination'
import Crew from './pages/Crew/Crew'
import Technology from './pages/Technology/Technology'

function App() {
  const [active, setActive] = useState("home")
  return (
    <>
      <Routes>
        <Route path='react-space-router/' element={<Home active={active} setActive={setActive} />} />
        <Route path="react-space-router/destination" element={<Navigate to="/destination/0" />} />
        <Route path='react-space-router/destination/:id' element={<Destination active={active} setActive={setActive} />} />
        <Route path='react-space-router/crew/:id' element={<Crew active={active} setActive={setActive} />} />
        <Route path='react-space-router/technology/:id' element={<Technology active={active} setActive={setActive} />} />
      </Routes>
    </>
  )
}

export default App
