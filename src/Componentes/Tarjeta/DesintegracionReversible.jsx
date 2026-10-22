import { useEffect, useRef, useState } from 'react'

export default function DesintegracionReversible({
    src,
    retraso = 500,
    duracion = 2200,
    paso = 4,
    fallback,
    animar = true,
}) {
    const canvasRef = useRef(null)
    const imgRef = useRef(null)
    const [fase, setFase] = useState('natural')
    const [error, setError] = useState(false)
    const [prevSrc, setPrevSrc] = useState(src)
    if (prevSrc !== src) {
        setPrevSrc(src)
        setFase('natural')
        setError(false)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas || !animar) return
        const ctx = canvas.getContext('2d', { willReadFrequently: true })
        const img = new Image()
        let raf
        let timeoutId
        let cancelado = false

        const animarParticulas = (particulas) => {
            const inicio = performance.now()
            const total = 1.0

            const cuadro = (ahora) => {
                if (cancelado) return
                const t = Math.min(((ahora - inicio) / duracion) * total, total)
                const d = Math.sin(Math.PI * t)
                ctx.clearRect(0, 0, canvas.width, canvas.height)

                for (const p of particulas) {
                    ctx.globalAlpha = 1 - d * 0.85
                    ctx.fillStyle = p.color
                    ctx.fillRect(p.x + p.vx * d, p.y + p.vy * d, paso, paso)
                }
                ctx.globalAlpha = 1

                if (t < total) {
                    raf = requestAnimationFrame(cuadro)
                } else {
                    setFase('natural')
                }
            }
            raf = requestAnimationFrame(cuadro)
        }

        img.onload = () => {
            if (cancelado) return
            const TAM = 200
            canvas.width = TAM
            canvas.height = TAM
            const lado = Math.min(img.naturalWidth, img.naturalHeight)
            const sx = (img.naturalWidth - lado) / 2
            const sy = (img.naturalHeight - lado) / 2
            const particulas = []
            try {
                ctx.drawImage(img, sx, sy, lado, lado, 0, 0, canvas.width, canvas.height)
                const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height)
                for (let y = 0; y < canvas.height; y += paso) {
                    for (let x = 0; x < canvas.width; x += paso) {
                        const i = (y * canvas.width + x) * 4
                        if (data[i + 3] < 10) continue
                        particulas.push({
                            x,
                            y,
                            color: `rgb(${data[i]},${data[i + 1]},${data[i + 2]})`,
                            vx: (Math.random() - 0.5) * 90,
                            vy: -(20 + Math.random() * 90),
                        })
                    }
                }
            } catch {
                return
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            timeoutId = setTimeout(() => {
                if (cancelado) return
                setFase('animando')
                requestAnimationFrame(() => animarParticulas(particulas))
            }, retraso)
        }
        img.onerror = () => {
            if (fallback && img.src !== fallback) {
                img.src = fallback
                return
            }
            setError(true)
        }
        img.src = src

        return () => {
            cancelado = true
            clearTimeout(timeoutId)
            cancelAnimationFrame(raf)
        }
    }, [src, retraso, duracion, paso, fallback, animar])

    const fallar = (e) => {
        const elemento = e.currentTarget
        if (fallback && elemento.src !== fallback) {
            elemento.src = fallback
            return
        }
        setError(true)
    }

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
