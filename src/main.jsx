import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/nanum-gothic-coding/latin-400.css'
import '@fontsource/nanum-gothic-coding/latin-700.css'
import '@fontsource/permanent-marker'
import '@fontsource/rock-salt'
import '@fontsource/mynerve';
import '@fontsource/walter-turncoat';
import '@fontsource-variable/geist-mono';
import '@fontsource/just-me-again-down-here';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
