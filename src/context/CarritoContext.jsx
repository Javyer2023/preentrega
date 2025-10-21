import {useState, createContext} from 'react';

export const CarritoContext = createContext();

export function CarritoProvider({children}){
  
  const [carrito, setCarrito] = useState([]);
  
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const eliminarProducto = (indexEliminar) => {
  const carritoProdEliminado = carrito.filter((_, i) => i !== indexEliminar);
  setCarrito(carritoProdEliminado);
};

  return (
    <CarritoContext.Provider value={{
           carrito,
           agregarAlCarrito,
           vaciarCarrito,
           eliminarProducto}}>
          {children}
    </CarritoContext.Provider>
  );
}


