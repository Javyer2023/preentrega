import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CarritoProvider } from './context/CarritoContext.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductosProvider } from './context/ProductosContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { CrudProvider } from './context/CrudContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <ProductosProvider>
        <CarritoProvider>
          <CrudProvider>
            <App />
          </CrudProvider>
        </CarritoProvider>
      </ProductosProvider>
    </BrowserRouter>
  </AuthProvider>
)
