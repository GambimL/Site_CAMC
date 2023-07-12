import React from 'react'
<<<<<<< HEAD
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home/'
=======
>>>>>>> e131c102e1f028f636f8e4c65c48a87bf499f384
import './styles/styles.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <Home />
=======
    <Router>
      <MainRoutes />
    </Router>
>>>>>>> e131c102e1f028f636f8e4c65c48a87bf499f384
  </React.StrictMode>,
)
