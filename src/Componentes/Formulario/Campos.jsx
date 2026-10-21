export default function Campos({etiqueta, tipo, holder, valor}){
    return(
        <div>
            <label htmlFor={etiqueta}>{etiqueta}</label>
            <input 
                id={etiqueta} 
                name={etiqueta} 
                type={tipo} 
                placeholder={holder}
                value={valor}
            />
        </div>
    )
}