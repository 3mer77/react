import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reac = React.createElement(

  "a",
  {herf:"https://google.com",target:"_blank"},
  "visit Google from here"
)

createRoot(document.getElementById('root')).render(
 
  <App />
  
)
