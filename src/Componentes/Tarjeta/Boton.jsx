import { Link } from 'react-router-dom'
import '../../Style/Tarjeta.css'

export default function Bot({ img, alt = 'Botón start' }){
    return(
        <Link to="/Formulario">
            <img className="BotonImg" src={img} alt={alt} />
        </Link>
    )
}
