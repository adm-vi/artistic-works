import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/jersey-25'
import '@fontsource/nanum-gothic-coding/latin-400.css'
import '@fontsource/nanum-gothic-coding/latin-700.css'
import '@fontsource/permanent-marker'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
