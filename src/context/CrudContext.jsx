import {createContext} from 'react'
import { useState } from 'react';
export const CrudContext = createContext();

export function CrudProvider ({children}) {
    const [productoEnEdicion, setProductoEnEdicion] = useState(null);
    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(
            'https://692bd52fc829d464006dbff9.mockapi.io/producto',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(producto),
            }
            );

            if (!respuesta.ok) {
                throw new Error('Error al agregar el producto.');
            }

            const data = await respuesta.json();
            console.log('Producto agregado:', data);
            alert('Producto agregado correctamente');
        } catch (error) {
            console.error(error);
            alert('Hubo un problema al agregar el producto.');
        }
    };

    const handleChangeEdicion = (e) => {
        const { name, value } = e.target;
        setProductoEnEdicion(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const actualizarProducto = async () => {
        if (!productoEnEdicion) return;
    
        try {
        const respuesta = await fetch(
            `https://692bd52fc829d464006dbff9.mockapi.io/producto/${productoEnEdicion.id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productoEnEdicion)
            }
        );

        if (!respuesta.ok) throw new Error("Error al actualizar el producto.");

        const data = await respuesta.json();
        alert("Producto actualizado correctamente.");
        return data; 
        } 
        catch (error) {
            console.error(error);
            alert("Hubo un problema al actualizar el producto.");
        }
    };

    const eliminarProducto = async (id) => {
        const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este producto?");

        if (!confirmar) return false;

        try {
            const respuesta = await fetch(`https://692bd52fc829d464006dbff9.mockapi.io/producto/${id}`, {
            method: "DELETE"
            });

            if (!respuesta.ok) {
            throw new Error("Error al eliminar el producto.");
            }

            alert("Producto eliminado correctamente.");
            return true; // importante: indica que se eliminó con éxito
        } 
        catch (error) {
            console.error(error.message);
            alert("Hubo un problema al eliminar el producto.");
            return false;
        }
    };

    return (
        <CrudContext.Provider value ={
            {agregarProducto,
             productoEnEdicion,
             setProductoEnEdicion,
             handleChangeEdicion,
             actualizarProducto,
             eliminarProducto   
            }}>
         {children}   
        </CrudContext.Provider>
    );
}


