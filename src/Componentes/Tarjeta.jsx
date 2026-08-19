import '../Style/Tarjeta.css';

export default function Tarjeta({ title, img, description, color }) {
  return (
    <div className="Centrar" style={{ background: color }}>
      
      <img className="Imagen" src={img} alt={title} />

      <div className="Orga">
        <h1 className="Titulo">{title}</h1>
        <p>{description}</p>
      </div>

    </div>
  );
}