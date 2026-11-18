import Desintegracion from "../Componentes/Home/Desintegracion.jsx";
import ABC from "../img/pedomelo.gif";
import { useNavegarATarjetas } from "../hooks/index.js";
import "../Style/Home.css";

export default function Home(){
    const irATarjetas = useNavegarATarjetas();

    return (
        <div className="Home">
            <h1 className="Bienvenidos">Bienvenidos</h1>
            <Desintegracion
                src={ABC}
                retraso={2500}
                duracion={1000}
                paso={2}
                onFin={irATarjetas}
            />
        </div>
    )
}
