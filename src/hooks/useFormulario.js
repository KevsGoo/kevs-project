import { useCallback, useMemo, useState } from 'react'

export const CAMPOS_FORMULARIO = [
  { etiqueta: 'Nombre', tipo: 'text', holder: 'Ana' },
  { etiqueta: 'Imagen', tipo: 'text', holder: 'URL' },
  { etiqueta: 'Descripcion', tipo: 'text', holder: 'Descripcion' },
  { etiqueta: 'Color', tipo: 'text', holder: 'Hexa o nombre' },
]

const DATOS_INICIALES = { Nombre: '', Imagen: '', Descripcion: '', Color: '' }

const ETIQUETAS = CAMPOS_FORMULARIO.map((campo) => campo.etiqueta)

export default function useFormulario({ alGuardar, alVolver } = {}) {
  const [datos, setDatos] = useState(DATOS_INICIALES)
  const [errores, setErrores] = useState({})

  const cambiar = useCallback((evento) => {
    const { name, value } = evento.target
    setDatos((previos) => ({ ...previos, [name]: value }))

    setErrores((previos) => {
      if (!previos[name]) return previos
      const siguientes = { ...previos }
      delete siguientes[name]
      return siguientes
    })
  }, [])

  const pendientes = useMemo(
    () => ETIQUETAS.filter((etiqueta) => !datos[etiqueta]?.trim()),
    [datos],
  )

  const enviar = useCallback(
    (evento) => {
      evento.preventDefault()
      if (pendientes.length > 0) {

        setErrores(Object.fromEntries(pendientes.map((etiqueta) => [etiqueta, true])))
        return
      }
      setErrores({})
      alGuardar?.({
        title: datos.Nombre.trim(),
        img: datos.Imagen.trim(),
        descripcion: datos.Descripcion.trim(),
        color: datos.Color.trim(),
      })
    },
    [alGuardar, datos, pendientes],
  )

  const reiniciar = useCallback(() => {
    setDatos(DATOS_INICIALES)
    setErrores({})
  }, [])

  const faltantes = useMemo(() => Object.keys(errores), [errores])

  const botones = useMemo(
    () => [
      { tipo: 'submit', nombre: 'Enviar' },
      { tipo: 'button', nombre: 'Volver', onClick: alVolver },
      { tipo: 'reset', nombre: 'Reset' },
    ],
    [alVolver],
  )

  return {
    datos,
    errores,
    cambiar,
    enviar,
    reiniciar,
    faltantes,
    botones,
    campos: CAMPOS_FORMULARIO,
  }
}
