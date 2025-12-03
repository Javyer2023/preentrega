import {createContext} from 'react'

export const CrudContext = createContext();

export function CrudProvider ({children}) {
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


    return (
        <CrudContext.Provider value ={{agregarProducto}}>
         {children}   
        </CrudContext.Provider>
    );
}


