export default function Boton({tipo, nombre = "button"}){
    return(
        <div>
            <button type={tipo}>{nombre}</button>
        </div>
    )
}