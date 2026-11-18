import { useDesintegracionReversible } from '../../hooks/index.js'

export default function DesintegracionReversible({
    src,
    retraso = 500,
    duracion = 2200,
    paso = 4,
    fallback,
    animar = true,
}) {
    const { canvasRef, imgRef, fase, error, fallar } = useDesintegracionReversible({
        src,
        retraso,
        duracion,
        paso,
        fallback,
        animar,
    })

    return (
        <div style={{ display: 'inline-block', lineHeight: 0, position: 'relative' }}>
            <canvas ref={canvasRef} className="Imagen" style={{ display: fase === 'animando' ? 'block' : 'none' }} />
            {fase === 'natural' && !error && (
                <img ref={imgRef} src={src} alt="" className="Imagen" style={{ display: 'block' }} onError={fallar} />
            )}
            {error && (
                <div className="Imagen ImagenVacia" style={{ position: 'absolute', top: 0, left: 0 }}>Sin imagen</div>
            )}
        </div>
    )
}
