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

  const eliminarProducto = (id) => {
    const carritoProdEliminado = carrito.filter(id => carrito.id !== id);
    setCarrito(carritoProdEliminado);
  }

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


