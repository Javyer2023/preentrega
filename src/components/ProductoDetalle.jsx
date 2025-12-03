import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Card.module.css';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [productoEncontrado, setProductoEncontrado] = useState(null);

  useEffect(() => {
    fetch(`https://692bd52fc829d464006dbff9.mockapi.io/producto/${id}`)
      .then(res => res.json())
      .then(data => setProductoEncontrado(data))
      .catch(err => console.error('Error al cargar producto:', err));
  }, [id]);

  if (!productoEncontrado) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className={styles.card}>
      <h4>{productoEncontrado.nombre}</h4>
      <p><span>Detalle:</span> {productoEncontrado.descripcion}</p>
      <p className={styles.price}><span>Precio:</span> {productoEncontrado.precio} $</p>
      <img src={productoEncontrado.imagen} alt={productoEncontrado.imagen} />
    </div>
  );
};

export default ProductoDetalle;

