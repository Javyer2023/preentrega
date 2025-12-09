import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Productos from './components/Productos.jsx'
import Footer from './components/Footer.jsx'
import {Routes, Route} from 'react-router-dom';
import Carrito from './pages/Carrito.jsx';
import ProductoDetalle from './components/ProductoDetalle.jsx';
import Ofertas from './pages/Ofertas.jsx'
import Contacto from './components/Contacto.jsx'
import Login from './pages/Login.jsx'
import Admin from './components/Admin.jsx'
import RutaProtegida from './components/RutaProtegida.jsx'
import { useAuthContext } from './context/AuthContext.jsx'


function App() {
  const {user} = useAuthContext();
  console.log("👉 Usuario desde el contexto:", user); 
  const estaAutenticado = Boolean(user);
  return (
    <>
      <Header estaAutenticado = {estaAutenticado}/>
      <Routes>
        <Route path='/' element={<Productos/>}/>
        <Route path='/carrito' element={<RutaProtegida estaAutenticado={estaAutenticado}><Carrito/></RutaProtegida>}/>
        <Route path='/productos/:id' element={<ProductoDetalle />} />
        <Route path='/ofertas' element={<Ofertas/>} />
        <Route path='/login'element = {<Login/>} />
        <Route path='/admin' element = {<RutaProtegida estaAutenticado={estaAutenticado}> <Admin/> </RutaProtegida>} />
        <Route path='/contacto' element={<Contacto/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
