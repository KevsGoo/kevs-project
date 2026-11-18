import { useDesintegracion } from '../../hooks/index.js'

export default function Desintegracion({
    src,
    retraso = 1500,
    duracion = 3000,
    paso = 3,
    onFin,
}) {
    const { canvasRef, imgRef, fase } = useDesintegracion({
        src,
        retraso,
        duracion,
        paso,
        onFin,
    })

    return (
        <div style={{ display: 'inline-block', lineHeight: 0 }}>
            {fase === 'mostrando' && (
                <img ref={imgRef} src={src} alt="" style={{ maxWidth: '400px', width: '100%', height: 'auto', display: 'block' }} />
            )}
            <canvas ref={canvasRef} style={{ display: fase === 'mostrando' ? 'none' : 'block', maxWidth: '400px', width: '100%', height: 'auto' }} />
        </div>
    )
}
