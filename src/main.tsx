import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'

const container = document.getElementById('root')!

// Paginile sunt prerandate în HTML static la build; în browser, React
// hidratează DOM-ul existent în loc să-l reconstruiască de la zero.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
