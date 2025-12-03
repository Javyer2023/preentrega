import Navbar from "./Navbar.jsx"

const Header = ({estaAutenticado}) => {
  return (
    <div>
        <h1>Tienda de Productos</h1>
      <Navbar estaAutenticado={estaAutenticado}/>
    </div>
  )
}

export default Header
