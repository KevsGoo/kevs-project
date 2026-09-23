import '../Style/Tarjeta.css'
import Tar from './Tar.jsx'
import Formulario from "../Orquestadores/Formulario.jsx"
import Prueba from './h.jsx'
import NotFound from './NotFound.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

export default function App() {
  return (
    <BrowserRouter> {/* ← faltaba el > de cierre */}
      <Routes>
        <Route exact path="/Tarjetas" element={<Tar />} />   
        <Route exact path="/" element={<Prueba />} />
        <Route exact path="/Formulario" element={<Formulario />} />
        <Route exact path="*" element={<NotFound />} />         
      </Routes>
    </BrowserRouter>
  )
}