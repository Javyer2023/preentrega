import {useState} from 'react'
import FormProducto from './FormProducto'
import ListaProductos from './ListarProductos'


const Admin = () => {
  const [mostrarComponente, setMostrarComponente] = useState(false);

  const handleClick = () => {
    setMostrarComponente(true); 
  };

  return (
    <>
      <h2>Gestion de Productos</h2>
      <button onClick={handleClick}>Agregar Producto</button>
      {mostrarComponente && <FormProducto />}
      <ListaProductos/>
    </>
    
  )
}

export default Admin
