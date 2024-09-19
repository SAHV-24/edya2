import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MultipleCustomHooks from './components/MultipleCustomHooks.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultipleCustomHooks/>
  </StrictMode>,
)
