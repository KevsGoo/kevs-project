import '../Style/Formulario.css'
import Boton from "../Componentes/Formulario/Boton.jsx";
import Campos from "../Componentes/Formulario/Campos.jsx";
import "../Style/Formulario.css";
import Tarjeta from '../Orquestadores/Tarjeta'
import Descripcion from '../Componentes/Descripcion.jsx';
import { useState } from 'react';

const Etiquetas = [
  { etiqueta: "Nombre", tipo: "text", holder: "Ana" },
  { etiqueta: "Imagen", tipo: "text", holder: "URL" },
  { etiqueta: "Descripcion", tipo: "text", holder: "Descripcion" },
  { etiqueta: "Color", tipo: "text", holder: "Hexa o nombre" }
];

const inicial={Nombre:'', Imagen:'', Descripcion:'', Color:''}
export default function Formulario() {
    const navigate=useNavigate()
    const [datos, SetDatos]=useState(inicial)
    const cambiar=(e)=>{
      SetDatos({...datos,[e.target.name]:e.target.value})
};

const Botones = [
  { tipo: "submit", nombre: "Enviar" },
  { tipo: "button", nombre: "Volver", Pulsado:()=>navigate('/Tarjetas') },
  { tipo: "reset", nombre: "Reset" }
  { tipo: "reset", nombre: "Reset"}
];
    }
  return (
    <div className='centrar'>
      <form action="">
        <div className='campos'>
          {Etiquetas.map((campo) => (
            <Campos
                 key={campo.etiqueta}
                 etiqueta={campo.etiqueta}
                 tipo={campo.tipo}
                 holder={campo.holder}
                 valor={datos[campo.etiqueta]}
                 onCambio=[cambiar]
            />
          ))}
        </div>
        <div>
          {Botones.map((boton) => (
            <Boton
              key={boton.nombre}
              nombre={boton.nombre}
              tipo={boton.tipo}
            />
          ))}
        </div>
        <div className=''Campos'
      </form>
      <Tarjeta
          title={datos.Nombre}
          imagen={datos.Imagen}
          descripcion={datos.Descripcion}
          color={datos.Color}
      />
    </div>
  );
}