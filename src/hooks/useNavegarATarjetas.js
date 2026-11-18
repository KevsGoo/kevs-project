import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useNavegarATarjetas() {
  const navigate = useNavigate()

  return useCallback(() => navigate('/Tarjetas'), [navigate])
}
