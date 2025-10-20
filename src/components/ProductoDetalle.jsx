import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Card.module.css';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [productoEncontrado, setProductoEncontrado] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProductoEncontrado(data))
      .catch(err => console.error('Error al cargar producto:', err));
  }, [id]);

  if (!productoEncontrado) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className={styles.card}>
      <h4>{productoEncontrado.title}</h4>
      <p><span>Categoría:</span> {productoEncontrado.category}</p>
      <p><span>Detalle:</span> {productoEncontrado.description}</p>
      <p className={styles.price}><span>Precio:</span> {productoEncontrado.price} $</p>
      <img src={productoEncontrado.image} alt={productoEncontrado.title} />
    </div>
  );
};

export default ProductoDetalle;

