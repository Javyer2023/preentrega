import {useState, createContext} from 'react';

export const ProductosContext = createContext();

export function ProductosProvider({children}){
  
  const [productos, setProductos] = useState([]);
  
  
  return (
    <ProductosContext.Provider value={{productos,setProductos}}>
     {children}
    </ProductosContext.Provider>
  );
}


