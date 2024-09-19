import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SubstractAndAdd from './components/SubstractAndAdd.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SubstractAndAdd/>
  </StrictMode>,
)
