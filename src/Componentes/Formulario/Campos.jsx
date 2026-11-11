export default function Campos({etiqueta, tipo, holder, valor, onCambio, error}){
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
                className={error ? 'EntradaError' : undefined}
                aria-invalid={Boolean(error)}
            />
            {error && <span className="ErrorCampo">Campo obligatorio</span>}
        </div>
    )
}
