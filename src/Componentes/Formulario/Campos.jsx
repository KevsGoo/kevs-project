export default function Campos({etiqueta, tipo, holder}){
    return(
        <div>
            <label htmlFor={etiqueta}>{etiqueta}</label>
            <input id={etiqueta} name={etiqueta} type={tipo} placeholder={holder} />
        </div>
    )
}