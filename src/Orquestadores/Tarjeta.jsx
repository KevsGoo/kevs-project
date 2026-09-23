import '../Style/Tarjeta.css';
import Nombre from '../Componentes/Nombre.jsx';
import Descripcion from '../Componentes/Descripcion.jsx';
import Imagen from '../Componentes/Imagen.jsx';


export default function Tarjeta({ title, img, description, color }) {
  return (
    <div className="Centrar" style={{ background: color }}>
      <Imagen
           img={img}
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