import '../Style/Formulario.css'
import Boton from "../Componentes/Formulario/Boton.jsx";
import Campos from "../Componentes/Formulario/Campos.jsx";
import Tarjeta from '../Orquestadores/Tarjeta.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Etiquetas = [
  { etiqueta: "Nombre", tipo: "text", holder: "Ana" },
  { etiqueta: "Imagen", tipo: "text", holder: "URL" },
  { etiqueta: "Descripcion", tipo: "text", holder: "Descripcion" },
  { etiqueta: "Color", tipo: "text", holder: "Hexa o nombre" }
];

const inicial = { Nombre: '', Imagen: '', Descripcion: '', Color: '' }

export default function Formulario({agregar}) {
  const navigate = useNavigate()
  const [datos, setDatos] = useState(inicial)
  const [errores, setErrores] = useState({})

  const cambiar = (e) => {
    const { name, value } = e.target
    setDatos((prev) => ({ ...prev, [name]: value }))
    // el error del campo desaparece en cuanto el usuario escribe algo
    setErrores((prev) => {
      if (!prev[name]) return prev
      const siguiente = { ...prev }
      delete siguiente[name]
      return siguiente
    })
  }

  const Botones = [
    { tipo: "submit", nombre: "Enviar" },
    { tipo: "button", nombre: "Volver", onClick: () => navigate('/Tarjetas') },
    { tipo: "reset", nombre: "Reset" }
  ]

  const pendientes = Etiquetas
    .map((campo) => campo.etiqueta)
    .filter((etiqueta) => !datos[etiqueta]?.trim())

  const enviar = (e) => {
    e.preventDefault()
    if (pendientes.length > 0) {
      // formulario vacío o incompleto: no se agrega ninguna tarjeta
      setErrores(Object.fromEntries(pendientes.map((etiqueta) => [etiqueta, true])))
      return
    }
    setErrores({})
    agregar({
      title: datos.Nombre.trim(),
      img: datos.Imagen.trim(),
      descripcion: datos.Descripcion.trim(),
      color: datos.Color.trim()
    })
    navigate('/Tarjetas')
  }

  const reiniciar = () => {
    setDatos(inicial)
    setErrores({})
  }

  const faltantes = Object.keys(errores)

  return (
    <div className='centrar'>
      <form onSubmit={enviar} onReset={reiniciar} noValidate>
        <div className='campos'>
          {Etiquetas.map((campo) => (
            <Campos
              key={campo.etiqueta}
              etiqueta={campo.etiqueta}
              tipo={campo.tipo}
              holder={campo.holder}
              valor={datos[campo.etiqueta]}
              onCambio={cambiar}
              error={Boolean(errores[campo.etiqueta])}
            />
          ))}
        </div>
        {faltantes.length > 0 && (
          <p className="ErrorGeneral" role="alert">
            {faltantes.length === Etiquetas.length
              ? 'El formulario está vacío. Completa todos los campos para agregar una tarjeta.'
              : `Faltan campos obligatorios: ${faltantes.join(', ')}.`}
          </p>
        )}
        <div>
          {Botones.map((boton) => (
            <Boton
              key={boton.nombre}
              nombre={boton.nombre}
              tipo={boton.tipo}
              onClick={boton.onClick}
            />
          ))}
        </div>
      </form>
      {datos.Imagen && (
        <Tarjeta
          title={datos.Nombre}
          img={datos.Imagen}
          description={datos.Descripcion}
          color={datos.Color || '#9B5DE5'}
          desintegracion={false}
        />
      )}
    </div>
  );
}
