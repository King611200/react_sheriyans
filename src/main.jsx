import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App1 from './App.jsx'
import App2 from './App2.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <App1 />
    <App2 />
    </BrowserRouter>
  </React.StrictMode>,
)