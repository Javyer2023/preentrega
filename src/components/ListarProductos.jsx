import { useEffect, useState, useContext } from "react";
import { CrudContext } from "../context/CrudContext";
import FormEdicion from "../components/FormEdicion";
import styles from '../components/ListarProductos.module.css'

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const { setProductoEnEdicion,productoEnEdicion, eliminarProducto } = useContext(CrudContext);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const respuesta = await fetch(
          "https://692bd52fc829d464006dbff9.mockapi.io/producto"
        );

        if (!respuesta.ok) {
          throw new Error("Error al obtener los productos.");
        }

        const data = await respuesta.json();
        setProductos(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchProductos();
  }, []);

    const actualizarEnLista = (productoActualizado) => {
      setProductos((prev) =>
        prev.map((p) =>
          p.id === productoActualizado.id ? productoActualizado : p
        )
      );
    };

  const eliminarDeLista = async (id) => {
    const eliminado = await eliminarProducto(id);

    if (eliminado) {
      setProductos((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const productosAMostrar = productoEnEdicion
  ? productos.filter(p => p.id === productoEnEdicion.id)
  : productos;

  return (
    <div>
      <h2>Lista de Productos</h2>

      <ul className={styles.contenedor}>
        {productos.map((producto) => (

          <li key={producto.id}>
            <div className={styles.card}>
                <strong>{producto.nombre}</strong> 
                <p className={styles.price}><span>Precio:</span>{producto.precio} $ </p>                
                <img src={producto.imagen} alt={producto.nombre} width="120" />
                <div className={styles.botones}>
                    <button onClick={() => setProductoEnEdicion(producto)}>
                        Editar
                    </button>
                    <button onClick={() => eliminarDeLista(producto.id)}>
                        Eliminar
                    </button>
                </div>
                
           </div> 

            {productoEnEdicion?.id === producto.id && (
            <FormEdicion onActualizar={actualizarEnLista} />
      )}
          </li>
          
        ))}
      </ul>

    </div>
  );
}

export default ListaProductos;
