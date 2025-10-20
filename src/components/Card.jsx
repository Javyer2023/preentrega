import styles from '../components/Card.module.css';
import { useContext } from 'react';
import { ProductosContext } from '../context/ProductosContext';
import { CarritoContext } from '../context/CarritoContext';


const Card = () => {
  const {productos} = useContext(ProductosContext);
  const {agregarAlCarrito} =useContext(CarritoContext);
  return (
    <>
        {productos.map((item,index) => (
          <li key={index}>
            <div className={styles.card}>

              <h4>{item.title}</h4>
              <p><span>Categoría:</span>{item.category}</p>
              <p className={styles.price}><span>Precio:</span>{item.price} $ </p>
              <img src= {item.image} alt={item.image} />
              <button onClick={()=>agregarAlCarrito(item)}>Agregar al Carrito</button>
              
            </div>
            
         </li>
        
        ))}
       
    </>
    
  );
  
}

export default Card