import { useState, useContext } from 'react';
import { CrudContext } from '../context/CrudContext';
import styles from '../components/FormProducto.module.css';

function FormProducto() {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        imagen:''
    });
    const {agregarProducto} = useContext(CrudContext);
    const [errores, setErrores] = useState({});
    const nuevosErrores = {};
    const validarFormulario = () => {
        
        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }
        if (!producto.precio || producto.precio <= 0) {
            nuevosErrores.precio = 'El precio debe ser mayor a 0.';
        }
        if (!producto.descripcion.trim() || producto.descripcion.length < 10)
        {
            nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres.';
        }
        if (!producto.imagen || producto.imagen.length < 12) {
            nuevosErrores.imagen = 'La url de la imagen debe ser mayor a 12 caracteres.';
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarFormulario()){
            agregarProducto(producto); 
            setProducto({ nombre: '', precio: '', descripcion: '', imagen:'' });
            setErrores({});
        }
         
    };

    return (
    <form onSubmit={handleSubmit} className={styles.formcontainer}>
    <h2>Agregar Producto</h2>

    <div className={styles.formgroup}>
        <input
            placeholder='Nombre'
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={handleChange}
        />
        {errores.nombre && <p className={styles.errortext}>{errores.nombre}</p>}
    </div>

    <div className={styles.formgroup}>
        <input
            placeholder='Precio'
            type="number"
            name="precio"
            value={producto.precio}
            onChange={handleChange}
        />
        {errores.precio && <p className={styles.errortext}>{errores.precio}</p>}
    </div>

    <div className={styles.formgroup}>
        <textarea
            placeholder='Introduzca Descripción'
            name="descripcion"
            value={producto.descripcion}
            onChange={handleChange}
        />
        {errores.descripcion && <p className={styles.errortext}>{errores.descripcion}</p>}
    </div>

    <div className={styles.formgroup}>
        <input
            placeholder='URL de la imagen'
            type="text"
            name="imagen"
            value={producto.imagen}
            onChange={handleChange}
        />
        {errores.imagen && <p className={styles.errortext}>{errores.imagen}</p>}
    </div>

    <button type="submit">Agregar Producto</button>
</form>

    );
}
export default FormProducto;
