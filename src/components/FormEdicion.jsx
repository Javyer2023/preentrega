import { useContext, useState } from "react";
import { CrudContext } from "../context/CrudContext";
import styles from '../components/FormProducto.module.css';

function FormEdicion({ onActualizar }) {
  const {
    productoEnEdicion,
    setProductoEnEdicion,
    handleChangeEdicion,
    actualizarProducto,
  } = useContext(CrudContext);

  const [errores, setErrores] = useState({});
  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!productoEnEdicion.nombre) nuevosErrores.nombre = 'El nombre es obligatorio.';
    if (productoEnEdicion.precio <= 0) nuevosErrores.precio = 'El precio debe ser mayor a 0.';
    if (!productoEnEdicion.descripcion || productoEnEdicion.descripcion.length < 10)
      nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres.';
    return nuevosErrores;
  };
  if (!productoEnEdicion) return null; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevosErrores = validarFormulario();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
    return;
    }
   const actualizado = await actualizarProducto();
   if (actualizado) onActualizar(actualizado);
   if (validarFormulario()){
    setErrores({});
    setProductoEnEdicion({ nombre: '', precio: '', descripcion: '', imagen:'' });
   }     
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formcontainer}>
      <h2>Editar Producto</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={productoEnEdicion.nombre || ""}
          onChange={handleChangeEdicion}
         />
         {errores.nombre && <p className={styles.errortext}>{errores.nombre}</p>}
      </div>

      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="precio"
          value={productoEnEdicion.precio || ""}
          onChange={handleChangeEdicion}
          min="0"
        />
        {errores.precio && <p className={styles.errortext}>{errores.precio}</p>}
      </div>

      <div>
        <label>Descripción:</label>
        <textarea
          name="descripcion"
          value={productoEnEdicion.descripcion || ""}
          onChange={handleChangeEdicion}
          
        />
        {errores.descripcion && <p className={styles.errortext}>{errores.descripcion}</p>}
      </div>
      <div className={styles.wrapboton}>
        <button type="submit">Actualizar Producto</button>
        <button type="button" onClick={() => setProductoEnEdicion(null)}>
            Cancelar
        </button>
      </div>
      
    </form>
  );
}

export default FormEdicion;