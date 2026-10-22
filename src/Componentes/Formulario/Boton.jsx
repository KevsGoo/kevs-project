export default function Boton({tipo, nombre, onClick}){
    return(
        <div>
            <button type={tipo} onClick={onClick}>{nombre}</button>
        </div>
    )
}
