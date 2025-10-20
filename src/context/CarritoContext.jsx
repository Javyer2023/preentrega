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

  const eliminarProducto = (indexAEliminar) => {
  const carritoProdEliminado = carrito.filter((_, i) => i !== indexAEliminar);
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


