import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext.jsx'

import './assets/template/css/bootstrap.css';
import './assets/template/css/style.css';
import './assets/template/css/responsive.css';
import './assets/template/css/color.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
           <AuthProvider >
                    <App />
              </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
