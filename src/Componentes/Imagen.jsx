import '../Style/Tarjeta.css'
import DesintegracionReversible from './Tarjeta/DesintegracionReversible.jsx'

export default function Imagen({img, fallback, retraso = 500, desintegracion = true}){
    return(
        <DesintegracionReversible
            src={img}
            fallback={fallback}
            retraso={retraso}
            duracion={2200}
            paso={4}
            animar={desintegracion}
        />
    )
}
