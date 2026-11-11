import '../Style/Tarjeta.css'
import { useState } from 'react'
import Tar from './Tar.jsx'
import Formulario from "../Orquestadores/Formulario.jsx"
import Home from './h.jsx'
import NotFound from './NotFound.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

export default function App() {
  const [tarjetas, setTarjetas] = useState([])

  const agregar = (tarjeta) => {
    setTarjetas((prev) => [...prev, { ...tarjeta, id: `tarjeta-${Date.now()}-${prev.length}` }])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/h" replace />} />
        <Route path="/h" element={<Home />} />
        <Route path="/Tarjetas" element={<Tar tarjetas={tarjetas} />} />
        <Route path="/Formulario" element={<Formulario agregar={agregar} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
