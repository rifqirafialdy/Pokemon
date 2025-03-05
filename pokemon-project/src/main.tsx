import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { PokemonProvider } from './contexts/PokemonProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <PokemonProvider>

    <App />
    </PokemonProvider>
    </BrowserRouter>
  </StrictMode>,
)
