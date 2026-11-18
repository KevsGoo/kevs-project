import { useCallback, useState } from 'react'

const SIN_TARJETAS = []

export default function useTarjetas(iniciales = SIN_TARJETAS) {
  const [tarjetas, setTarjetas] = useState(iniciales)

  const agregar = useCallback((tarjeta) => {
    setTarjetas((previas) => [
      ...previas,
      { ...tarjeta, id: `tarjeta-${Date.now()}-${previas.length}` },
    ])
  }, [])

  return { tarjetas, agregar }
}
