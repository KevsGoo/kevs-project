import Tarjeta from '../Orquestadores/Tarjeta.jsx'
import Bot from '../Componentes/Tarjeta/Boton.jsx'
import imgBoton from '../img/boton.jpeg'
import { useListaTarjetas } from '../hooks/index.js'

const SIN_TARJETAS = []

export default function Tar({ tarjetas = SIN_TARJETAS }) {
  const { lista, retrasoDe } = useListaTarjetas(tarjetas)

  return (
    <div className="Contenedor">
      {lista.map((artista, index) => (
        <Tarjeta
          key={artista.id}
          title={artista.title}
          description={artista.descripcion}
          img={artista.img}
          color={artista.color}
          retraso={retrasoDe(index)}
        />
      ))}
      <div className="ZonaBoton">
        <Bot img={imgBoton} alt='Botón start' />
      </div>
    </div>
  )
}
