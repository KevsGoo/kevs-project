import '../Style/Formulario.css'
import Boton from "../Componentes/Formulario/Boton.jsx";
import Campos from "../Componentes/Formulario/Campos.jsx";
import Tarjeta from '../Orquestadores/Tarjeta.jsx'
import { useCallback } from 'react';
import { useFormulario, useNavegarATarjetas } from '../hooks/index.js';

export default function Formulario({ agregar }) {
  const irATarjetas = useNavegarATarjetas()

  const guardar = useCallback((tarjeta) => {
    agregar(tarjeta)
    irATarjetas()
  }, [agregar, irATarjetas])

  const {
    datos,
    errores,
    cambiar,
    enviar,
    reiniciar,
    faltantes,
    botones,
    campos,
  } = useFormulario({ alGuardar: guardar, alVolver: irATarjetas })

  return (
    <div className='centrar'>
      <form onSubmit={enviar} onReset={reiniciar} noValidate>
        <div className='campos'>
          {campos.map((campo) => (
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
            {faltantes.length === campos.length
              ? 'El formulario está vacío. Completa todos los campos para agregar una tarjeta.'
              : `Faltan campos obligatorios: ${faltantes.join(', ')}.`}
          </p>
        )}
        <div>
          {botones.map((boton) => (
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
