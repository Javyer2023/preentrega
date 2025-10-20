import { useContext } from "react";
import styles from './Card.module.css';
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
              <h4>{item.title}</h4>
              <p><span>Categoría:</span> {item.category}</p>
              <p className={styles.price}><span>Precio:</span> {item.price} $</p>
              <img src={item.image} alt={item.title} />
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
