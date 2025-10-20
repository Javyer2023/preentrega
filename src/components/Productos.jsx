import Card from './Card.jsx'
import styles from './Productos.module.css'
import  {useEffect, useState, useContext} from 'react';
import { ProductosContext } from '../context/ProductosContext.jsx';

const Productos = () => {
  const {setProductos} = useContext(ProductosContext); 
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect (()=> {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then((data) => {
      setProductos(data);
      setCargando(false);
    })
    .catch((error) => {
        setError('Hubo un problema al cargar los productos.');
        setCargando(false);
    });
    
  },[]);

  if(cargando) return <p>Cargando productos....</p>
  
  if(error) return <p>{error}</p>
    
  return (
    <section>
      <ul className={styles.cardsContainer}>
       <Card/>
      </ul>
    </section>
  );
}

export default Productos





