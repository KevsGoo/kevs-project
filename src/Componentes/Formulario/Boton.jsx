export default function Boton({tipo, nombre, Pulsado}){
    return(
        <div>
            <button type={tipo} onClick={Pulsado}>{nombre}</button>
        </div>
    )
}