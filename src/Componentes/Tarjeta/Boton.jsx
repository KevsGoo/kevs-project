import { Link } from 'react-router-dom'
import '../../Style/Tarjeta.css'

export default function Bot({ img, alt = 'Botón start', onClick }){
    return(
        <Link to="/Formulario" onClick={onClick}>
            <img className="BotonImg" src={img} alt={alt} />
        </Link>
    )
}
