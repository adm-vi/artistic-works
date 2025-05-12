import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/nanum-gothic-coding/latin-400.css'
import '@fontsource/nanum-gothic-coding/latin-700.css'
import '@fontsource/permanent-marker'
import '@fontsource/reenie-beanie'
import '@fontsource/rock-salt'
import '@fontsource/londrina-solid'
import '@fontsource/nanum-pen-script'
// Supports weights 100-900
import '@fontsource-variable/geist-mono';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
