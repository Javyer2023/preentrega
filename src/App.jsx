import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Productos from './components/Productos.jsx'
import Footer from './components/Footer.jsx'
import { ProductosProvider } from './context/ProductosContext.jsx'


function App() {
  

  return (
    <>
      <Header/>
      
      <ProductosProvider>
        <Productos/>
      </ProductosProvider>
      
      <Footer/>
    </>
  )
}

export default App
