import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Productos from './components/Productos.jsx'
import Footer from './components/Footer.jsx'
import {Routes, Route} from 'react-router-dom';
import Carrito from './components/Carrito.jsx';
import ProductoDetalle from './components/ProductoDetalle.jsx';


function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Productos/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path="/productos/:id" element={<ProductoDetalle />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
