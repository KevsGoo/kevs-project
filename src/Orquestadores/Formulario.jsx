import Boton from "../Componentes/Formulario/Boton.jsx";
import Campos from "../Componentes/Formulario/Campos.jsx";
import "../Style/Formulario.css";

const Etiquetas = [
  { etiqueta: "Nombre", tipo: "text", holder: "Ana" },
  { etiqueta: "Imagen", tipo: "text", holder: "URL" },
  { etiqueta: "Descripcion", tipo: "text", holder: "Descripcion" },
  { etiqueta: "Color", tipo: "text", holder: "Hexa o nombre" }
];

const Botones = [
  { tipo: "submit", nombre: "Enviar" },
  { tipo: "button", nombre: "Volver" },
  { tipo: "reset", nombre: "Reset" }
];

export default function Formulario() {
  return (
    <div>
      <form action="">
        <div>
          {Etiquetas.map((campo) => (
            <Campos
              key={campo.etiqueta}
              etiqueta={campo.etiqueta}
              tipo={campo.tipo}
              holder={campo.holder}
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
      </form>
    </div>
  );
}