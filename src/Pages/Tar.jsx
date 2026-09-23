import Tarjeta from '../Orquestadores/Tarjeta.jsx'
import minions from '../data.json'
import Bot from '../Componentes/Tarjeta/Boton.jsx'
import imgCarl from '../img/images.jpeg'
import imgDave from '../img/minion2.jpg'
import imgBob from '../img/minion3.jpeg'
import imgKevinStuart from '../img/minion4.jpeg'
import imgBoton from '../img/boton.jpeg'
import { useNavigate } from 'react-router-dom'

const imagenes = {
  'images.jpeg': imgCarl,
  'minion2.jpg': imgDave,
  'minion3.jpeg': imgBob,
  'minion4.jpeg': imgKevinStuart
}

export default function Tar() {
  const navigate = useNavigate()
  return (
    <div className="Contenedor">
      {minions.map(minion => (
        <Tarjeta
          key={minion.id}
          title={minion.title}
          description={minion.descripcion}
          img={imagenes[minion.img]}
          color={minion.color}
        />
      ))}
      <div className="ZonaBoton">
        <Bot img={imgBoton} alt='Botón start' onClick={() => navigate('/Formulario')} />
      </div>
    </div>
  )
}
