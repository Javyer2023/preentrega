import styles from '../components/Card.module.css';
import { useContext } from 'react';
import { ProductosContext } from '../context/ProductosContext';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';



const Card = () => {
  const {productos} = useContext(ProductosContext);
  const {agregarAlCarrito} =useContext(CarritoContext);
  const {user} = useAuthContext(); 
  
  return (
    <>
        {productos.map((item,index) => (
          <li key={index}>
            <div className={styles.card}>

              <h4>{item.title}</h4>
              <p><span>Nombre:</span>{item.nombre}</p>
              <p className={styles.price}><span>Precio:</span>{item.precio} $ </p>
              <img src= {item.imagen} alt={item.imagen} />
              <Link to={`/productos/${item.id}`}>Ver Detalle</Link>
              {user === 'user' && <button onClick={() => agregarAlCarrito(item)}>
                    Agregar al Carrito
               </button>}
              
            </div>
            
         </li>
        
        ))}
       
    </>
    
  );
  
}

export default Card