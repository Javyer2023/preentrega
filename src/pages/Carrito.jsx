import { useContext } from "react";
import styles from '../components/Card.module.css';
import { CarritoContext } from "../context/CarritoContext";
const Carrito = () => {
  const {carrito, eliminarProducto, vaciarCarrito} =useContext(CarritoContext);
  if (carrito){
    
    return (
    <section>
      <h1>Carrito</h1>
      
      <ul>
            
        {carrito.map((item, index) => (
          <li key={index}>
            <div className={styles.card}>
              <h4>{item.nombre}</h4>
              <p className={styles.price}><span>Precio:</span> {item.precio} $</p>
              <img src={item.imagen} alt={item.imagen} />
              <button onClick={() => eliminarProducto(index)}>Eliminar</button>
              
            </div>
          </li>
        ))}
      </ul>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </section>
  )}
  
}

export default Carrito
