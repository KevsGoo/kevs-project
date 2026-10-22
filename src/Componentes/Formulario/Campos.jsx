export default function Campos({etiqueta, tipo, holder, valor, onCambio}){
    return(
        <div>
            <label htmlFor={etiqueta}>{etiqueta}</label>
            <input 
                id={etiqueta} 
                name={etiqueta} 
                type={tipo} 
                placeholder={holder}
                value={valor}
                onChange={onCambio}
            />
        </div>
    )
}
