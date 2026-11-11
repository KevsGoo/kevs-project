import Tarjeta from '../Orquestadores/Tarjeta.jsx'
import artistas from '../data.json'
import Bot from '../Componentes/Tarjeta/Boton.jsx'
import imgBoton from '../img/boton.jpeg'
import imgBadBunny from '../img/bad-bunny.jpeg'
import imgJhayco from '../img/jhayco.jpeg'
import imgMora from '../img/mora.jpeg'
import imgAnuel from '../img/anuel.jpg'
import imgTainy from '../img/tainy.jpeg'

const imagenes = {
  'bad-bunny.jpeg': imgBadBunny,
  'jhayco.jpeg': imgJhayco,
  'mora.jpeg': imgMora,
  'anuel.jpg': imgAnuel,
  'tainy.jpeg': imgTainy
}

export default function Tar({tarjetas = []}) {
  const lista = [
    ...artistas.map(artista => ({ ...artista, img: imagenes[artista.img] })),
    ...tarjetas
  ]
  return (
    <div className="Contenedor">
      {lista.map((artista, index) => (
        <Tarjeta
          key={artista.id}
          title={artista.title}
          description={artista.descripcion}
          img={artista.img}
          color={artista.color}
          retraso={600 + index * 450}
        />
      ))}
      <div className="ZonaBoton">
        <Bot img={imgBoton} alt='Botón start' />
      </div>
    </div>
  )
}
