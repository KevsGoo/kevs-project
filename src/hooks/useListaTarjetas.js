import { useCallback, useMemo } from 'react'
import artistas from '../data.json'
import imgBadBunny from '../img/bad-bunny.jpeg'
import imgJhayco from '../img/jhayco.jpeg'
import imgMora from '../img/mora.jpeg'
import imgAnuel from '../img/anuel.jpg'
import imgTainy from '../img/tainy.jpeg'

const RETRASO_BASE = 600
const INTERVALO_RETRASO = 450

const SIN_TARJETAS = []

const IMAGENES = {
  'bad-bunny.jpeg': imgBadBunny,
  'jhayco.jpeg': imgJhayco,
  'mora.jpeg': imgMora,
  'anuel.jpg': imgAnuel,
  'tainy.jpeg': imgTainy,
}


export default function useListaTarjetas(tarjetas = SIN_TARJETAS) {
  const lista = useMemo(
    () => [
      ...artistas.map((artista) => ({ ...artista, img: IMAGENES[artista.img] ?? artista.img })),
      ...tarjetas,
    ],
    [tarjetas],
  )

  const retrasoDe = useCallback(
    (indice) => RETRASO_BASE + indice * INTERVALO_RETRASO,
    [],
  )

  return { lista, retrasoDe }
}
