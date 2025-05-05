import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/jersey-25'
import '@fontsource/nanum-gothic-coding'
import '@fontsource/nanum-gothic-coding/700.css' // Bold weight
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
