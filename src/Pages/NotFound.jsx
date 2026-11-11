import '../Style/NotFound.css'
import { Link } from 'react-router-dom'

export default function NotFound(){
    return (
        <div className="NoEncontrado">
            <h1 className="NoEncontradoCodigo">404</h1>
            <p className="NoEncontradoTexto">Esta pagina no existe o todavia no la has creado.</p>
            <Link to="/Tarjetas" className="NoEncontradoBoton">Volver a las tarjetas</Link>
        </div>
    )
}
