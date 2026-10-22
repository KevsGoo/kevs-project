import '../Style/Tarjeta.css';
import Nombre from '../Componentes/Nombre.jsx';
import Descripcion from '../Componentes/Descripcion.jsx';
import Imagen from '../Componentes/Imagen.jsx';


export default function Tarjeta({ title, img, fallbackImg, description, color, retraso = 500, desintegracion = true }) {
  return (
    <div className="Centrar" style={{ background: color }}>
      <Imagen
           img={img}
           fallback={fallbackImg}
           retraso={retraso}
           desintegracion={desintegracion}
      />
      <div className='Orga'>
        <Nombre
            title={title}
        />
        <Descripcion
            description={description}
        />
      </div>
    </div>
  );
} 
