import styles from './Navbar.module.css';
import iconocart from '../assets/flowbite--cart-outline.svg';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
const Navbar = ({estaAutenticado}) => {
  const {logout} = useAuthContext();
  return (
    <div className={styles.navcontainer}>
        <ul>
            <li><Link to={'/'}>Inicio</Link></li>
            <li><Link to={'/ofertas'}>Ofertas</Link></li>
            <li><Link to={'/contacto'}>Contacto</Link></li>
            {!estaAutenticado?<li><Link to={'/login'}>Iniciar Sesion</Link></li>:
            <li><button onClick={logout}>Cerrar Sesión</button></li>}
            {estaAutenticado && <li><Link to={'/carrito'}><img src={iconocart} alt="" /></Link></li>}
        </ul>
      
    </div>
  )
}

export default Navbar
