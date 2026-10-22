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
  const cambiar = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
  }
  const Botones = [
    { tipo: "submit", nombre: "Enviar" },
    { tipo: "button", nombre: "Volver", onClick: () => navigate('/Tarjetas') },
    { tipo: "reset", nombre: "Reset" }
  ]
  const enviar = (e) => {
    e.preventDefault()
    agregar({
      title: datos.Nombre,
      img: datos.Imagen,
      descripcion: datos.Descripcion,
      color: datos.Color
    })
    navigate('/Tarjetas')
  }
  return (
    <div className='centrar'>
      <form onSubmit={enviar} onReset={() => setDatos(inicial)}>
        <div className='campos'>
          {Etiquetas.map((campo) => (
            <Campos
              key={campo.etiqueta}
              etiqueta={campo.etiqueta}
              tipo={campo.tipo}
              holder={campo.holder}
              valor={datos[campo.etiqueta]}
              onCambio={cambiar}
            />
          ))}
        </div>
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
