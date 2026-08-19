import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from './Componentes/Tarjeta.jsx'
import img from './img/images.jpeg';

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Tarjeta 
             title = "Carl"
             description = "Carl es un minion muy divertido que disfruta pasando tiempo con sus compañeros minions."
            img = {img}
             color = "red"
    />
  </StrictMode>,
)